import { routerRedux } from 'dva/router';
import { Model, Effect } from 'dva';
import { Reducer } from 'redux';
import { omit } from 'lodash';
import { fakeAccountLogin, isLoginQuery } from '../services/user';
import { reloadAuthorized } from '../utils/Authorized';
import { setUserInfo, getUserInfo, setAuthority, getAuthority, setApiAuths } from '../utils/storage';

export interface UserModelState {
  loginCode: number | undefined; // 登录状态码
  isLogin: boolean;
}

export interface UserModal extends Model {
  namespace: 'user';
  state: UserModelState;
  effects: {
    isLogin: Effect; // 是否登陆中
    login: Effect; // 登录
    logout: Effect; // 登出
  };
  reducers: {
    changeLoginCode: Reducer<any>;
    saveLoginStatus: Reducer<any>;
  };
}

const userModel: UserModal = {
  namespace: 'user',

  state: {
    loginCode: undefined,
    isLogin: false,
  },

  effects: {
    * isLogin(payload, { put, call }) {
      const source: any = yield call(isLoginQuery, payload.code);
      const { code = 0, data = null } = source || {};
      const isLogin = code === 1;

      yield put({
        type: 'saveLoginStatus',
        payload: isLogin,
      });
      if (!isLogin) {
        return yield put(routerRedux.push('/user/login')); // 登陆过期直接跳转登陆页面
      }

      if (!getUserInfo() || !getAuthority()) {
        if (!data) {
          return yield put(routerRedux.push('/user/login')); // 登陆过期直接跳转登陆页面
        }

        // 用户清除缓存设置
        setUserInfo(omit(data, ['apiAuths', 'slideAuths'])); // 设置用户信息
        setAuthority(data.slideAuths); // 设置用户权限
        setApiAuths(data.apiAuths); // 设置接口权限
        reloadAuthorized(); // 加载权限
        yield put(routerRedux.push('/')); // 进入首页
      }
    },
    * login({ payload }, { call, put }) {
      const { data, code } = yield call(fakeAccountLogin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: code,
      });
      // Login successfully
      if (code === 1) {
        setUserInfo(omit(data, ['apiAuths', 'slideAuths'])); // 设置用户信息
        setAuthority(data.slideAuths); // 设置用户权限
        setApiAuths(data.apiAuths); // 设置接口权限
        reloadAuthorized(); // 加载权限
        yield put(routerRedux.push('/')); // 进入首页
      }
    },
    * logout(_, { put, select }) {
      try {
        setUserInfo({token: ''});
        setAuthority([]);
        setApiAuths([]);
        reloadAuthorized(); // 加载权限
        // get location pathname
        const urlParams = new URL(window.location.href);
        const pathname = yield select((state: any) => state.routing.location.pathname);
        // add the parameters in the url
        urlParams.searchParams.set('redirect', pathname);
        window.history.replaceState(null, 'login', urlParams.href);
      } finally {
        yield put({
          type: 'changeLoginStatus',
          payload: {
            code: undefined,
          },
        });
        yield put(routerRedux.push('/user/login'));
      }
    },
  },

  reducers: {
    changeLoginCode(state, { payload }) {
      return {
        ...state,
        loginCode: payload,
      };
    },
    saveLoginStatus(state, { payload }) {
      return {
        ...state,
        isLogin: payload,
      };
    },
  },
};

export default userModel;

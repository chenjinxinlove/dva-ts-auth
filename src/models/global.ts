import { Effect } from 'dva';
import { Reducer } from 'redux';

export type GlobalModelState = {
  collapsed: boolean;
  notices: any[];
};

export type GlobalModal = {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    fetchNotices: Effect;
    clearNotices: Effect;
  };
  reducers: {
    changeLayoutCollapsed: Reducer<any>;
    saveNotices: Reducer<any>;
    saveClearedNotices: Reducer<any>;
  };
};

const globalModel: GlobalModal = {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: []
  },

  effects: {
    *fetchNotices(_: any, { call, put }) {
      const data = yield call();
      yield put({
        type: 'saveNotices',
        payload: data,
      });
      yield put({
        type: 'user/changeNotifyCount',
        payload: data.length,
      });
    },
    *clearNotices({ payload }, { put, select }) {
      yield put({
        type: 'saveClearedNotices',
        payload,
      });
      const count = yield select((state: any) => state.global.notices.length);
      yield put({
        type: 'user/changeNotifyCount',
        payload: count,
      });
    }
  },

  reducers: {
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
    saveNotices(state, { payload }) {
      return {
        ...state,
        notices: payload,
      };
    },
    saveClearedNotices(state, { payload }) {
      return {
        ...state,
        notices: state.notices.filter((item: any) => item.type !== payload),
      };
    },
  }
};

export default globalModel;

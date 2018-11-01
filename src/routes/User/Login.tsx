import * as React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Checkbox } from 'antd';

import Login from '../../components/Login';

import styles from './Login.less';
import { Extend } from '../../utils/misc';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { UserModelState } from '../../models/user';

const { UserName, Password, Submit } = Login; // AuthCode

type StoreData = {
  user: UserModelState;
  submitting: boolean;
};

type LoginPageProps = Extend<StoreData, {
  dispatch: (arg: any) => any;
}>;

type LoginPageState = {
  autoLogin: boolean;
};

@connect(({ user, loading }: any): StoreData => ({
  user,
  submitting: loading.effects['user/login'],
}))

export default class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
  state = {
    autoLogin: true,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'user/isLogin',
    });
  }

  componentWillReceiveProps(nexporps: LoginPageProps) {
    if (!this.props.user.isLogin && nexporps.user.isLogin) {
      this.props.dispatch(routerRedux.push('/'));
    }
  }

  handleSubmit = (err: any, values: any) => {
    // this.refreshAuthCode();

    if (err) {
      return;
    }

    this.props.dispatch({
      type: 'user/login',
      payload: {
          ...values
      },
    });
  }

  changeAutoLogin = (e: CheckboxChangeEvent): void => {
    this.setState({
      autoLogin: e.target.checked,
    });
  }

  refreshAuthCode = (): void => {
    (window.document.getElementById('auth-code-img') as HTMLImageElement).click();
  }

  render() {
    const { submitting } = this.props;
    return (
      <div className={styles.main}>
        <Login onSubmit={this.handleSubmit}>
            <UserName name="userName" placeholder="admin/user" />
            <Password name="password" placeholder="888888/123456" />
          <div>
            <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>
              记住账号
            </Checkbox>
          </div>
          <Submit loading={submitting}>登录</Submit>
        </Login>
      </div>
    );
  }
}

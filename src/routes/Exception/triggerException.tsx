import * as React  from 'react';
import { Button, Spin, Card } from 'antd';
import { connect } from 'dva';
import styles from './style.less';
import { Extend } from '../../utils/misc';

type StoreData = {
  isloading: any;
};

type TriggerExceptionProps = Extend<StoreData, {
  dispatch: (arg: any) => any;
}>;

@connect((state: any) => ({
  isloading: state.error.isloading,
}))
export default class TriggerException extends React.PureComponent<TriggerExceptionProps> {
  state = {
    isloading: false,
  };
  triggerError = (code: any) => {
    this.setState({
      isloading: true,
    });
    this.props.dispatch({
      type: 'error/query',
      payload: {
        code,
      },
    });
  }
  render() {
    return (
      <Card>
        <Spin spinning={this.state.isloading} wrapperClassName={styles.trigger}>
          <Button type="danger" onClick={() => this.triggerError(401)}>
            触发401
          </Button>
          <Button type="danger" onClick={() => this.triggerError(403)}>
            触发403
          </Button>
          <Button type="danger" onClick={() => this.triggerError(500)}>
            触发500
          </Button>
          <Button type="danger" onClick={() => this.triggerError(404)}>
            触发404
          </Button>
        </Spin>
      </Card>
    );
  }
}

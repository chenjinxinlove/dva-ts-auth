import 'url-polyfill';
import 'moment/locale/zh-cn';

import dva, { DvaOption, DvaInstance, Model } from 'dva';
import createLoading from 'dva-loading';

import createHistory from 'history/createHashHistory';

import { Extend } from './utils/misc';

const initConfig: DvaOption = {
  history: createHistory(),
};

export type ReduxSotre = {
  getState(arg: any): any;
  dispatch(arg: any): any;
  subscribe(listener: () => void): any;
  replaceReducer(nextReducer: any): any;
};

export type App = Extend<DvaInstance, {
  _store?: ReduxSotre;
  _models?: Model[];
}>;
const app: App = dva(initConfig);

export const getStore = (): ReduxSotre => {
  return app._store as ReduxSotre; // 强制转换
};

// 2. Plugins
app.use(createLoading());

// 3. Register global model
app.model(require('./models/global.ts').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store;

import * as React from 'react';
export interface IStandardTable {
  columns: any;
  onSelectRow: () => void;
  data: any;
  loading: any;
  rowKey: any;
}

export default class StandardTable extends React.PureComponent<IStandardTable, any> {

}

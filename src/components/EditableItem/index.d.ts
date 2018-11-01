
import * as React from 'react';

export interface IEditableItem {
  onChange?: () => void;
  value: string;
}

export default class EditableItem extends React.PureComponent<IEditableItem , any> {

}

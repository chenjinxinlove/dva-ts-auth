import * as React from 'react';
export interface IEditableLinkGroup {
  links: any[],
  onAdd: () => void,
  linkElement: any
}
export default class EditableLinkGroup extends React.PureComponent<IEditableLinkGroup , any> {

}

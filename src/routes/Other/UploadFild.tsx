import * as React from 'react';
import AuthButton from '../../components/AuthButton';

export default class UploadFild extends React.Component {
  render() {
    return (
      <div>
        <div>验证api权限/upload/other/add</div>
        <AuthButton url="/upload/other/add">验证api权限/upload/other/add</AuthButton>
        <div>验证api权限/upload/other/edit</div>
        <AuthButton url="/upload/other/edit">验证api权限/upload/other/edit</AuthButton>
      </div>
    );
  }
}

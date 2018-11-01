import * as React from 'react';
import checkPermissions from '../Authorized/checkPermissions';
import { Button } from 'antd';

type Props = {
  url: string;
};

const AuthButton: React.SFC<Props> = ({url, ...resProps}) => (
  <React.Fragment>
    {
      checkPermissions(url, true, false) && <Button {...resProps} />
    }
  </React.Fragment>
);

export default AuthButton;

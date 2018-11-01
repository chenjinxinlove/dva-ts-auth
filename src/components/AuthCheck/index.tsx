import * as React from 'react';
import checkPermissions from '../Authorized/checkPermissions';

type Props = {
  url: string;
};

const AuthCheck: React.SFC<Props> = ({url, children}) => (
  <React.Fragment>
    {
      checkPermissions(url, true, false) && {children}
    }
  </React.Fragment>
);

export default AuthCheck;

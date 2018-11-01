import RenderAuthorized from '../components/Authorized';
import { getAuthority } from './storage';

let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line
// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorized(getAuthority());
};

export { reloadAuthorized };
export default Authorized;

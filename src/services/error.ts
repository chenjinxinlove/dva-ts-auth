import request from '../utils/request';

export async function query(code: any) {
  return request(`/api/${code}`, {});
}

import request from '../utils/request';

import baseUrl from '../config/baseUrl';

export async function fakeAccountLogin(params: any) {
  return request(`${baseUrl}api/login`, {
    method: 'POST',
    body: params,
  });
}
export async function isLoginQuery(params: any) {
  return request(`${baseUrl}api/isLogoin`, {
    method: 'POST',
    body: params,
  });
}

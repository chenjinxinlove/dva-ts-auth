import request from '../utils/request';

import baseUrl from '../config/baseUrl';

// 获取登录code

export async function getLoginCode() {
  return request(`${baseUrl}/v1/token/get-code`, {
    method: 'POST',
  });
}

// 检测是否登录  1是没登录 2 是以扫码  3是以登录

export async function queryCurrent(loginCode: any) {
  return request(`${baseUrl}/v1/token/check-login?code=${loginCode}`, {
    method: 'POST',
  });
}

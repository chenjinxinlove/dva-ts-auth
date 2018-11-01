

import store from 'store';
import { getter } from './misc';

const StoreKey = {
  USER_INFO: 'USER_INFO',
  AUTHORITY: 'AUTHORITY',
  ROUTE_DATA: 'ROUTE_DATA',
  FORM_TOGGLE_DATA: 'FORM_TOGGLE_DATA',
  API_DATA: 'API_DATA',
}

// 默认的权限
const DEFAULT_AUTHS =  [
'/user',
'/exception/403',
'/exception/404',
'/exception/500',
'/exception/trigger',
'/user/login']


export function setUserInfo(data) {
  return store.set(StoreKey.USER_INFO, data);
}

export function getUserInfo(field) {
  return getter(store.get(StoreKey.USER_INFO), field);
}

export function getAuthority(field) {
  let authArr = getter(store.get(StoreKey.AUTHORITY), field)
  if (!Array.isArray(authArr)){
    authArr = []
  }
  return authArr.concat(DEFAULT_AUTHS);
}

export function setAuthority(data) {
  return store.set(StoreKey.AUTHORITY, data);
}

export function setFlatedMenuData(data) {
  return store.set(StoreKey.ROUTE_DATA, data);
}

export function setApiAuths(data) {
  return store.set(StoreKey.API_DATA, data);
}
export function getApiAuths(data) {
  return store.get(StoreKey.API_DATA, data);
}

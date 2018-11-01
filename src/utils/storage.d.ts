export interface UserInfo {
  token?: string; // 登录账号
}

import { Many } from './misc';

export function setAuthority(data: object): void;
export function getAuthority(field?: string | string[]): object;

export function setApiAuths(data: object): void;
export function getApiAuths(field?: string | string[]): object;

export function setUserInfo(data: UserInfo): void;
export function getUserInfo<T extends UserInfo, U extends keyof T>(): T;
export function getUserInfo<T extends UserInfo, U extends keyof T>(field?: U[] | U): T[U];

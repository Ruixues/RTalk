
import { axiosReq } from './main';

import config from './config';

/**
 * 登录
 * @param username 用户名
 * @param password 密码
 * 返回"1"则密码错误 返回false即请求错误 返回一串字符串即jwt
 */
export default async function login(username: string, password: string): Promise<string | false> {
  interface Res {
    Code: number;
    Jwt: string;
  }

  let res: Res | false = await axiosReq(
    `http://${config.host}/${config.url.user.login}`, {
    Username: username,
    Password: password
  });
  if (res === false) {
    return false;
  } else {
    if (res['Code'] === 1) {
      return "1";
    } else {
      return res['Jwt'];
    }
  }
} 

/*
 * @文件描述: cookie,sessionStorage
 * @作者: L
 */
import Cookies from 'js-cookie'

// 获取 Cookie
export function getCookie(name) {
    return Cookies.get(name)
}

// 创建 Cookie
export function setCookie(name,value) {
   //创建简单的cookie
    Cookies.set(name, value);
    //创建有效期为7天的cookie
    // Cookies.set('name', 'value', { expires: 7 });
    // //为当前页创建有效期7天的cookie
    // Cookies.set('name', 'value', { expires: 7, path: '' });
} 

// 删除cookie
export function removeCookie (name) {
  return Cookies.remove(name)
}

// 获取sessionStorage
export function getSessionStorage (item) {
  return JSON.parse(sessionStorage.getItem(item))
}

// 设置sessionStorage
export function setSessionStorage (key, value) {
  return typeof value === 'object' ? sessionStorage.setItem(key, JSON.stringify(value)) : sessionStorage.setItem(key, JSON.stringify(`${value}`))
}

// 删除sessionStorage
export function removeSessionStorage (key) {
  return sessionStorage.removeItem(key)
}

/*
 * @文件描述: 请求配置
 * @作者: L
 */

 import axios from 'axios'

 import { getCookie } from '@/utils/auth'


// 设置axios请求默认配置
 const serve = axios.create({
    baseURL: '', // api的base_url前缀
    // baseURL: 'localhost:3000/api/', // api的base_url前缀
    timeout: 1000 * 30 // 请求超时
 })

 // request 拦截器   请求前的拦截器
 serve.interceptors.request.use(
    config => {
        if (getCookie('token')) {
            config.headers.Authorization = getCookie('token')
        }
    }
 )
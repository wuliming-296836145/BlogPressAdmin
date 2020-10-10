/*
 * @文件描述: 进度条,权限控制
 * @作者: L
 */
import router from '@/router/'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
    Nprogress.start()   // 进度条开始
    next()  // 放行
    setTimeout(() => {
        Nprogress.done()
    }, 300)
})
  
router.afterEach(() => {
    Nprogress.done()    // 进度条结束
})
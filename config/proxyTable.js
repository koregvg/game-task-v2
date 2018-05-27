/**
 * Created by wangpai on 2018/5/27 0027.
 */

'use strict'
module.exports = {
    dev: {
        '/notice/get/unreadcount': {
            target: 'https://zhidao.baidu.com',
            changeOrigin: true,
        }
    },
    build: {
        '/notice/get/unreadcount': {
            target: 'https://zhidao.baidu.com',
            changeOrigin: true,
        }
    }
}
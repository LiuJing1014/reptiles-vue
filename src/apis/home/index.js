const axios = window.axios;

// const qs = require('qs')

let errObj = {message: "服务器错误", data: {}, code: '1'}

/**
 * 获取热门商品
 * @returns {Promise<{code: string, data: {}, message: string}|*>}
 */
export const hotProduct = async () => {
    try {
        return await axios.get("/home/hotProduct")
    } catch (e) {
        return errObj
    }
}
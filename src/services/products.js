import { get } from '../utils/request'
/**
 * 分页的形式获取商品列表
 * @param {*} page 页码
 */
export function getList(page) {
  return get('/api/v1/products', { page })
}
/**
 * 根据id获取的单个商品
 * @param {*} id 商品id
 */
export function getOne(id) {
  return get('/api/v1/products' + id)
}

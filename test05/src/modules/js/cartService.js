import { fetch, rap } from 'js/fetch.js'

let url = {
  list: '/cart/list.do',
  add: '/cart/add.do',
  reduce: '/cart/reduce.do',
  remove: '/cart/remove.do'
}
url = rap(url)

class cart {

  static list(data) {
    return fetch(url.list, data)
  }

  static add(data) {
    return fetch(url.add, data)
  }

  static reduce(data) {
    return fetch(url.reduce, data)
  }

}

export default cart

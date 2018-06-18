import 'normalize.css'
import './register.scss'

import { Message } from 'element-ui'

import { checkphone } from 'js/validate.js'
import { fetch, rap } from 'js/fetch.js'
let url = {
  register: '/user/register.do',
  getCode: '/user/getCode.do'
}
url = rap(url)

let ss = 10

new Vue({
  el: '.register',
  data: {
    phone: '',
    phoneMsg: '',
    seconds: ss,
    timer: null,
    isSuccess: false
  },
  methods: {
    validatePhone() {
      if (!this.phone) {
        this.phoneMsg = '请填写手机号'
        return false
      }
      if (!checkphone(this.phone)) {
        this.phoneMsg = '请输入11位正确的手机号码'
        return false
      }
      this.phoneMsg = ''
      return true
    },
    getCode() {
      if (this.validatePhone()) {
        if(this.seconds != ss){
          return false
        }
        fetch(url.getCode, {
          mobile: this.phone
        }).then(res => {
          Message({
            message: res.message,
            type: 'success'
          })

          this.timer = setInterval(this.countDown,1000)

        })
      }
    },
    countDown() {
      this.seconds--;
      if(this.seconds <= 0){
        clearInterval(this.timer)
        this.timer = null
        this.seconds = ss
      }
    },
    register() {
      // 表单的校验、请求参数
      fetch(url.register,{

      }).then(res => {
        this.isSuccess = true
      })
    }
  }
})

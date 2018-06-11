import 'normalize.css'
import './register.css'
import { checkphone } from 'js/validate'
import Vue from 'vue'
import { Message } from 'element-ui';
import { rap, fetch } from 'js/fetch.js'
let url = {
  getCode: '/user/getCode.do',
  register: '/user/register.do'
}

url = rap(url)
let ss = 10
new Vue({
  el: '.register',
  data: {
    phone: "13913967296",
    phoneMsg: "",
    seconds: ss,
    timer: null,
    isSucess: false,
    authentiCode: '',
    authentiCodeMsg: '',
    password: '',
    passwordMsg: '',
    confirmPwd: "",
    confirmPwdMsg: ""
  },
  methods: {
    validatePhone() {
      if (!this.phone) {
        this.phoneMsg = "手机号不能为空"
        return false
      }
      if (!checkphone(this.phone)) {
        this.phoneMsg = "请输入合法的11位手机号"
        return false
      }
      this.phoneMsg = ""
      return true
    },
    getCode() {
      if (this.validatePhone()) {
        if (this.seconds != ss) {
          return false
        }
        fetch(url.getCode, {
          mobile: this.phone
        }).then(res => {
          Message({
            message: res.message,
            type: 'success'
          })
          this.timer = setInterval(this.countDown, 1000)
        })
      }
    },
    countDown() {
      this.seconds--;
      if (this.seconds <= 0) {
        clearInterval(this.timer)
        this.timer = null
        this.seconds = 10
      }
    },
    register() {
      if (this.validatePhone() && this.validateConfirmPwd() && this.validatePwd() && this.validateAuthenti()) {
        fetch(url.register, {
          mobile: this.phone,
          pwd: this.password,
          authenticode: this.authentiCode
        }).then(res => {
          if (res.code != this.authentiCode) {
            this.authentiCodeMsg = "验证码错误"
            return
          }
          this.isSucess = true
        })
      }
    },
    validateConfirmPwd() {
      if (this.password != this.confirmPwd) {
        this.confirmPwdMsg = "两次密码不一致"
        return false
      }
      this.confirmPwdMsg = ""
      return true
    },
    validatePwd() {
      if (!this.password) {
        this.passwordMsg = "密码不能为空"
        return false
      }
      this.passwordMsg = ""
      return true
    },
    validateAuthenti() {
      if (!this.authentiCode) {
        this.authentiCodeMsg = "验证码不能为空"
        return false
      }
      this.authentiCodeMsg = ""
      return true
    },
    login() {
      console.log("跳转登录页面")
      location.href = "login.html"
    }
  }
})

import 'normalize.css'
import './login.css'
import Vue from 'vue'
import { checkphone } from 'js/validate.js'
import { rap, fetch } from 'js/fetch.js'

let url = {
  login: 'user/login.do'
}
url = rap(url)


new Vue({
  el: '#loginBoxMsg',
  data: {
    phone: '',
    pwd: '',
    phoneMsg: '',
    pwdMsg: ''
  },
  methods: {
    inputPhone(e) {
      this.phone = e.target.value
    },
    validatePhone() {
      if (!this.phone) {
        this.phoneMsg = "手机号不能为空"
        return false
      }
      if (!checkphone(this.phone)) {
        this.phoneMsg = "请输入11位合法的手机号"
        return false
      }
      this.phoneMsg = ""
      return true
    },
    validatePwd() {
      if (!this.pwd) {
        this.pwdMsg = "请输入密码"
        return false
      }
      this.pwdMsg = ""
      return true
    },
    // login() {
    //   if (this.validatePhone() && this.validatePwd()) {
    //     location.href = "index.html"
    //   }
    // }
    login() {
      if (this.validatePhone() && this.validatePwd())
        fetch(url.login, {
          mobile: this.phone,
          pwd: this.pwd
        }).then(res => {
          console.log(res)
          //  location.href = 'index.html'
        }, res => {

        })
    }
  }
})

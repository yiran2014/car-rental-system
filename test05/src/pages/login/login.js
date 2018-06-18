import 'normalize.css'
import './login.scss'

import {checkphone} from 'js/validate.js'
import {rap,fetch} from 'js/fetch.js'

let url = {
  login : '/user/login.do'
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
    validatePhone() {
      if(!this.phone){
        this.phoneMsg = '请输入手机号码'
        return false
      }
      if(!checkphone(this.phone)){
        this.phoneMsg = '请输入11位正确的手机号码'
        return false
      }
      this.phoneMsg = ''
      return true
    },
    valiedatePwd() {
      if(!this.pwd){
        this.pwdMsg = '请填写密码'
        return false
      }
      this.pwdMsg = ''
      return true
    },
    login() {
      if(this.validatePhone() && this.valiedatePwd()){
        fetch(url.login,{
          mobile: this.phone,
          pwd: this.pwd
        }).then(res => {
          location.href = 'index.html'
        },res => {

        })
      }
    }
  }
})

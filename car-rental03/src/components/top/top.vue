<template>
  <div id="head" class="hd wrapper-width">
    <div class="main-content-w">
        <ul class="hd-left">
            <li>您好，欢迎来到溧阳挖掘机服务平台!</li>
            <li v-if="!isLogin">
                <a href="login.html">请登录</a>
                <a href="register.html">注册</a>
            </li>
            <li v-else>
                <a href="login.html">{{mobile}}，您好！</a>
                <a href="javascript:;" @click="logout">退出</a>
            </li>
        </ul>
        <ul class="hd-right">
            <li><a href="javascript:;" ><i class="icon-Home"></i>首页</a> | </li>
            <li><a href="javascript:;" ><i class="icon-geren"></i>个人中心</a> | </li>
            <li><a href="javascript:;" ><i class="icon-aboutus"></i>关于我们</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
import {fetch,rap} from 'js/fetch'
var url={
  list:'user/getUser.do',
  logout:'user/logout.do'
}
url=rap(url)
  export default{
    data(){
      return{
        mobile:'123',
        isLogin:false
      }
    },
    created(){
      this.getInfo()
    },
    methods:{
      getInfo(){
        fetch(url.list).then(res=>{
            this.mobile=res.data.user.mobile
            this.isLogin=true
          })
      },
      logout(){
        fetch(url.logout).then(res=>{
          this.mobile=""
            this.isLogin=false
        })
      }
    }
  }
</script>

<style lang="scss">
	@import "../../modules/sass/variables.scss";

 .wrapper-width {
   min-width: 1200px;
 }

 .hd {
   height: 33px;
   background-color: #eee;
   line-height: 33px;
   font-size: $fz-12;
   color: #3c3c3c;
   overflow: hidden;
 }

 .hd-left {
   float: left;
   li {
     float: left;
     a {
       display: block;
       float: left;
       padding: 0 12px;
       line-height: 33px;
       color: $theme-color;
     }
   }
 }

 .hd-right {
   float: right;
   height: 33px;
   line-height: 33px;
   li {
     float: left;
     height: 33px;
     font-size: 12px;
     i {
       padding: 0 3px;
       font-size: 18px;
       vertical-align: -2px;
     }
   }
   a {
     margin: 0 10px;
     color: $common-color;
     font-size: 12px;
   }
   a:hover {
     color: $theme-color;
   }
 }

</style>
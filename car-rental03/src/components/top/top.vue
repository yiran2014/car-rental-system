<template>
  <div id="head" class="hd wrapper-width">
    <div class="main-content-w">
        <ul class="hd-left">
            <li>您好，欢迎来到饥人谷挖掘机服务平台!</li>
            <li >
                <a href="login.html">请登录</a>
                <a href="register.html">注册</a>
            </li>
            <li >
                <a href="login.html">手机号，您好！</a>
                <a href="javascript:;" >退出</a>
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
  // import vm from './top.js'
  // export default vm
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
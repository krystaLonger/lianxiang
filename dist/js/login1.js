"use strict";$(".banner>.land>.land_text>form>.button").click(function(a){a.preventDefault(),$.ajax({type:"post",url:"/login",data:{username:$("#username").val(),password:$("#password").val()},dataType:"json",success:function(a){console.log(a),1===a.code?window.location.href="http://localhost:8080/pages/index1.html":alert("输入的用户名不存在或密码错误")}})});
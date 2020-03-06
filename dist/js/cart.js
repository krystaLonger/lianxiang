"use strict";var cartList=JSON.parse(localStorage.getItem("cartList"));function bindHtml(){var t=cartList.every(function(t){return!0===t.isSelect}),n="";n+='\n\t\t<div class="top">\n\t\t\t<input type="checkbox"  class="selectAll" '.concat(t?"checked":"",'/>\n\t\t\t<p>商品</p>\n\t\t\t<span>规格</span>\n\t\t\t<span>单价</span>\n\t\t\t<span>数量</span>\n\t\t\t<span>金额</span>\n\t\t\t<span>操作</span>\n\t\t</div>\n\t\t<ul class="center">\n\t\t'),cartList.forEach(function(t){n+='\n\t\t\t\t<li>\n\t\t\t\t\t<div class="select">\n\t\t\t\t\t\t<input data-id='.concat(t.id,' type="checkbox" class="selectOne" ').concat(t.isSelect?"checked":"",'/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="info">\n\t\t\t\t\t\t<img src="').concat(t.img_src,'" >\n\t\t\t\t\t\t<p>').concat(t.title,'</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="guige">-</div>\n\t\t\t\t\t<div class="jine">').concat(t.pri,'</div>\n\t\t\t\t\t<div class="number">\n\t\t\t\t\t\t<button type="button" class="sub" data-id=').concat(t.id,'>-</button>\n\t\t\t\t\t\t<input type="text" value="').concat(t.number,'" />\n\t\t\t\t\t\t<button type="button" class="add" data-id=').concat(t.id,'>+</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="zongji">￥:').concat(t.xiaoji,'</div>\n\t\t\t\t\t<div class="del" data-id=').concat(t.id,">删除</div>\n\t\t\t\t</li>\n\t\t\t")});var c=cartList.filter(function(t){return t.isSelect}),i=0,a=0;c.forEach(function(t){i+=t.number,a+=t.xiaoji}),n+='\n\t\t</ul>\n\t\t<div class="bottom">\n\t\t\t<div class="choice"><input type="checkbox"  class="selectAll" '.concat(t?"checked":"",'/>全选</div>\n\t\t\t<span>删除选中商品</span>\n\t\t\t<div class="price">\n\t\t\t\t<p>选中商品数量:<i>&nbsp; ').concat(i," &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i></p>\n\t\t\t\t<p>商品总价:<i>￥：").concat(a,' </i></p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="btn">\n\t\t\t<button type="button" ').concat(c.length?"":"disabled",">结算</button>\n\t\t\t<button type=\"button\" class='clear' >清空购物车</button>\n\t\t</div>\n\t\n\t"),$(".cart").html(n)}function bindEvent(){$(".cart").on("change",".selectAll",function(){var n=this;cartList.forEach(function(t){t.isSelect=n.checked}),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))}),$(".cart").on("change",".selectOne",function(){var n=$(this).data("id");cartList.forEach(function(t){t.id===n&&(t.isSelect=!t.isSelect)}),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))}),$(".cart").on("click",".sub",function(){var n=$(this).data("id");cartList.forEach(function(t){t.id===n&&(1!==t.number&&t.number--,t.xiaoji=t.pri*t.number)}),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))}),$(".cart").on("click",".add",function(){var n=$(this).data("id");cartList.forEach(function(t){t.id===n&&(t.number++,t.xiaoji=t.pri*t.number)}),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))}),$(".cart").on("click",".del",function(){var c=$(this).data("id");cartList.forEach(function(t,n){t.id===c&&cartList.splice(n,1)}),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))}),$(".cart").on("click",".clear",function(){cartList.splice(0,cartList.length),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))})}cartList?(bindHtml(),bindEvent()):(alert("您的购物车为空，快去选购吧"),window.location.href="../pages/list.html");
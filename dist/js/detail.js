"use strict";jQuery(function(){$(".my-foto").imagezoomsl({zoomrange:[3,3]})});var detailPages=JSON.parse(localStorage.getItem("detail_pages"));function goodsInfo(){$(".n>.nav>i").text(detailPages.title),$(".con>.con_left>img").attr("src",detailPages.img_src),$(".con>.con_left>img").attr("data-large",detailPages.img_src),$(".con>.con_right>.goods>h2").text(detailPages.title).next().text(detailPages.int),$(".con .price_top .price_num").text(detailPages.pri)}goodsInfo(),$(".con .add .cart").click(function(){var e=JSON.parse(localStorage.getItem("cartList"))||[];if(e.some(function(e){return e.id===detailPages.id})){for(var t=0;t<e.length;t++)if(e[t].id===detailPages.id){e[t].number++,e[t].xiaoji=e[t].number*e[t].pri;break}}else detailPages.number=1,detailPages.xiaoji=detailPages.pri,detailPages.isSelect=!1,e.push(detailPages);localStorage.setItem("cartList",JSON.stringify(e))});
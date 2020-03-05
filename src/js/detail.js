//放大镜效果
jQuery(function(){
   
      $(".my-foto").imagezoomsl({
        
         zoomrange: [3, 3]
      });
   });
   
//导入localStorage数据

const detailPages = JSON.parse(localStorage.getItem('detail_pages'))

// console.log(detailPages )
//判断数据是否存在
// if(!detailPages){
// 	alert('该商品不存在。')
// 	window.location.href = '../pages/list.html'
// }

//渲染数据
goodsInfo()
function goodsInfo(){
	$('.n>.nav>i').text(detailPages.title)
	$('.con>.con_left>img').attr('src',detailPages.img_src)
	$('.con>.con_left>img').attr('data-large',detailPages.img_src)
	$('.con>.con_right>.goods>h2').text(detailPages.title).next().text(detailPages.int)
	$('.con .price_top .price_num').text(detailPages.pri)
}

//点击添加购物车
$('.con .add .cart').click(() => {
	// console.log('jiarugouwuc ')
	const cartList = JSON.parse(localStorage.getItem('cartList')) || []
	// console.log(cartList)
	// cartList.push(detailPages)
	//判断加入购物车是否重复
	let exits = cartList.some(item => {
		return item.id === detailPages.id
	})
	
	if(exits){
		// console.log('已经存在')
		// let data = null
		for(let i = 0; i < cartList.length ; i++){
			if(cartList[i].id === detailPages.id){
				cartList[i].number++
				cartList[i].xiaoji = cartList[i].number * cartList[i].pri
				break
			}
		}
		// data.number++
	}else{
		detailPages.number = 1
		detailPages.xiaoji = detailPages.pri
		detailPages.isSelect = false
		cartList.push(detailPages)
	}
	
	
	localStorage.setItem('cartList',JSON.stringify(cartList))
	// console.log(cartList)
})
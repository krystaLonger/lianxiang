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
// console.log($('.configure li span')[0].className)
//选择属性
$('.configure li').on('click','span',function(){
	$(this).addClass('choice').siblings().removeClass('choice') 
})

//点击添加购物车
$('.con .add .cart').click(() => {
	// 属性是否添加
	let index = 0
	for (let i = 0 ; i < $('.configure li span').length ; i++){
		if($('.configure li span')[i].className === 'choice' ){
			index ++
		}
		
	}
	if( index !== 3){
		alert('请选择商品属性')
	}else{
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
		
		// window.location.href = '../pages/cart.html'
		localStorage.setItem('cartList',JSON.stringify(cartList))
		// console.log(cartList)
		alert('加入购物车成功')
	}
	
})
const cartList = JSON.parse(localStorage.getItem('cartList'))
// console.log(cartList)
if(!cartList){
	alert('您的购物车为空，快去选购吧')
}else{
	//渲染数据
	bindHtml()
	
	//添加事件
	bindEvent()
}
// console.log(cartList)
function bindHtml(){
	let selectAll = cartList.every(item => {
		return item.isSelect === true
	})
	let str = ''
	str += `
		<div class="top">
			<input type="checkbox"  class="selectAll" ${selectAll ? 'checked' : ''}/>
			<p>商品</p>
			<span>规格</span>
			<span>单价</span>
			<span>数量</span>
			<span>金额</span>
			<span>操作</span>
		</div>
		<ul class="center">
		`
		cartList.forEach(item => {
			str += `
				<li>
					<div class="select">
						<input data-id=${item.id} type="checkbox" class="selectOne" ${item.isSelect ? 'checked' : ''}/>
					</div>
					<div class="info">
						<img src="${item.img_src}" >
						<p>${item.title}</p>
					</div>
					<div class="guige">-</div>
					<div class="jine">${item.pri}</div>
					<div class="number">
						<button type="button" class="sub" data-id=${item.id}>-</button>
						<input type="text" value="${item.number}" />
						<button type="button" class="add" data-id=${item.id}>+</button>
					</div>
					<div class="zongji">￥:${item.xiaoji}</div>
					<div class="del" data-id=${item.id}>删除</div>
				</li>
			`
		})
		
		let selectArr = cartList.filter( item => item.isSelect
		// {
		// 	return item.isSelect === true
		// }
		)
		// console.log(selectArr)
		let selectNumber = 0
		let selectPrice = 0
		selectArr.forEach(item =>{
			selectNumber += item.number
			selectPrice += item.xiaoji
		})
		
		str+=`
		</ul>
		<div class="bottom">
			<div class="choice"><input type="checkbox"  class="selectAll" ${selectAll ? 'checked' : ''}/>全选</div>
			<span>删除选中商品</span>
			<div class="price">
				<p>选中商品数量:<i>&nbsp; ${selectNumber} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i></p>
				<p>商品总价:<i>￥：${selectPrice} </i></p>
			</div>
		</div>
		<div class="btn">
			<button type="button" ${selectArr.length ? '' : 'disabled'}>结算</button>
			<button type="button" class='clear' >清空购物车</button>
		</div>
	
	`
	$('.cart').html(str)
}

//添加事件
function bindEvent(){
	//全选
	$('.cart').on('change','.selectAll',function(){
		// console.log(this.checked)
		cartList.forEach(item => {
			item.isSelect = this.checked
		})
		bindHtml()
		localStorage.setItem('cartList',JSON.stringify(cartList))
	})
	
	//单选
	$('.cart').on('change','.selectOne',function(){
		// console.log($(this).data('id'))
		const id = $(this).data('id')
		cartList.forEach(item => {
			if(item.id === id){
				item.isSelect = !item.isSelect
			}
		})
		
		bindHtml()
		
		localStorage.setItem('cartList',JSON.stringify(cartList))
	})
	
	//减少商品数量
	$('.cart').on('click','.sub',function(){
		const id = $(this).data('id')
		cartList.forEach(item => {
			if(item.id === id){
				item.number !== 1 ?item.number -- : ''
				item.xiaoji = item.pri *item.number
			}
		})
		
		bindHtml()
		
		localStorage.setItem('cartList',JSON.stringify(cartList))
	})
	
	//增加商品数量
	$('.cart').on('click','.add',function(){
		const id = $(this).data('id')
		cartList.forEach(item => {
			if(item.id === id){
				item.number ++
				item.xiaoji = item.pri *item.number
			}
		})
		
		bindHtml()
		
		localStorage.setItem('cartList',JSON.stringify(cartList))
	})
	
	
}
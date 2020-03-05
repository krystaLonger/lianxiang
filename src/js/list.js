$('.list>.box> ul>li').mouseover(function(){
	$(this)
	.addClass('active')
	.siblings() 
    .removeClass('active') 
})
$('.list ul>li').mouseout(function(){
	$(this)
	.removeClass('active')
	.siblings() 
    .removeClass('active') 
})

var flag = true

//接收数组
var list2 = []

// 请求数据
getList()
function getList(){
	$.ajax({
		url:'../lib/list.json',
		dataType:'json',
		success:function(res){
			
			//渲染分页器
			$('.content>.pagi').pagination({
				pageCount: Math.ceil(res.length/24),
				current:1,
				jump: true,
				coping: true,
				homePage: '首页',
				endPage: '末页',
				prevContent: '<<',
				nextContent: '>>',
				callback: function (api) {
					// console.log(api.getCurrent())
					let curr = api.getCurrent()
					// console.log(curr)
					var list = res.slice((curr-1)*24,curr*24)
					// console.log(list)
					bindHtml(list)
				}
			})
			
			bindHtml(res.slice(0,24))
			
			list2 = res
		}
	})
}
function bindHtml(list){
	let str = ''
	list.forEach(item => {
		str +=`
			<li data-id = "${item.id}">
				<a href="javascript:;"><img src="${item.img_src}" ></a>
				<div class="lebal">
					<i>定制</i>
					<i>换新</i>
				</div>
				<p>${item.title}</p>
				<span>${item.int}</span>
				<div class="search_price">￥${item.pri}</div>
			</li>
		`
	})
	$('.content>.pro').html(str)
}

var btn = document.querySelector('.content .headnav .btn')
// console.log(btn)
btn.onclick = function(){
	flag = !flag
	// console.log(flag)
	
	
	// console.log(list2.sort())
	list2.sort(function(a,b){
		if(flag === true){
			return a.pri - b.pri
		}else{
			return b.pri - a.pri
		}
	})
	// console.log(list)
	$('.content>.pagi').pagination({
		pageCount: Math.ceil(list2.length/24),
		current:1,
		jump: true,
		coping: true,
		homePage: '首页',
		endPage: '末页',
		prevContent: '<<',
		nextContent: '>>',
		callback: function (api) {
			// console.log(api.getCurrent())
			let curr = api.getCurrent()
			// console.log(curr)
			var list = list2.slice((curr-1)*24,curr*24)
			// console.log(list)
			bindHtml(list)
		}
	})
	
	bindHtml(list2.slice(0,24))
}

//跳转详情页
$('.content>.pro').on('click','li',function(){
	// console.log(this)
	const id = $(this).data('id')
	// console.log(id)
	let data = {}
	for (let i = 0 ; i < list2.length; i++){
		if(list2[i].id === id){
			data = list2[i]
			break
		}
	}
	localStorage.setItem('detail_pages',JSON.stringify(data))
	
	window.location.href = '../pages/detail.html'
})




//获取线上数据分页渲染
// //记录分页器切换的当前页数
// let currPage = 1
// //准备一个开关用来决定分页器函数是否执行
// let flag = true

// getData()
// function getData(){
// 	$.ajax({
// 		url:'/dm',
// 		data:{
// 			keyword:'',
// 			cty:'',
// 			ctl:'演唱会',
// 			sctl:'',
// 			tsg:0,
// 			st:'',
// 			et:'',
// 			order:'1',
// 			pageSize:'24',
// 			currPage:currPage,
// 			tn:''
// 		},
// 		dataType:'json',
// 		success:function(res){
// 			// console.log(res)
// 			bindHtml(res.pageData.resultData)
			
// 			// if(flag === true){
// 			// 	bindPagi(res.pageData.totalPage)
// 			flag && bindPagi(res.pageData.totalPage)
// 			}
			
// 	})
// }
// function bindHtml(list){
// 	console.log(list)
// 	let str = ''
// 	list.forEach(item => {
// 		str += `
// 		<li>
// 			<a href=""><img src="${item.verticalPic}" ></a>
// 			<div class="lebal">
// 				<i>定制</i>
// 				<i>换新</i>
// 			</div>
// 			<p>${item.actors}</p>
// 			<span>${item.name}</span>
// 			<div class="search_price">
// 				${item.pricehigh}
// 			</div>
// 		</li>
// 		`
// 	})
// 	$('.content>.pro').html(str)
// }
// function bindPagi(totalPage){
// 	// console.log(totalPage)
// 	// 关闭开关
// 	flag = false
	
// 	$('.content>.pagi').pagination({
// 	    pageCount: totalPage,
// 		current:1,
// 	    jump: true,
// 	    coping: true,
// 	    homePage: '首页',
// 	    endPage: '末页',
// 	    prevContent: '<<',
// 	    nextContent: '>>',
// 	    callback: function (api) {
// 	        // console.log(api.getCurrent())
// 			//获取点击时的页数
// 			currPage = api.getCurrent()
			
// 			getData()
// 	    }
// 	})
// }
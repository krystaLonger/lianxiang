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
//记录分页器切换的当前页数
let currPage = 1
//准备一个开关用来决定分页器函数是否执行
let flag = true

getData()
function getData(){
	$.ajax({
		url:'/dm',
		data:{
			keyword:'',
			cty:'',
			ctl:'演唱会',
			sctl:'',
			tsg:0,
			st:'',
			et:'',
			order:'1',
			pageSize:'24',
			currPage:currPage,
			tn:''
		},
		dataType:'json',
		success:function(res){
			// console.log(res)
			bindHtml(res.pageData.resultData)
			
			// if(flag === true){
			// 	bindPagi(res.pageData.totalPage)
			flag && bindPagi(res.pageData.totalPage)
			}
			
	})
}
function bindHtml(list){
	console.log(list)
}
function bindPagi(totalPage){
	// console.log(totalPage)
	// 关闭开关
	flag = false
	
	$('.content>.pagi').pagination({
	    pageCount: totalPage,
		current:1,
	    jump: true,
	    coping: true,
	    homePage: '首页',
	    endPage: '末页',
	    prevContent: '<<',
	    nextContent: '>>',
	    callback: function (api) {
	        // console.log(api.getCurrent())
			//获取点击时的页数
			currPage = api.getCurrent()
			
			getData()
	    }
	})
}
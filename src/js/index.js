getList()
function getList(){
	$.ajax({
		url:'../lib/ThinkPad.json',
		dataType:'json',
		success:function(res){
			let str = ''
			res.forEach(item => {
				str += `
				<div>
					<a href="">
						<p>${item.title}</p>
						<span></span>
					</a>
					<ul>
					`
					item.list.forEach(item =>{
						str += `
						<li class="clearbox">
							<p>${item.name}</p>
							<ol >
							`
							item.type.forEach(item => {
								str += `<li>${item.word}</li>`
							})
							str +=
							`
							</ol>
						</li>
						`
					})
					str +=
					`
					</ul>
					<div class="png">
						<a href=""><img src="${item.img_src}" ></a>
						<a href=""><img src="${item.img_url}" ></a>
					</div>
				</div>
				`
			})
			
			$('.list>.option')
			.html(str)
			.children()
			.on({
				mouseenter: function(){
					$(this).children().stop().show()
				},
				mouseleave:() => $('.list>.option ul,.list>.option .png').stop().hide()
			})
			
		}
	})
}
//回到顶部
 $(window).scroll(() => {
      if ($(window).scrollTop() >= 200) {
        $('.sort').fadeIn()
      } else {
        $('.sort').fadeOut()
      }
    })

    $('.sort .back').click(() => {
      $('html').animate({
        scrollTop: 0
      }, 1000)
    })
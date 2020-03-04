 $('.login>.page h3').click(function () {
      $(this) 
        .addClass('click') 
        .siblings() 
        .removeClass('click') 
        .parent() 
        .next() 
        .children('.ent') 
		.children()
        .removeClass('pre') 
        .eq($(this).index() ) 
        .addClass('pre') 
})
$('.login>.page>form>.button').click(function(e) {
    e.preventDefault()
    $.ajax({
        type: 'post',
        url: '/logon',
        data: {
            username: $('.phone').val(),
            password: $('.pwd').val()
        },
        dataType: 'JSON', //传过来的json数据解析
        success: function(res) {
            console.log(res)
            if (res.code === 0) {
                alert('该账号已经被注册')
            } else if (res.code === 1) {
                alert('注册成功，快去登录吧')
                window.location.href = 'http://localhost:8080/pages/login1.html';
            }
        }
    })
})
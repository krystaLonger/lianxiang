$('.banner>.land>.land_text>form>.button').click(function(e) {
    e.preventDefault()
    $.ajax({
            type: 'post',
            url: '/login',
            data: {
                username: $('#username').val(),
                password: $('#password').val()
            },
            dataType: 'json',
            success: function(res) {
                console.log(res)
                if (res.code === 1) {
                    window.location.href = 'http://localhost:8080/pages/index1.html';
                } else {
                    alert('输入的用户名不存在或密码错误')
                }
            }
        })
})

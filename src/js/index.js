getList()
function getList(){
	$.ajax({
		url:'../lib/Lenovo.json',
		dataType:'json',
		success:function(res){
			let str = ''
			res.forEach(item =>{
				str +=`
				<li class="clearbox">
					<p>${item.title}</p>
					<ol >
					`
					item.list.forEach(item2 => {
						str += `<li>${item2.name}</li>`
					})
					
					str +=
					`	
					</ol>
				</li>
				`
			})
			$('.list>.option>div>ul').html(str)
		}
	})
}

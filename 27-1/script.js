	$.get({
	url: 'https://api.vk.com/method/friends.get',
	method: 'GET',
	dataType: 'jsonp',
	success: (data) =>{
		console.log(data)
		for (var i = 0; i < data.response.items.length; i++) {
			var li = $('<li class="list-group-item"></li>').text(data.response.items[i].first_name + " " + data.response.items[i].last_name)
        	$('ul').append(li)
    	}
    	var index = [];
		$('input').on('keyup', () => {
		    for (var i = 0; i < data.response.items.length; i++) {
		      $('ul > li').eq(i).show()
		    }
 		 var index = [];
		  for (var i = 0; i < data.response.items.length; i++) { 
		  var name = data.response.items[i].first_name.toLowerCase() + " " + data.response.items[i].last_name.toLowerCase(),
		        value = $('input').val()
		    if(name.indexOf(value.toLowerCase()) == -1){
		      index.push(i)
		    }
		    if(i == data.response.items.length-1){
		      for (var j = 0; j < index.length; j++) {
		        $('ul > li').eq([index[j]]).hide()
		      }
		    }
		  }
		})
	}
}, 
{
	access_token: 'cd9a0e381fcef675ec9786a1d1a2224e1f73da3c1525a2e73a30a9ce83572a2ac0d1c9523f0da04615e5c',
	v: 5.37,
	fields: 'domain'
})

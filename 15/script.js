var json = '[{"id":516,"photo":"https://unsplash.it/500/300?image=458","first_name":"Geneva","last_name":"Pinebrook","age":42,"gender":"Male","live":{"country":"AndorrA","city":"Ouagadougou"}},{"id":517,"photo":"https://unsplash.it/500/300?image=791","first_name":"Bibbye","last_name":"Engud","age":18,"gender":"Female","live":{"country":"Cambodia","city":"Likasi"}},{"id":518,"photo":"https://unsplash.it/500/300?image=835","first_name":"Brit","last_name":"Quennie","age":22,"gender":"Male","live":{"country":"AndorrA","city":"Molah"}},{"id":519,"photo":"https://unsplash.it/500/300?image=325","first_name":"Bettye","last_name":"Roz","age":42,"gender":"Male","live":{"country":"Senegal","city":"Edgecliff"}},{"id":520,"photo":"https://unsplash.it/500/300?image=288","first_name":"Davine","last_name":"Ginny","age":34,"gender":"Female","live":{"country":"Switzerland","city":"LomÃ©"}}]'
var object = JSON.parse(json)
console.log(object)
function start(){
	var x = 0;
	for (var i = 0; i < 5; i++) {
		var tr = document.createElement('tr')
		var id = document.createElement('td')
		var photo = document.createElement('td')
		var first_name = document.createElement('td')
		var last_name = document.createElement('td')
		var gender = document.createElement('td')
		id.innerHTML = object[i].id
		photo.innerHTML = object[i].photo
		gender.innerHTML = object[i].gender
		first_name.innerHTML = object[i].first_name
		tr.appendChild(id)
		tr.appendChild(photo)
		tr.appendChild(first_name)
		tr.appendChild(gender)
		document.getElementById('board').appendChild(tr)
	}
}
// function login() {
// 	var login = document.getElementById('login').value,
// 		password = document.getElementById('password').value;
// 	if (login == 'qwe' && password == '123') {
// 		localStorage.setItem ('name', login)
// 		localStorage.setItem ('status', loginned)
// 		location.reload()
// 	}else {
// 		alert('ne verno')
// 	}
// }
// if (localStorage.getItem('status') == 'loginned') {
// 	document.getElementById('login_page').style.display = "none"
// 	document.getElementById('info').style.display = "block"
// 	document.getElementById('info').innerHTML = 'Привет, ' + localStorage.getItem("name")
// }

// function func(a, b) {
// 	if(1<b){
// 		func(a*(b-1), b-1);
// 		console.log(a)			
// 	}
// }
// func (3, 3)

function func(a, result) {
	if(1<=a){
		func(a-1, result*a);					
	}else{
		console.log(result)
	}
}
func (4, 1)
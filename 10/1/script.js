var x = 1;
var y = 1.3;
var z = true;
var massiv = [1, 2, 5, 7]
massiv.push (7, 9, 11);
massiv[3] = 4;


function unnozh(a) {
for (var i = 1; i < 11; i++) {
	console.log(a*i)	
	}

}
function stepen(b, c) {
	var d = 1;
	for (var i = 1; i <= c; i++) {
		d *= b
		console.log(d)
					
		}

}
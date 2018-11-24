function validate(inp) {
	inp.value = inp.value.replace(/[^0-9]/, "");
}
function test(obj) {
	var inp1 = document.getElementById('Card_1');
	var inp2 = document.getElementById('Card_2');
	var inp3 = document.getElementById('Card_3');
	var inp4 = document.getElementById('Card_4');
	if (obj.value.lenth == 4) {
		var next = obj.nextSibling;
		while (next.nodeType != 1 && next.nextSibling)
			next = next.nextSibling;
		if (next.nodeType == 1) 
			next.focus;
	}
}

// function validate(inp) {
// 	inp.value = inp.value.replace(/[^0-9]/, "");
// }
// function test(obj) {
// 	var inp1 = document.getElementById('CardNumber1');
// 	var inp2 = document.getElementById('CardNumber2');
// 	var inp3 = document.getElementById('CardNumber3');
// 	var inp4 = document.getElementById('CardNumber4');
//     if (obj.value.length == 4) {
//         var next = obj.nextSibling;
//         while (next.nodeType != 1 && next.nextSibling)
//             next = next.nextSibling;
//         if (next.nodeType == 1)
//             next.focus();
//     }
// }

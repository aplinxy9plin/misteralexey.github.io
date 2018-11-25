function validate(inp) {
	inp.value = inp.value.replace(/[^0-9]/, "");
}
// function test(obj) { //Вот тут я прихуел. Этот код абсолютно идентичен нижнему, но он не работает. Та же хрень внизу пашет, я ХЗ, как так...
// 	if (obj.value.lenth == 4) {
// 		var next = obj.nextSibling;
// 		while (next.nodeType != 1 && next.nextSibling)
// 			next = next.nextSibling;
// 		if (next.nodeType == 1) 
// 			next.focus();
// 	}
// }

function test(obj) {
    if (obj.value.length == 4) {
        var next = obj.nextSibling;
        while (next.nodeType != 1 && next.nextSibling)
            next = next.nextSibling;
        if (next.nodeType == 1)
            next.focus();
    }
}

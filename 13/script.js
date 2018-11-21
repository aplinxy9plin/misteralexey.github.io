function start() {
	var color = 'black';
	var x = 0;
	
	for (var i = 0; i < 8; i++) {
		var tr = document.createElement ('tr')
		for (var j = 0; j < 8; j++) {
			var td = document.createElement ('td')
			if (x == 8) {
				if (color == 'black') {
					color = 'white'
				}else{
					color = 'black'
				}
				x = 0
			}
			if (color == 'black') {
				color = 'white'
				document.getElementByTagName ('td')[i].style.backgroundColor = color
			}else {
				color = 'black'
				document.getElementByTagName ('td')[i].style.backgroundColor = color
			}
			x++
			tr.appendChild (td)
		}
		document.getElementById ('board').appendChild(tr)
	}
}
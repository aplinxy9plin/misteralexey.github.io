var count = 'x';

function game(x) {
	document.getElementsByTagName('td')[x].innerHTML = count
	if (count == 'x') {
		count = '0' 
	}
	
}
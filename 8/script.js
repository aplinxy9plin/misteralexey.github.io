function func(x) {
	var st = document.getElementById('q').style
	switch(x){
		case 0:
			st.display = "block"
		break
		case 1:
			st.display = "none"
		break
		case 2:
			st.color = "red"
		break
		case 3:
			st.color = "green"
		break
		case 4:
			st.color = "blue"
		break
		case 5:
			st.backgroundColor = "red"
		break
		case 6:
			st.backgroundColor = "green"
		break
		case 7:
			st.backgroundColor = "blue"
		break
		case 8:
			st.backgroundColor = "yellow"
			st.color = "black"
			st.display = "block"
		break
		default:
		break
		}

}
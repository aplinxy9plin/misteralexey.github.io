function rand(){
	var max = 3, min = 0;
	var chislo = Math.floor(Math.random() * (max - min)) + min
	return chislo
}

function game(user){
	var chislo = rand()
        if (user === chislo) {
            alert ("The result is a tie!")
        }
        else if(user === "0") {
            if(chislo === "1") {
                alert ("rock wins")
            }
            else {
                alert ("paper wins")
            }
        }
        else if(user === "2") {
            if(chislo === "0") {
                alert ("paper wins")
            }
            else {
                alert ("scissors wins")
            }
        }
        else if(user === "1") {
            if(chislo === "2") {
                alert ("scissors wins")
            }
            else {
                alert ("rock wins")
            }
        }
}

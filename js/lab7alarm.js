//Program to determine if you can sleep in or not.  Your program should obtain all of the imput from the computers clock.  On all of your weekdays except Christmas, Fourth of July and New Years Day your computer should say Wake Up! On Saturday and Sunday it should say Sleep In.//

//INPUT comes from the Computer itself.


let today = new Date();
let day = today.getDay();
let month = today.getMonth();
let date = today.getDate();

	document.getElementById("td").innerHTML = today.toLocaleDateString();
//PROCESSING
	if ( (month = 0 && date == 1) || (month == 6 && date == 4) || (month == 11 && date == 25)	|| day == 6 || day == 0) {
		result = "Sleeping in!";
	}	else {
		result = "Wake up!";
	}
	//OUTPUT
			document.getElementById("alarmstatus").innerHTML = result;
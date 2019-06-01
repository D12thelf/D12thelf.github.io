// Defining Table
	//INPUT: The user chooses their weather
	//PROCESSING: Program choses the correct shoe choice by weather.
	//OUTPUT: Display the correct shoe choice by weather.
	//
	
    function footWear() {
        let weather = document.getElementById("weather").value;
        
        
        if (weather == "hot") {
             footwear = "sandals";
        }
        else if (weather == "rain") {
             footwear = "galoshes";
        }
        else if (weather == "snow") {
             footwear = "boots";
        }
        else if (weather == "cool") {
             footwear = "shoes";
        }
        document.getElementById('output').innerHTML = footwear;
    }
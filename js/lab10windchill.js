// Your program will calculate the wind chill factor given the current temperature that is inputted by the user, and the current wind speed also inputted by the user.  

//The Function call the input, call the windChill function and finally produce the output to the screen. Functions should have the following headers; function doInputOut and function windChill.  

//The first function doInputOut must be called from the onclick button, and obtain the inputs from the user and call the second funtion windChill as well as store the value returned by windChill as a variable. Then output the value returned as windchill.

//The second function (windChill) must not gather any input from the user and must not output anything for a user to see.

// FUNCTION 1 and INPUT
	
function doInputOutput() {
    let actualtemp = document.getElementById('temp').value; 
        
        
    let windspeed = document.getElementById('speed').value;
        
    let windchill = windChill(actualtemp, windspeed); 
        document.getElementById('output').innerHTML = windchill;
    
    }
    
    //FUNCTION TWO. PROCESSING, AND OUTPUT
    
    function windChill(tempF, speed) {
        
    if (tempF <= 50 && speed >= 3) {
            
    let wc = 35.74 + 0.6215*tempF - 35.75*Math.pow(speed, 0.16) + 0.4275*tempF*Math.pow(speed,0.16)
    
    return wc.toFixed(2) + "&deg;" + "F"; 
        }
        
        else {
          return "N/A";
            }
    }

/*Defining Table 
INPUT: 
The User guesses a number.
PROCESSING: 
The program decides if the guess is too high or too low, and then gives a message to the user about the guess, so that they can get closer to the number. 
The program uses a loop to count the number of guesses
OUTPUT:
Let the user know if their guess is correct, too high or too low.
Let the user know how many guesses it took to get to the correctc number
*/
function guessGame() {
    let message =
          "I'm thinking of a number between 1 and     100.\n" +
          "Try to guess it!\n"+
            "Please enter an integer between 1 and      100.";
        
    let answer = Math.floor(Math.random()* 101); //Defines answer
    let guess; //Defines Users Input
    let counter = 0; //Counts Users guesses
    
    do {
        counter ++;
        guess = parseInt(prompt(message));
        if (guess < answer) {
            message = guess + "is too low. Please enter another integer.";
        }
        else if (guess > answer) {
        message = guess + " is too high. Please enter another integer;"
        }
    
    } while (guess != answer); 
            message = guess + "  is correct! It only took you  " + counter + "  tries to guess my number!";
    
        //Output Displays the Message
        document.getElementById('output').innerHTML=message;
    }
    
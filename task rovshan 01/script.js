// Task 1 

// 1. Write a program that determines whether a given number is positive or negative.

// // Function for number checking 
// function NumberSignChecker(n) {
//     if (n > 0) {
//         console.log("Positive number");
//     } else if (n < 0) {
//         console.log("Negative number");
//     } else {
//         console.log("Zero");
//     }
// }

// // Variables holding values
// let number1 = -5;
// let number2 = 5;
// let number3 = 0;

// NumberSignChecker(number1); // Negative number
// NumberSignChecker(number2); // Positive number
// NumberSignChecker(number3); // Zero


// 2. Write a program that checks if a number is even or odd.

// function checkOddOrEven(number) {
//     if (number % 2 === 0) {
//         return "It is Even Number";
//     } else {
//         return "It is Odd Number";
//     }
// }
// Get user input from a browser prompt
// let userInput = prompt("Enter a number:");
// let number = parseInt(userInput, 10); // Convert the input to an integer
// console.log(checkOddOrEven(number));


// 3. Write a program to determine the greater of two numbers.

// Function to compare two numbers and return the larger one or a message for equality
// function compareNumbers(num1, num2) {
//     if (num1 > num2) {
//       return "The larger of " + num1 + " and " + num2 + " is " + num1 + ".";
//     } else if (num2 > num1) {
//       return "The larger of " + num1 + " and " + num2 + " is " + num2 + ".";
//     } else {
//       return "The values " + num1 + " and " + num2 + " are equal.";
//     }
//   }
  
  // Example usage
//   var result = compareNumbers(5, 8);
//   console.log(result);
  
//   result = compareNumbers(10, 5);
//   console.log(result);
  
//   result = compareNumbers(7, 7);
//   console.log(result); 
  
//   Output:
  
//   The larger of 5 and 8 is 8.
//   The larger of 10 and 5 is 10.
//   The values 7 and 7 are equal.
  
  
  
//   4. Write a program that assigns a letter grade based on a numerical grade.

// function getGrade(p) {
//     var grade = 'F';
//     Object.keys(grades).some(function (k) {
//         if (p >= grades[k]) {
//             grade = k;
//             return true;
//         }
//     });
//     return grade
// }

// var grades = { A: 85, 'A-': 80, B: 70, 'B-': 65, 'C+': 60, C: 55, D: 50, F: '' }

// console.log([90, 80, 55, 85].map(getGrade));

// [
//     "A",
//     "A-",
//     "C",
//     "A"
//   ]



// 5. Write a program that calculates the ticket price based on age.

//   function ageCalculator() {  
//     //collect input from HTML form and convert into date format  
//     var userinput = document.getElementById("DOB").value;  
//     var dob = new Date(userinput);  
      
//     //check user provide input or not  
//     if(userinput==null || userinput==''){  
//       document.getElementById("message").innerHTML = "**Choose a date please!";    
//       return false;   
//     }   
      
//     //execute if the user entered a date   
//     else {  
//     //extract the year, month, and date from user date input  
//     var dobdobYear = dob.getYear();  
//     var dobdobMonth = dob.getMonth();  
//     var dobdobDate = dob.getDate();  
      
//     //get the current date from the system  
//     var now = new Date();  
//     //extract the year, month, and date from current date  
//     var currentYear = now.getYear();  
//     var currentMonth = now.getMonth();  
//     var currentDate = now.getDate();  
      
//     //declare a variable to collect the age in year, month, and days  
//     var age = {};  
//     var ageString = "";  
    
//     //get years  
//     yearAge = currentYear - dobYear;  
      
//     //get months  
//     if (currentMonth >= dobMonth)  
//       //get months when current month is greater  
//       var monthAge = currentMonth - dobMonth;  
//     else {  
//       yearAge--;  
//       var monthAge = 12 + currentMonth - dobMonth;  
//     }  
  
//     //get days  
//     if (currentDate >= dobDate)  
//       //get days when the current date is greater  
//       var dateAge = currentDate - dobDate;  
//     else {  
//       monthAge--;  
//       var dateAge = 31 + currentDate - dobDate;  
  
//       if (monthAge < 0) {  
//         monthAge = 11;  
//         yearAge--;  
//       }  
//     }  
//     //group the age in a single variable  
//     age = {  
//     years: yearAge,  
//     months: monthAge,  
//     days: dateAge  
//     };  
        
        
//     if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )  
//        ageageString = age.years + " years, " + age.months + " months, and " + age.days + " days old.";  
//     else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )  
//        ageString = "Only " + age.days + " days old!";  
//     //when current month and date is same as birth date and month  
//     else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )  
//        ageageString = age.years +  " years old. Happy Birthday!!";  
//     else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )  
//        ageageString = age.years + " years and " + age.months + " months old.";  
//     else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )  
//        ageageString = age.months + " months and " + age.days + " days old.";  
//     else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )  
//        ageageString = age.years + " years, and" + age.days + " days old.";  
//     else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )  
//        ageageString = age.months + " months old.";  
//     //when current date is same as dob(date of birth)  
//     else ageString = "Welcome to Earth! <br> It's first day on Earth!";   
  
//     //display the calculated age  
//     return document.getElementById("result").innerHTML = ageString;   
               
//   }  
// }  




// 6. Write a program that calculates a discount based on the purchase amount.

// var age = 25;
// var ticketPrice;

// if (age < 12) {
//   ticketPrice = 5;
// } else if (age >= 12 && age < 18) {
//   ticketPrice = 10;
// } else if (age >= 18 && age < 60) {
//   ticketPrice = 20;
// } else {
//   ticketPrice = 15; // Senior citizen discount
// }
// console.log("Ticket Price: $" + ticketPrice);



// 7. Write a simple number guessing game.

// const minLuku = 1; // Lower bound
// const maxLuku = 30; // Upper bound
// const readlineSync = require('readline-sync');
// let arvaus, arvattava, arvaustenLkm
// do {
//         // Number of guesses
//         arvaustenLkm = 1; 

//         //Target number
//         arvattava = Math.floor(Math.random() * (maxLuku + 1 - minLuku)) + minLuku 
//     do {
//         // User's guess
//         arvaus = readlineSync.question('Ajattelen numeroa 1 ja 30 välillä. Arvaapa vaan');

//         // Bad guess test
//         if (isNaN(arvaus) || arvaus < minLuku || arvaus > maxLuku) {
//             console.log('Elä viitsi! Laita nyt jokin oikea numero.');
//             continue;
//         }

//         if (arvaus < arvattava){
//             arvaustenLkm++;
//             console.log('Kokeile suurempaa lukua.');
//         } else if (arvaus > arvattava){
//             arvaustenLkm++;
//             console.log('Kokeile pienempää lukua.');
//         } else if (arvaus == arvattava){
//             console.log('Hienoa. arvasit oikein ' + arvaustenLkm + ' arvauksella.')
//         }
//     } while (arvaus != arvattava)

// } while (readlineSync.keyInYNStrict('Play again?'))


    // let randomNumber = Math.floor(Math.random() * 100) + 1;
    //   const guesses = document.querySelector('.guesses');
    //   const lastResult = document.querySelector('.lastResult');
    //   const lowOrHi = document.querySelector('.lowOrHi');
    //   const guessSubmit = document.querySelector('.guessSubmit');
    //   const guessField = document.querySelector('.guessField');
    //   let guessCount = 1;
    //   let resetButton;

    //   function checkGuess() {
    //     const userGuess = Number(guessField.value);
    //     if (guessCount === 1) {
    //       guesses.textContent = 'Previous guesses: ';
    //     }

    //     guesses.textContent += userGuess + ' ';

    //     if (userGuess === randomNumber) {
    //       lastResult.textContent = 'Congratulations! You got it right!';
    //       lastResult.style.backgroundColor = 'green';
    //       lowOrHi.textContent = '';
    //       setGameOver();
    //     } else if (guessCount === 10) {
    //       lastResult.textContent = '!!!GAME OVER!!!';
    //       lowOrHi.textContent = '';
    //       setGameOver();
    //     } else {
    //       lastResult.textContent = 'Wrong!';
    //       lastResult.style.backgroundColor = 'red';
    //       if(userGuess < randomNumber) {
    //         lowOrHi.textContent = 'Last guess was too low!' ;
    //       } else if(userGuess > randomNumber) {
    //         lowOrHi.textContent = 'Last guess was too high!';
    //       }
    //     }

    //     guessCount++;
    //     guessField.value = '';
    //     guessField.focus();
    //   }

    //   guessSubmit.addEventListener('click', checkGuess);

    //   function setGameOver() {
    //     guessField.disabled = true;
    //     guessSubmit.disabled = true;
    //     resetButton = document.createElement('button');
    //     resetButton.textContent = 'Start new game';
    //     document.body.appendChild(resetButton);
    //     resetButton.addEventListener('click', resetGame);
    //   }

    //   function resetGame() {
    //     guessCount = 1;
    //     const resetParas = document.querySelectorAll('.resultParas p');
    //     for (const resetPara of resetParas) {
    //       resetPara.textContent = '';
    //     }

    //     resetButton.parentNode.removeChild(resetButton);
    //     guessField.disabled = false;
    //     guessSubmit.disabled = false;
    //     guessField.value = '';
    //     guessField.focus();
    //     lastResult.style.backgroundColor = 'white';
    //     randomNumber = Math.floor(Math.random() * 100) + 1;
    //   }
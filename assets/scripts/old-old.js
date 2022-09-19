// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var newPassword = generatePassword();
  var newPassword = document.querySelector("#password");

  newPassword.value = newPassword;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const caseLower = "abcdefghijklmnopqrstuvwxyz";
const caseUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const caseNumbers = "1234567890";
const caseSpecials = "!@#$%^&*()";


function generatePassword() {
  let passwordLength = passLength();
  let pwArray = passChars();
  let newPassword = ""

  for (let i = 0; i <= passwordLength; i++){
    randomMumber = Math.floor(Math.random() * passwordLength);
    newPassword += pwArray.substring(randomMumber, randomMumber +1);

  }

}




// returns length of password
function passLength() {
  let passwordlength = window.prompt("How many characters would you like in your password?");
  return passwordlength;
}


// returns list of characters to generate password with
function passChars() {
   let confirmLower = window.prompt ("Would you like lower case character?");
     confirmLower = confirmLower.toUpperCase();
     if (confirmLower == "Y") {
       characters = caseLower ;
     } else {
       characters = "";
     }
    
   let confirmUpper = window.prompt ("Would you like upper case characters?");
     confirmUpper = confirmUpper.toUpperCase();
     if (confirmUpper == "Y") {
       characters = characters.concat(caseUpper);
     }

   let confirmNumber = window.prompt("Would you like numbers?");
     confirmNumber = confirmNumber.toUpperCase();
     if (confirmUpper == "Y") {
       characters = characters.concat(caseNumbers);
     }

   let confirmSpecial = window.prompt("Would you like special characters?");
     confirmSpecial = confirmSpecial.toUpperCase();
     if (confirmSpecial == "Y") {
       characters = characters.concat(caseSpecials);
     }

   let pwArray = characters;

    return pwArray;
}




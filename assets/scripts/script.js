const caseLower = "abcdefghijklmnopqrstuvwxyz";
const caseUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const caseNumbers = "1234567890";
const caseSpecials = "!@#$%^&*()";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let newPass = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = newPass;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// uses passlength() and passChars() to get values for for for loop. for loop randomises string
 function generatePassword() {
  
    let passwordLength = passLength();
    let chars  = passChars() 
    let password = "";
    
    for (let i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
  }
        return password;
        
 }

// Alert window to set password length.
 function passLength() {
  let passwordlength = window.prompt("How many characters would you like in your password?");
    if(passwordlength < 8 || passwordlength > 128) {
      passwordlength = window.prompt("Please enter a value from 8 to 128")
    }
  return passwordlength;
}

// returns list of characters to generate password with
function passChars() {

 //selects if lower case characters will be used  
  let confirmLower = window.prompt ("Would you like lowercase characters?");
    confirmLower = confirmLower.toUpperCase();
    if ((confirmLower != "Y") && (confirmLower != "N")) {
      window.alert("please only use Y or N for selections");
      return;
      //confirmLower = window.prompt ("Would you like lower case characters?");
    } else if (confirmLower === "Y"){
      characters = caseLower;
    } else {
      characters = ""
    }


    //selects if numbers will be used 
    let confirmUpper = window.prompt ("Would you like uppercase characters?");
    confirmUpper = confirmUpper.toUpperCase();
    if ((confirmUpper != "Y") && (confirmUpper != "N")) {
      window.alert("please only use Y or N for selections");
      return;
      //confirmLower = window.prompt ("Would you like lower case characters?");
    } else if (confirmUpper === "Y"){
      characters = characters.concat(caseUpper);
    } else {
      characters = characters;
    }



//selects if numbers will be used 
    let confirmNum = window.prompt ("Would you like to use numbers?");
    confirmNum = confirmNum.toUpperCase();
    if ((confirmNum != "Y") && (confirmNum != "N")) {
      window.alert("please only use Y or N for selections");
      return;
      //confirmLower = window.prompt ("Would you like lower case characters?");
    } else if (confirmNum === "Y"){
      characters = characters.concat(caseNumbers);
    } else {
      characters = characters;
    }
 

    // selects is special characters will be used 
    let confirmSpec = window.prompt ("Would you like to use numbers?");
    confirmSpec = confirmSpec.toUpperCase();
    if ((confirmSpec != "Y") && (confirmSpec != "N")) {
      window.alert("please only use Y or N for selections");
      return;
      //confirmLower = window.prompt ("Would you like lower case characters?");
    } else if (confirmSpec === "Y"){
      characters = characters.concat(caseSpecials);
    } else {
      characters = characters;
    }
   
// if no options selected ends function
if (characters === "") {
  window.alert("At least one option must be selected");
  return;
  }

  }

































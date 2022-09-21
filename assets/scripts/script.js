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
    console.log(confirmLower);
    console.log(characters);

    
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
    console.log(confirmUpper);
    console.log(characters);

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
    console.log(confirmNum);
    console.log(characters);

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
    console.log(confirmSpec);
    console.log(characters);

if (characters === "") {
  window.alert("At least one option must be selected");
  return;
  }

  }
































// selects if upper case characters will be used
    // let confirmUpper = window.prompt ("Would you like upper case characters?");
    // confirmLower = confirmUpper.toUpperCase();
    // if ((confirmUpper != "Y") && (confirmUpper != "N")) {
    //   window.alert("please only use Y or N for selections");
    //   confirmUpper = window.prompt ("Would you like lower case characters?");
    // } else if (confirmUpper === "Y"){
    //   characters = characters.concat(caseUpper);
    // } else {
    //   characters = ""
    // }
    
 // redo these to match top  
// // chooses if uppercase characters are included
  //   let confirmUpper = window.prompt("Would you like to use upper case characters?");
  //   confirmUpper = confirmUpper.toUpperCase();
    
  //   if ((confirmUpper != "Y") && (confirmUpper != "N")) {
  //     window.alert("Please only use Y or N to confirm choice");
  //     confirmUpper = window.prompt("Would you like to use upper case characters?")
  //     if (confirmUpper == "Y") {
  //     characters = characters.concat(caseUpper);
  //     } else {
  //     characters = characters;
  //   }
  // }

    
// Number selection
  // let confirmNumber = window.prompt("Would you like numbers?");
  //   confirmNumber = confirmNumber.toUpperCase();
    
  //   if ((confirmNumber != "Y") && (confirmNumber != "N")) {
  //     window.alert("Please only use Y or N to confirm choice");
  //     confirmNumber = window.prompt("Would you like numbers?");

  //     characters = characters.concat(caseNumbers);
  //   } else {
  //     characters = characters.concat(caseNumbers);
  //   }

// Special character selection
//     let confirmSpecial = window.prompt("Would you like to use special characters?");
//     confirmSpecial = confirmSpecial.toUpperCase();
    
//     if ((confirmSpecial != "Y") && (confirmSpecial != "N")) {
//       window.alert("Please only use Y or N to confirm choice");
//       confirmSpecial = window.prompt("Would you like to use special characters?");
//       if (confirmSpecial == "Y") {
//       characters = characters.concat(caseSpecials);
//       } else {
//       characters = characters;
//     }
//   }

// if (characters === ""){
// window.alert("At least one option must be selected")
// return;
// }

//      return characters;
  
// }

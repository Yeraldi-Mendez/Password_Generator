// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//The password generator will provide a password with 8-128 characters

//arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sChar = ["!", "@", "#", "$", "%", "^", "&", "*", ".", "/", "<", ">", "?"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//confirmation variables
var passwordLength; 
var confirmNumber;
var confirmSchar;
var confirmLower;
var confirmUpper;
var selectedCriteria;

//start function to ask user's input
// this are if they answer all 
function generatePassword(){
  passwordLength = prompt("How many characters would your password contain? (8-128)");
  console.log("Password Length " + passwordLength);
  //user did not respond to password length
  if(!passwordLength){
    alert("Required value");
  }
  //user selects length less than 8 character or over 128
  else if (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("Password must be between 8 and 128 characters in length");
    console.log("Password length " + passwordLength);
  }
  //user selects password length between 8 and 128
  else {
    confirmNumber = confirm("Will your password contain numbers?");
    console.log("Number " + confirmNumber);
    confirmSchar = confirm("Will your password contain special characters?");
    console.log("Special Character " + confirmSchar);
    confirmLower = confirm("Will your password contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Will your password contain upper case letters?");
    console.log("Upper case " + confirmUpper);
  };

  //these is to continue user's input but some or all have no answer
  //user selects no criteria
  if(!confirmNumber && !confirmSchar && !confirmLower && !confirmUpper){
    selectedCriteria = alert("You must select at least one criteria");    
  } 
  //user selected all criterias
  else if(confirmNumber && confirmSchar && confirmLower && confirmUpper){
    selectedCriteria = number.concat(sChar, lower, upper);
    console.log(selectedCriteria);
  } 
  //3 selections are made, different patterns 
  else if(confirmNumber && confirmSchar && confirmLower){
    selectedCriteria = number.concat(sChar, lower);
    console.log(selectedCriteria);
  }
  else if(confirmNumber && confirmSchar && confirmUpper){
    selectedCriteria = number.concat(sChar, upper);
   console.log(selectedCriteria);
  }
  else if(confirmNumber && confirmLower && confirmUpper){
    selectedCriteria = number.concat(lower, upper);
   console.log(selectedCriteria);
  }
  else if(confirmSchar && confirmLower && confirmUpper){
    selectedCriteria = sChar.concat(lower, upper);
    console.log(selectedCriteria);
  }
  //2 selections were made, different patterns
  else if(confirmNumber && confirmSchar){
    selectedCriteria = number.concat(sChar);
    console.log(selectedCriteria);
  }
  else if(confirmNumber && confirmLower){
    selectedCriteria = number.concat(lower);
    console.log(selectedCriteria);
  }
  else if(confirmNumber && confirmUpper){
    selectedCriteria = number.concat(upper);
    console.log(selectedCriteria);
  }
  else if (confirmSchar && confirmLower){
    selectedCriteria = sChar.concat(lower);
    console.log(selectedCriteria);
  }
  else if(confirmSchar && confirmUpper){
    selectedCriteria = sChar.concat(upper);
    console.log(selectedCriteria);
  }
  else if(confirmLower && confirmUpper){
    selectedCriteria = lower.concat(upper);
    console.log(selectedCriteria);
  }
  //only 1 criteria is selected
  else if(confirmNumber){
    selectedCriteria = number;
    console.log(selectedCriteria);
  }
  else if(confirmSchar){
    selectedCriteria = sChar;
    console.log(selectedCriteria);
  }
  else if(confirmLower){
    selectedCriteria = lower;
    console.log(selectedCriteria);
  }
  else if (confirmUpper){
    selectedCriteria = upper;
    console.log(selectedCriteria);
  };
  
  var ranPassword = [];

  for (var i = 0; i < passwordLength; i++){
    ranPassword = selectedCriteria[Math.floor(math.random () * selectedCriteria.length)];
    console.log(ranPassword)
  }

  return ranPassword;
}

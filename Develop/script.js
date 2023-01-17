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

//start function to ask user's input
function generatePassword(){
  passwordLength = prompt("How many characters would your password contain? (8-128)");
  console.log("Password Lenght " + passwordLength);

  if(!passwordLength){
    alert("Required value");
  }

  else if (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("Password must be between 8 and 128 characters in length");
    console.log("Password length " + passwordLength);
  }

  else {
    confirmNumber = confirm ("Will your password contain numbers?");
    console.log("Number " + confirmNumber);
    confirmNumber = confirm ("Will your password contain special characters?");
    console.log("Special Character " + confirmSchar);
    confirmNumber = confirm ("Will your password contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmNumber = confirm ("Will your password contain upper case letters?");
    console.log("Upper case " + confirmUpper);
  };

  
}

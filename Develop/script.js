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
  console.log("Password Lenght " + passwordLength);
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
    alert("You must select at least one criteria");    
  } 
  else {

  console.log(selectedCriteria)

  var ranPassword = [];

  for (var i = 0; i < passwordLength; i++){
    ranPassword = ranPassword + selectedCriteria[Math.floor(math.random () * selectedCriteria.length)];
    console.log(ranPassword)
  }

  return ranPassword;
}

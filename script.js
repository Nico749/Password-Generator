function generateMsg(){
  

var userInput = prompt(`Which criteria do you want to inlcude in the password? 
1. A mixture of both uppercase and lowercase letters.
2. A mixture of letters and numbers.
3. Inclusion of at least one special character, e.g., ! @ # ? ] `);

if (userInput==1||userInput==2||userInput==3){
  var userChoice=prompt(`Password length (8-->128 characters):`)
   if (userChoice>=8 && userChoice<=128){prompt('what do you want')}
   else{alert(`Choice not valid`)}
    
}
else{
  alert(`Choice not valid`)
}
} 
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

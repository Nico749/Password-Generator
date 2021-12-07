function generateMsg(){
  
alert(`Password should include:
- A mixture of both uppercase and lowercase letters.
- A mixture of letters and numbers.
- Inclusion of at least one special character, e.g., ! @ # ? ] `);

var userChoice=prompt(`Password length (8-->128 characters):`)
   
if (userChoice>=8 && userChoice<=128){
     var userDecision= prompt(`Would you like to include lowercase, uppercase, symbols and numbers in the password? Y/N (If not it would be impossible to create a password)`)
     if(userDecision=="Y"){
     //writePassword();
     //var password=generatePwd()
     //alert(password)
     }
    
     else{alert(`Choice not valid`)}}
   
else{alert(`Choice not valid`)}
    

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePwd();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password generation function
function generatePwd() {
  var length = userChoice;
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#?*]|&";
      defaultValue = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      defaultValue += charset.charAt(Math.floor(Math.random() * n));
  }
  return defaultValue;
}}
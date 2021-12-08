function generateMsg(){
  
alert(`A strong password should include:
- A mixture of both uppercase and lowercase letters.
- A mixture of letters and numbers.
- Inclusion of at least one special character, e.g., ! @ # ? ] `);

var userChoice=prompt(`Password length (8-->128 characters):`)
//input validation    
if (userChoice>=8 && userChoice<=128){
     
     var userDec= prompt(`Would you like to include lowercase, uppercase, symbols and numbers in the password? Y/N (If not it would be impossible to create a password)`)
     var userDecision =userDec.replace(/^\s+|\s+$/gm,'');//remove all white spaces before the user input
     if(userDecision=="Y"||userDecision=="yes"||userDecision=="y"||userDecision=="Yes"){
     writePassword();
     }
     else{alert(`Choice not valid, impossible to create a password`)}}
   
else if (isNaN(userChoice)){alert(`You need to insert a numeric value`)}

else {alert(`Password should include at least 8 characters and maximum 128`)}   

// Write password to the #password input
function writePassword() {
  var password = generatePwd();
  var passwordText = document.querySelector("#password");
  passwordText.value = "Your secure password is: "+password;
}

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
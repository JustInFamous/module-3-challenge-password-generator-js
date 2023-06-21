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

// Generate password based user's requirements //
function generatePassword() {
    var includeNumbers = true;
    var includeSymbols = true;
    var includeUppercaseLetters = true;
    var includeLowercaseLetters = true;
    var length = 8;


// Prompt the user for password length //
    var lengthInput = prompt("Enter password length (default: 8):");
    if (lengthInput !== null && lengthInput.trim() !== '') {
    length = parseInt(lengthInput);
        if (length > 128) {
            length = 128
        }
    }

    // Prompt the user for uppercase letters //
    var includeUppercaseLettersInput = confirm("Do you want to use uppercase letters?");
    includeUppercaseLetters = includeUppercaseLettersInput;

    // Prompt the user for lowercase letters //
    var includeLowercaseLettersInput = confirm(" Do you want to use lowercase letters?");
    includeLowercaseLetters = includeLowercaseLettersInput;

    // Prompt the user for including numbers //
    var includeNumbersInput = confirm("Do you want to use numbers?");
    includeNumbers = includeNumbersInput;

    // Prompt the user for including symbols //
    var includeSymbolsInput = confirm("Do you want to use symbols?");
    includeSymbols = includeSymbolsInput;



    // Define character sets //
    var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var symbols = '!@#$%^&*_-+=';

    // Create a character set based on user's requirements //
    var characterSet = '';
    if (includeNumbers) {
    characterSet += numbers;
    }
    if (includeSymbols) {
    characterSet += symbols;
    }
    if (includeUppercaseLetters) {
    characterSet += uppercaseLetters
    }
    if (includeLowercaseLetters) {
    characterSet += lowercaseLetters
    }

    // Generate the password //
    var password = '';
    for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
    
    }

    return password;
}

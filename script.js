// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like the password to be? (Enter a number between 8 and 128)"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    return null;
  }

  var useLowercaseChars = confirm("Do you want to include lowercase characters?");
  var useUppercaseChars = confirm("Do you want to include uppercase characters?");
  var useNumericChars = confirm("Do you want to include numeric characters?");
  var useSpecialChars = confirm("Do you want to include special characters?");

  if (!useLowercaseChars && !useUppercaseChars && !useNumericChars && !useSpecialChars) {
    alert("You must select at least one character type.");
    return null;
  }

  return {
    length: length,
    useLowercaseChars: useLowercaseChars,
    useUppercaseChars: useUppercaseChars,
    useNumericChars: useNumericChars,
    useSpecialChars: useSpecialChars
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  if (!options) return null;

  var possibleChars = [];
  var guaranteedChars = [];

  if (options.useLowercaseChars) {
    possibleChars = possibleChars.concat(lowerCasedCharacters);
    guaranteedChars.push(getRandom(lowerCasedCharacters));
  }
  if (options.useUppercaseChars) {
    possibleChars = possibleChars.concat(upperCasedCharacters);
    guaranteedChars.push(getRandom(upperCasedCharacters));
  }
  if (options.useNumericChars) {
    possibleChars = possibleChars.concat(numericCharacters);
    guaranteedChars.push(getRandom(numericCharacters));
  }
  if (options.useSpecialChars) {
    possibleChars = possibleChars.concat(specialCharacters);
    guaranteedChars.push(getRandom(specialCharacters));
  }

  var password = guaranteedChars.join('');

  for (var i = password.length; i < options.length; i++) {
    var randomChar = getRandom(possibleChars);
    password += randomChar;
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', function() {
  var password = generatePassword();

  if (password) {
    alert("Generated Password: " + password);
  }
});
let lenght;

function generateWord() {
  const lengthInput = document.getElementById("inputNumber").value;
  const checkSpecialChar = document.getElementById("specialChar").checked;
  const checkLowerCase = document.getElementById("lowerCase").checked;
  const checkUpperCase = document.getElementById("upperCase").checked;
  const checkNumbers = document.getElementById("numbers").checked;
  let passwordGerated = document.getElementById("passwordGenerated");
 
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let specialChars = "&/()=?»";

  let allowedChars = "";
  let password = "";

  length = parseInt(lengthInput);
  if (isNaN(length) || length <= 0) {
    passwordGerated.textContent = "Introduce a valid number";
    return;
  }

  if (checkSpecialChar) {
    allowedChars += specialChars;
  }
  if (checkLowerCase) {
    allowedChars += lowerCase;
  }
  if (checkUpperCase) {
    allowedChars += upperCase;
  }
  if (checkNumbers) {
    allowedChars += numbers;
  }

  for (let i = 0; i < length; i++) {
    password += allowedChars.charAt(
      Math.floor(Math.random() * allowedChars.length)
    );
  }

  passwordGerated.textContent = password;
}

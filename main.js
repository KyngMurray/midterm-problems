function isEvenlyDivisible(num1, num2) {
  if (num1 % num2 === 0){
    return true
  } else {
    return false
  }
}

// ==================================================================

function halfSquare(num, halfSquare) {
  halfSquare = num * num / 2
  return halfSquare
}

// ==================================================================

function isLong(str) {
  for (let i = 0; i < str.length; i++){
    if (str.length > 14){
      return true
    }
  }
    return false
}

// ==================================================================

function exclaim(str) {
  let newStr = str.replaceAll(`!`,``)
  return newStr += `!`
}

// ==================================================================

function countWords(str) {
  return str.split(" ").length
}

// ==================================================================

function containsDigit(str) {
  let num = '1234567890'

  for (let i = 0; i < str.length; i++){
    if (num.includes(str[i])){
      return true
    }
  }
  return false
}

// ==================================================================

function containsLowerCase(str) {
  for(let i = 0; i < str.length; i++){
    
    if(str[i] === 'a' || str[i] === 'b' || str[i] === 'c' || str[i] === 'd' || str[i] === 'e' || str[i] === 'f' || str[i] === 'g' || str[i] === 'h' || str[i] === 'i' || str[i] === 'j' || str[i] === 'k' || str[i] === 'l' || str[i] === 'm' || str[i] === 'n' || str[i] === 'o' || str[i] === 'p' || str[i] === 'q' || str[i] === 'r' || str[i] === 's' || str[i] === 't' || str[i] === 'u' || str[i] === 'v' || str[i] === 'w' || str[i] === 'x' || str[i] === 'y' || str[i] === 'z'){
      return true
    }
  }
  return false
}

// ==================================================================

function containsUpperCase(str) {
  for(let i = 0; i < str.length; i++){
    
    if(str[i] === 'A' || str[i] === 'B' || str[i] === 'C' || str[i] === 'D' || str[i] === 'E' || str[i] === 'F' || str[i] === 'G' || str[i] === 'H' || str[i] === 'I' || str[i] === 'J' || str[i] === 'K' || str[i] === 'L' || str[i] === 'M' || str[i] === 'N' || str[i] === 'O' || str[i] === 'P' || str[i] === 'Q' || str[i] === 'R' || str[i] === 'S' || str[i] === 'T' || str[i] === 'U' || str[i] === 'V' || str[i] === 'W' || str[i] === 'X' || str[i] === 'Y' || str[i] === 'Z'){
      return true
    }
  }
  return false
}

// ==================================================================

function containsNonAlphanumeric(str) {
  let AlphaNumeric = 'abcdefghijklmnopqrstuvwxyz1234567890'
  for (let i = 0; i < str.length; i++){
   if (!AlphaNumeric.includes(str[i].toLowerCase())){
    return true
   }
  }
  return false
}

// ==================================================================

function containsSpace(str) {
  let space = " ";
  for (let i = 0; i < str.length; i++){
    if(space.includes(str[i])){
      return true;
    }
  }
  return false
}

// ==================================================================

function digits(num) {
  let array = []
  let digits = "1234567890"
  let toString = String(num)

  for (let i = 0; i < toString.length; i++){
    if (digits.includes(toString[i])){
      array.push(Number(toString[i]))
    }
  }
  return array
}

// ==================================================================

function truncate(str) {
    if (str.length < 15){
      return str
    } else {
      return str = str.slice(0, 8) + "..."
    }
}

// ==================================================================

function isValidPassword(str) {
  if(
    containsUpperCase(str) &&
    containsLowerCase(str) &&
    containsNonAlphanumeric(str) &&
    containsDigit(str) &&
    !containsSpace(str) 
    ) {
      return true;
    } else {
      return false;
    }
  }


// ==================================================================

function onlyPunchy(array) {
  for (let i = 0; i < array.length; i++){
    array[i] = exclaim(array[i]);
    if (isLong(array[i]) === true){
      array.splice(i, 1)
    }
  }
  return array
}

// ==================================================================


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
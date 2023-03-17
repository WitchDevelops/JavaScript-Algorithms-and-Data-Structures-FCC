// remove all non-alphanumeric chars, turn into the same case
// reverse the string
// compare with the original one

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function palindrome(str) {
  let word1 = str.toUpperCase();

  let removeNonANumRegex = /[A-Z0-9]/g;

  let word1Removed = word1.match(removeNonANumRegex).join("");

  console.log(word1Removed);

  let word2Reversed = reverseString(word1Removed);

console.log(word2Reversed);

  if (word1Removed == word2Reversed) {
    return true;
  } else {
    return false;
  }

}



let checkString = "_kayak"
let result = palindrome(checkString);


console.log(`Is ${checkString} a palindrome? ${result}`);
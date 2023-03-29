const ROTATION = 13;

function rot13(str) {
  // make an empty string
  let encodedSentence = "";
  // loop through the string
  for (let i=0; i<str.length; i++) {
    const character = str[i];
    // if the character is a letter, shift it
    // do it only for letters, case insensitive
    if (/[a-z]/i.test(character)) {
      // get unicode character for a given letter
      const letterUniCode = character.charCodeAt(0);
      // if the character code i rotation is bigger than 65 (letter A), it's all good
      if (letterUniCode - ROTATION >= "A".charCodeAt(0)) {
        // "String.fromCharCode()" is an inbuild JS method that creates a string from specified UTF-16 characters
        encodedSentence += String.fromCharCode(letterUniCode - ROTATION);
      } else {
        // if it isn't, go the other way
        encodedSentence += String.fromCharCode(letterUniCode + ROTATION);
      }
    } else {
      // and it it's a space or other, keep it.
      encodedSentence += character;
    }
  }
   return encodedSentence;
}

console.log(rot13("SERR PBQR PNZC"));
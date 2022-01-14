function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list

  let max_length = 0;
  let maxp = '';

  for (let i = 0; i < sentence.length; i++) {
    var subs = sentence.substr(i, sentence.length);

    for (let j = subs.length; j >= 0; j--) {
      var sub_subs_str = subs.substr(0, j);

      if (sub_subs_str.length <= 1)  continue;
      if(isPalindrome(sub_subs_str)){
        if( sub_subs_str.length > max_length ){
          max_length = sub_subs_str.length;
          maxp = sub_subs_str;
        }
      }
      
    }
  }

  return maxp;
}

function reverseString(string) {
  let reversed = '';
  for(let i = string.length; i >= 0; i--) {
    reversed += string.charAt(i);
  }
  return reversed;
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  console.log("40", word);
  console.log("41", reverseString(word));
  return word.toLowerCase() == reverseString(word).toLowerCase();
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

 

// console.log(findLongestPalindrome("My dad is a racecar athlete"));

console.log(findLongestPalindrome("Madam, I'm adam"));
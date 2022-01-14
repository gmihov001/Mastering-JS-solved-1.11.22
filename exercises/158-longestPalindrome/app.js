function findLongestPalindrome(sentence) {

  let max_length = 0;
  let longest_pal = '';

  for (let i = 0; i < sentence.length; i++) { // loop sentence from front
    var subs = sentence.substr(i, sentence.length); //create substring from current i to end; removing a letter from front

    for (let j = subs.length; j >= 0; j--) { // loop substring from end to front
      var sub_subs_str = subs.substr(0, j); //create substring from beginning to current j; removing a letter from back 

      if (sub_subs_str.length <= 1)  continue; //if inner substr length is 1 or less skip iteration

      if(isPalindrome(sub_subs_str)){     //check if inner substring is palindrome with function
        if( sortAscendingByLength(sub_subs_str, longest_pal) == 1 ){
          max_length = sub_subs_str.length; // reassign to newest substr length
          longest_pal = sub_subs_str; // reassing longest_pal with newest found substr
        }
      }
      
    }
  }

  return longest_pal;
}

function reverseString(string) {
  let reversed = '';
  for(let i = string.length; i >= 0; i--) {
    reversed += string.charAt(i);
  }
  return reversed;
}

function isPalindrome(word) {
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
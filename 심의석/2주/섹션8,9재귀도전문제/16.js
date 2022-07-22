function isPalindrome(str) {
  const head = str[0];
  const middle = str.slice(1, str.length - 1);
  const tail = str[str.length - 1];
  if (str.length === 1) return true;
  if (str.length === 0) return true;
  else {
    if (head === tail) return isPalindrome(middle);
    return false;
  }
}
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); //false

function someRecursive(arr, callback) {
  const head = arr[0];
  const tail = arr.slice(1);
  if (arr.length === 0) return false;
  else {
    if (callback(head)) return true;
    else {
      return someRecursive(tail, callback);
    }
  }
}
const isOdd = (val) => val % 2 !== 0;
const isBig = (val) => val > 10;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], isBig)); //false

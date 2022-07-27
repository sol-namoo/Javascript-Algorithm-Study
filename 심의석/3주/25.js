function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== num && left <= right) {
    if (arr[middle] < num) left = middle + 1;
    else right = middle - 1;
    middle = Math.floor((left + right) / 2);
  }
  if (arr[middle] === num) return middle;
  else return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); //1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); //2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); //4
console.log(binarySearch([1, 2, 3, 4, 5], 6));
//-1

## 섹션9 : 보너스 도전 재귀 문제

### 연습 15. isPalindrome

Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

**Examples:**

```js
isPalindrome('awesome'); // false
sPalindrome('foobar'); // false
isPalindrome('tacocat'); // true
isPalindrome('amanaplanacanalpanama'); // true
isPalindrome('amanaplanacanalpandemonium'); // false
```

My wrong answer was...

```js
function isPalindrome(str) {
  let backward;
  if (str.length <= 1 && str === backward) return true;
  if (str.length <= 1 && str !== backward) return false;
  const head = str[0];
  const tail = str.slice(1);
  backward = isPalindrome(tail) + head;
}
```

뭔가 직전에 문제에서 푼 문자를 거꾸로 나열하기를 이용한다음 그 결과값과 기존의 인자를 비교해서 boolean타입으로 나타내고 싶었지만, 그렇게 하려면 재귀함수의 base case를 리턴해야하는데 그러면 거기서 끝이고 비교를 할 수가 없다.

The soultion is...

```js
// 꿀팁! 양쪽에서부터 비교
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
  // String.slice(1)은 문자열 맨 앞 인덱스를 제거한 나머지 문자를 반환함
  // String.slice(-1)은 문자열 맨 마지막 인덱스를 반환함
  // String.slice(1,-1)은 문자열 맨 앞과 맨 마지막 인덱스를 제거한 나머지 문자를 반환함
}
```

---

### 연습 17. someRecursive

Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

**Examples:**

```js
SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], isOdd) // false
someRecursive([4,6,8], val => val > 10); // false
```

My wrong answer was...

```js
function someRecursive(arr, func) {
  return someRecursive(func(arr.slice(1)), func(arr[0]));
}
```

일단 재귀라는 생각에 무작정 인자 개수를 맞춰 넣어보았다.

The soultion is...

```js
function someRecursive(array, callback) {
  if (array.length === 0) return false; // base case
  if (callback(array[0])) return true; // 조건
  // if문 조건 자체가 : "callback함수에 array[0]이 true 라면"
  return someRecursive(array.slice(1), callback);
  // someRecursive(첫번째 요소 제외한 나머지 배열, 콜백함수)
}
```

---

### 연습 18. flatten

Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

**Examples:**

```js
flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]
```

My wrong answer was...

```js
function flatten() {}
```

The soultion is...

```js
function someRecursive(array, callback) {
  if (array.length === 0) return false; // base case
  if (callback(array[0])) return true; // 조건
  // if문 조건 자체가 : "callback함수에 array[0]이 true 라면"
  return someRecursive(array.slice(1), callback);
  // someRecursive(첫번째 요소 제외한 나머지 배열, 콜백함수)
}
```

---

## 섹션6 : 100% 선택적 도전 과제

### 연습 03. Frequency Counter - sameFrequency

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

**Your solution MUST have the following complexities:**

Time: O(N)

**Sample Input:**

```js
sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
```

My wrong answer was...

```js
function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) {
    // 이 부분부터 틀렸다.
    // length는 "문자열"을 세는 메서드이다.
    return false;
  }
  let counter1 = {}; // 객체에 담아주려는 시도는 좋았다.
  let counter2 = {};
  for (let i = 0; i < num1.length; i++) {
    // 여기부터...
    let key1 = num1[i];
    counter1[key1] = (counter1[key1] || 0) + 1;
  }
  for (let j = 0; j < num2.length; j++) {
    let key2 = num2[j];
    counter2[key2] = (counter2[key2] || 0) + 1;
  } // ...여기까지 조건은 맞음
  for (let key in counter1) {
    if (!(key in counter2)) {
      // 이 조건 필요 없음
      return false;
    }
    if (counter2[key] !== counter1[key]) {
      return false;
    }
  }
  return true;
}
```

The soultion is...

```js
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum2.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
```

---

### 연습 04. Frequency Counter / Multiple Pointers - areThereDuplicates

Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

**Examples:**

```js
areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true
```

**Restrictions:**

Time - O(n)

Space - O(n)

**Bonus:**

Time - O(n log n)

Space - O(1)

My wrong answer was...

```js
function areThereDuplicates() {
  // 처음에 인자를 어떻게 줘야할지 몰랐다.
  let obj = {};
  for (let val in arguments) {
    // 솔루션참고해서 arguments라고 씀
    obj[val] = (obj[val] || 0) + 1;
  }
  if (obj.val > 1) {
    //.val로 밸류값을 받을 수 있을 줄 알았다.
    return true;
  }
  return false;
}
```

The soultion is...

```js
// 빈도 수 세기 방식
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// 다중 포인터 방식

// One Liner 솔루션
```

---

### 연습 05. Multiple Pointers - averagePair

Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

**Bonus Constraints:**

Time: O(N)

Space: O(1)

**Sample Input:**

```js
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
```

The soultion is...

```js
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
```

---

### 연습 06. Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

**Examples:**

```js
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
```

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)

My wrong answer was...

```js
function isSubsequence(str1, str2) {
  let i = 0;
  for (let j of str2) {
    if (str1[i] !== str2[j]) j++;
    else i++;
  }
  if (str1[i] === str1.length - 1) {
    // i === str1.length-1
    return ture;
  }
  return false;
}
```

The soultion is...

```js
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true; //i === str1.length-1 아닌가?
    j++;
  }
  return false;
}
```

---

### 연습 07. Sliding Window - maxSubarraySum

Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

```js
maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null
```

**Constraints:**

Time Complexity - O(N)

Space Complexity - O(1)

The soultion is...

```js
function maxSubarraySum(arr, num) {
  // [100,200,300,400], 2
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null; // 통과
  for (let i = 0; i < num; i++) {
    // i는 0,1
    maxSum += arr[i]; // maxSum=0+100, maxSum=100+200
  }
  tempSum = maxSum; // tempSum = 300
  for (let i = num; i < arr.length; i++) {
    // i는 2(num),3(arr.length-1)
    tempSum = tempSum - arr[i - num] + arr[i];
    // 1.tempSum = 300 - arr[2-2] + arr[2];
    // 1.tempSum = 300 - 100 + 300 = 500;

    // 2.tempSum = 500 - arr[3-2] + arr[3];
    // 2.tempSum = 500 - 200 + 400 = 700;
    maxSum = Math.max(maxSum, tempSum);
    // 1.maxSum = Math.max(300, 500);
    // 1.maxSum = 500;

    // 2.maxSum = Math.max(500, 700);
    // 2.maxSum = 700;
  }
  return maxSum; // maxSum = 700;
}
```

---

### 연습 08. Sliding Window - minSubArrayLen (보류)

Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

**Examples:**

```js
minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
```

Time Complexity - O(n)

Space Complexity - O(1)

The soultion is...

```js
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
```

---

### 연습 09. Sliding Window - findLongestSubstring (보류)

Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

```js
findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('thisishowwedoit'); // 6
```

Time Complexity - O(n)

My wrong answer was...

```js
findLongestSubstring('thisisawesome');
// 1. 앞에서부터 철자를 읽어 객체에 담는다.
// 2. 같은 철자가 2개 이상이 되면 객
```

The soultion is...

```js
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
```

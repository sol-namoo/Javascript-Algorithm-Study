## 섹션8 : 재귀 문제 집합

### 연습 10. power

Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

**Examples:**

```js
power(2, 0); // 1
power(2, 2); // 4
power(2, 4); // 16
```

My answer was...

```js
function power(num1, num2) {
  if (num2 === 0) return 1;
  return num1 * power(num1, num2 - 1);
}
```

The soultion is...

```js
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
```

---

### 연습 11. factorial

Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 _ 3 _ 2 \* 1 equals 24.  
**factorial zero (0!) is always 1.**

**Examples:**

```js
factorial(1); // 1
factorial(2); // 2
factorial(4); // 24
factorial(7); // 5040
```

My answer was...

```js
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}
```

The soultion is...

```js

```

---

### 연습 12. productOfArray

Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

**Examples:**

```js
productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60
```

My answer was...

```js
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
```

The soultion is...

```js
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
```

---

### 연습 13. recursiveRange

Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

**Examples:**

```js
// SAMPLE INPUT/OUTPUT
recursiveRange(6); // 21
recursiveRange(10); // 55
```

My answer was...

```js
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
```

The soultion is...

```js
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}
```

---

### 연습 14. fib

Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

**Examples:**

```js
fib(4); // 3
fib(10); // 55
fib(28); // 317811
fib(35); // 9227465
```

My answer was...

```js
function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 2) + fib(num - 1);
}
```

The soultion is...

```js
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
```

---

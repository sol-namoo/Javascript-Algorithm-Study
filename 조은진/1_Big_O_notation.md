# Big O Notation
문제를 해결하는 다양한 방법 중에서 <u>성능을 평가</u>하는 방법이다. 즉, 효율적인 로직을 찾기를 의미한다.

입력값과 **연산 횟수(시간 복잡도),  차지하는 메모리 크기(공간 복잡도)의 상관관계를 표현**하여 평가한다. 
O(1) > O(n) > O(n<sup>2</sup>) 순서로 빠른 연산이 가능하다.

<br>

### Simplifying Big O Expressions
* Constants Don's Matter : 상수는 중요하지 않다   
  O(2n) -> O(n)   
  O(500) -> O(1)   
  O(13n<sup>2</sup>) -> O(n<sup>2</sup>)
* Smaller Terms Don't Matter : 작은 연산은 중요하지 않다   
  O(1000n + 50) -> O(n)   
  O(n<sup>2</sup>+5n+8) -> O(n<sup>2</sup>)   

<br>

## Time Complexity
입력값에 따른 알고리즘의 수행 시간(정확히는 횟수)에 대한 평가

<br>

### ✗ 시간을 측정하는 방법
: `performance.now()` 를 실행 전, 후에 실행 후 차이값으로 시간 측정   
``` javascript
const startTm = performance.now(); // 초를 1000 단위로 측정
func();
const endTm = performance.now();
console.log(`걸린시간 : ${(endTm-startTm)/1000} 초`)
```
문제는 수행할 때마다 조금씩 다르고, 디바이스의 성능에 따라서도 차이가 발생한다. 게다가 수행 시간이 너무 짧다면 측정하기 어렵다.   
이 때, 수동으로 시간 측정을 하는 대신 연산의 횟수를 기준으로 시간을 추론하는 방식으로 성능을 비교하면 된다.

<br>

### ✔︎ 수행되는 연산의 개수를 측정하는 방법
: 수행 시간은 달라져도 같은 함수의 연산의 개수는 일정하다는 것을 이용하여 효율 측정
``` javascript
function addUpTo(n){
  return n * (n+1) /2;
}
// 입력값 n에 상관없이 *, +, / 3번의 연산만 수행
```
``` javascript
function addUpTo(n){
  let sum = 0;
  for(let i = 0; i<=n; i++){
    sum += i;
  }
  return sum;
}
// =, +=, <=, ++ 의 총 연산 5n+2 수행하며 입력값 n에 따라 횟수 증가
```

<br>

## Space Complexity
보조 공간 즉, 입력되는 것을 제외한 알고리즘이 차지하는 공간(메모리)에 대한 평가   
( 보조 공간 Auxiliary Space + 입력 공간 Input Size를 합친 개념 )   


* Most primitives are constant space    
  : booleans, numbers, undefined, null은 고정된 크기를 가진다.
* String and reference types require O(n) space (where n is the length or the number of keys)   
  : 문자열의 길이, 배열의 길이, 객체의 키의 개수에 따라 공간 크기가 변경된다. 예를 들면 길이 1인 문자열과 50인 문자열은 공간이 50배 차이가 발생한다.

<br>

```javascript
function sumOfArr(arr){
  let total = 0;
  for(let i = 0; i< arr.length; i++){
    total += arr[i];
  }
  return total;
}
// total과 i 변수에 대한 공간이 할당되어 메모리를 차지 -> O(1)
```
```javascript
function makeDouble(arr){
  let result = [];
  for(let i = 0; i< arr.length; i++){
    result.push(2*arr[i]);
  }
  return result;
}
// 입력값에 따라 반환되는 배열이 차지하는 공간이 변화 -> O(n)
```

<br>

## log
* log<sub>2</sub>(value) = exponent   
* 2<sup>exponent</sup> = value    

O(log n)은 이진탐색이라고 하며, O(1) 다음으로 가장 시간복잡도가 좋다.   

<br>

---
 이제 Big O 표기법을 기준으로 코드의 효율성을 논할 수 있다. 시간복잡도와 공간복잡도의 차이를 분석하여 로직 간의 좋고 나쁨을 비교할 수 있는 척도로 사용된다.   
 더보기 : [그래프로 BigO 복잡도 보기](https://www.bigocheatsheet.com/)

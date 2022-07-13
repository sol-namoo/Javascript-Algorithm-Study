## 섹션5 : 문제 해결 패턴

### How do you improve?
1. 문제를 해결하기 위한 계획 (섹션4)
2. 일반적인 문제 해결 패턴 습득 (섹션5)

### 패턴 예시
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer (☆)
- Dynamic Programming
- Greedy Algorithms (☆)
- Backtracking
- ...

---

### Frequency Counter

- 자바스크립트의 객체를 사용하여 다양한 값과 빈도를 수집
- 중첩된 루프나 n의 제곱 시간을 사용하는 것을 피할 수 있음

**문제 1)** </br>
2개의 배열을 허용하는 same이라는 함수를 작성하세요. 배열의 모든 값의 제곱에 해당하는 값이 두 번째 배열에 모두 가지면 참을 반환해야 합니다. (순서무관)

**예시)**
```js
same([1,2,3]), [4,1,9]) // true
same([1,2,3]), [1,9]) // false
same([1,2,1]), [4,4,9]) // false (must be same frequency)
```

**답안 1-1)** </br>
A Navie Solution 중첩루프 사용 </br>
(for문 * indexOf메서드, 시간복잡도 = Q(n^2))
```javascript
    function same(arr1, arr2){
        // 두 배열의 길이가 같은지 가장 먼저 확인
        if(arr1.length !== arr2.length){
            return false;
        }
        for(let i=0; i<arr1.length; i++){
            // arr1의 각 인덱스의 제곱값이 arr2에 있는지 확인
            let correctIndex = arr2.indexOf(arr1[i]**2);
            if(correctIndex === -1){
                return false;
            }
            // 있다면, 해당 index 삭제
            arr2.splice(correctIndex, 1);
        }
        return true;
    }

    // indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
    // splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
```

**답안 1-2)** </br>
Refactored 빈도 카운터 패턴 사용 (시간복잡도 = Q(n))
```javascript
    function same(arr1, arr2){
        // 두 배열의 길이가 같은지 가장 먼저 확인
        if(arr1.length !== arr2.length){
            return false;
        }
        let frequencyCouner1 = {};
        let frequencyCouner2 = {};
        // 각 배열에 한 번씩 개별적으로 루프 적용
        for(let val of arr1){
            // arr1의 각 val마다 frequencyCouner1에 1을 더하거나, 이미 포함되어 있다면 1로 초기화
            frequencyCouner1[val] = (frequencyCouner1[val] || 0) + 1
        }
        for(let val of arr2){
            frequencyCouner2[val] = (frequencyCouner2[val] || 0) + 1
        }
        // console.log(frequencyCouner1)
        // console.log(frequencyCouner2)
        for(let key in frequencyCouner1){
            if (!(key**2 in frequencyCouner2)){
                return false;
            }
            if(frequencyCouner2[key**2] !== frequencyCouner1[key]){
                return false;
            } 
        }
        return true;
    }
```
위와 같이 중간에 console.log를 이용하여 값을 비교해 보면 각 값이 해당 배열에서 몇 번 나타나는지 알려주는 객체가 나타난다.

---

**문제 2)** Frequency Counter - vaildAnagram </br>
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)

**예시)**
```js
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
```

**답안 2)** </br>
```javascript
    function vaildAnagram(first, second){        
        if(first.length !== second.length){
            return false;
        }
        const lookup = {};
        
        for (let i=0; i<first.length; i++){
            let letter = first[i];
            // 만약 letter가 존재하면 증가시키고, 아니라면 1을 세팅
            lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        }

        for (let i=0; i<second.length; i++){
            letter = second[i];
            // letter를 찾을 수 없거나, 0이라면 false
            if (!lookup[letter]){
                return false;
            } else{
                lookup[letter] -= 1;
            }
        }
        return true;
    }

    // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
    validAnagram('anagrams', 'nagaramm')
```

---

### Multiple pointers

- 인덱스나 위치에 해당하는 포인터나 값을 만든 후 특정 조건에 따라 중간 지점에서부터 시작 지점이나 끝 지점이나 양쪽 지점을 향해 이동

**문제 1)** <i>양쪽지점으로 설정</i></br>
오름차순으로 정렬된 배열을 인자로 받는 sumZero라는 함수를 작성하세요. 이 함수는 합계가 0인 첫 번째 쌍을 찾아야 합니다.
합계가 0인 쌍을 배열을 반환하거나 쌍이 존재하지 않는다면 undefined를 반환하세요.

**예시)**
```js
sumZeor([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZeor([-2,0,1,3]) // undefined
sumZeor([1,2,3]) // undefined
```

**답안 1-1)** </br>
A Navie Solution <i>중첩루프 사용</i> </br>
(for문 * for문 , 시간복잡도 = Q(n^2), 공간복잡도 = O(1))
```javascript
    function sumZero(arr){
        for(let i=0; i<arr.length; i++){
            for(let j=1; j<arr.length; j++){
                if(arr[i] + arr[j] === 0){
                    return [arr[i], arr[j]];
                }
            }
        }
    }    
```

**답안 1-2)** </br>
Refactored <i>다중 포인터 패턴 사용</i> </br>
(시간복잡도 = Q(n), 공간복잡도 = Q(1))
```javascript
    function sumZero(arr){
        let left = 0;
        let right = arr.length-1;
        while(left < right){
            let sum = arr[left] + arr[right];
            if(sum === 0){
                return [arr[left], arr[right]];
            }else if(sum > 0){
                right--;
            }else{
                left++;
            }
        }        
    }    
```

---

**문제 2)** Multiple Pointers - countUniqueValues </br>
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

Time Complexity - O(n)

Space Complexity - O(n)

* You must do this with constant or O(1) space and O(n) time.


**예시)**
```js
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
```

**답안 2)** </br>
```javascript
    function countUniqueValues(arr){
        if(arr.length === 0) return 0;
        var i=0;
        for(var j=1; j<arr.lenght; j++){
            if(arr[i] !== arr[j]){
                i++;
                arr[i] = arr[j];
            }
        }
        return i+1;
    }
```

---

### Sliding Window
- 배열이나 문자열과 같은 일련의 데이터를 입력하거나, 특정방식으로 연속적인 해당 데이터의 하위 집합을 찾는 경우에 유용

**문제 1)**</br>
정수 배열과 n이라는 수를 취하는 maxSubarraySum이라는 함수를 작성하세요. 두번째 인자인 숫자 n을 전달하면 함수는 해당 배열의 n번 연속된 요소의 가장 큰 합계를 계산합니다.

**예시)**
```js
function maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
function maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
function maxSubarraySum([4,2,1,6], 1) // 6
function maxSubarraySum([4,2,1,6,2], 4) // 13
function maxSubarraySum([], 4) // null
```

**답안 1-1)** </br>
A Navie Solution <i>중첩루프 사용</i> </br>
(for문 * for문 , 시간복잡도 = Q(n^2))
```javascript
    function maxSubarraySum(arr, num) {
        if ( num > arr.length){
            return null;
        }
        var max = -Infinity;
        for (let i = 0; i < arr.length - num + 1; i ++){
            temp = 0;
                for (let j = 0; j < num; j++){
                    temp += arr[i + j];
                }
            if (temp > max) {
                 max = temp;
            }
        }
    return max;
    }

    maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
```

**답안 1-2)** </br>
Refactored <i>기준점 간 이동 배열 패턴 사용</i> </br>
(시간복잡도 = Q(n))
```javascript
    function maxSubarraySum(arr, num){
        let maxSum = 0;
        let tempSum = 0;
        if (arr.length < num) return null;
        for (let i = 0; i < num; i++) {
            maxSum += arr[i];
        }
        tempSum = maxSum;
        for (let i = num; i < arr.length; i++) {
            tempSum = tempSum - arr[i - num] + arr[i];
            maxSum = Math.max(maxSum, tempSum);
        }
        return maxSum;
    }

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
```
---

### Divide and Conquer
- 이 알고리즘은 주로 배열이나 문자열과 같은 큰 규모의 데이터셋을 처리
- 데이터셋을 작은 단위로 나누거나 데이터의 서브셋을 반복하는 과정에서 사용됨
- 이진 탐색, 병합 정렬, 퀵 정렬 , 분할 정복 알고리즘 등

**문제 1)** </br>
입력된 search라는 함수는 값을 취하고 해당 값이 있는 위치(index)를 반환합니다. 해당하는 값이 없으면 -1를 리턴합니다. (배열은 항상 오름차순 정렬)

**예시)**
```js
function search([1,2,3,4,5,6], 4) // 3
function search([1,2,3,4,5,6], 6) // 5
function search([1,2,3,4,5,6], 11) // -1
```

**답안 1-1)** </br>
A Navie Solution <i>루프 사용</i> </br>
(시간복잡도 = Q(n))
```javascript
    function search(arr, val) {
        for(let i=0; i<arr.length; i++){
            if(arr[i] === val){
                return i;
            }
        }
        return -1;
    }
```

**답안 1-2)** </br>
Refactored <i>이진 탐색 사용</i> </br>
(시간복잡도 = Q(logN))
```javascript
    function maxSubarraySum(array, val){
        let min = 0;
        let max = array.length - 1;
        while (min <= max){
            let middle = Math.floor((min + max) / 2);
            let currentElement = array[middle];

            if (array[middle] < val){
                min = middle +1;
            }
            else if (array[middle] > val){
                max = middle -1;
            }
            else{
                return middle;
            }
        }
        return -1;
    }
    /*
* 작동원리 :
* 만약 다음과 같이 엄청 긴 배열이 있고,
* [1,2,6,7,8,10,15,19,20,22,23, ..., 89,95,100,101]
* 찾는 숫자가 100 이라면 답안 1-1)의 경우에는 앞에서부터 찾아나가므로 효율성이 떨어진다.
* 답안 1-2) 알고리즘이 적용된다면 절반을 잘라 (약 50이라고 치자) 그것보다 해당 숫자가 크다면 절반 아랫쪽 숫자는 전부 무시한다.
* 그 후 나머지 숫자 중 다시 절반에 해당되는 숫자를 골라 계속 반복 진행한다.
*/
```

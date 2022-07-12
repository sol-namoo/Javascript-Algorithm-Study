## 섹션5 : 문제 해결 패턴
---
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

#### Frequency Counter
- 자바스크립트의 객체를 사용하여 다양한 값과 빈도를 수집
- 중첩된 루프나 n의 제곱 시간을 사용하는 것을 피할 수 있음

**문제 1)** </br>
2개의 배열을 허용하는 same이라는 함수를 작성하세요. 배열의 모든 값의 제곱에 해당하는 값이 두 번째 배열에 모두 가지면 참을 반환해야 합니다. (순서무관)

**예시)** </br>
same([1,2,3]), [4,1,9]) // true </br>
same([1,2,3]), [1,9]) // false </br>
same([1,2,1]), [4,4,91) // false (must be same frequency)

**답안 1)** </br>
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

**답안 2)** </br>
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
위와 같이 찍어보면 중간에 console.log를 이용하여 값을 비교해 보면 각 값이 해당 배열에서 몇 번 나타나는지 알려주는 객체가 나타난다.
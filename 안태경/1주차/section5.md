##섹션2 : 빅오 표기법 (Big O Notation)

##섹션3 : 배열과 오브젝트의 성능 평가

##섹션4 : 문제 해결 접근법

---
##섹션5 : 문제 해결 패턴

How do you improve?
1. 문제를 해결하기 위한 계획 (섹션4)
2. 일반적인 문제 해결 패턴 습득 (섹션5)

패턴 예시
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer (☆)
- Dynamic Programming
- Greedy Algorithms (☆)
- Backtracking
- ...

Frequency Counter
- 자바스크립트의 객체를 사용하여 다양한 값과 빈도를 수집
- 중첩된 루프나 n의 제곱 시간을 사용하는 것을 피할 수 있음

문제) 2개의 배열을 허용하는 same이라는 함수를 작성하세요. 배열의 모든 값의 제곱에 해당하는 값이 두 번째 배열에 모두 가지면 참을 반환해야 합니다. (순서무관)
예시) same([1,2,3]), [4,1,9]) // true
      same([1,2,3]), [1,9]) // false
      same([1,2,1]), [4,4,91) // false (must be same frequency)

답안1) A Navie Solution 중첩루프 사용
```javascript
    function same(arr1, arr2){
        if(arr1.length !== arr2.length){
            return false;
        }
        for(let i=0; i<arr1.length; i++){
            let correctIndex = arr2.indexOf(arr1[i]**2);
            if(correctIndex === -1){
                return false;
            }
            arr2.splice(correctIndex, 1);
        }
        return true;
    }
```
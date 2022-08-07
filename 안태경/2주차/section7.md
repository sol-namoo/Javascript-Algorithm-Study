## 섹션7 : 재귀 (Recursion)
- 재귀란 무엇이며, 어떻게 사용하는가
- 재귀함수 작성의 두가지 핵심 요소
- 디버깅과 재귀함수의 이해를 위한 호출스택 (call stack)
- 헬퍼 메소드 재귀 (helper method recursion)와 순수재귀 (pure recursion)를 사용하여 문제 풀이

---

What is recursion?
- 자기 자신을 호출하는 함수
- 많은 곳에서 활용된다.(It's Everywhere)
    - JSON.parse/JSON.stringify
    - document.getElementById and DOM traversal algorithms
    - Object traversal (객체 순회)
    - We will see it with more complex data structures
    - It's sometimes a cleaner alternative to iteration (때로 반복대신 재귀를 사용하는 게 더 깔끔하다)

The call stack
- 함수를 호출하면, 호출 스택의 꼭대기에 쌓인다.
- 자바스크립트가 반환 키워드를 확인하거나, 함수안에 더이상 실행할 코드가 없으면 컴파일러(complier)가 스택의 제일 위에 있는 항목을 제거(pop) 한다.

콜스택이 중요한 이유?
- 보통 우리는 함수가 완료되면 호출 스택 아래로 밀려나서 제거되는 것에 익숙하다.
- 그러나 재귀 함수는 계속해서 새로운 함수를 스택에 추가한다.

재귀함수가 작동하는 방법
- 재귀함수 : 동일한 함수를 계속 호출하면서 하나의 함수가 자기자신을 재귀적으로 호출하게 하는 것
- 반드시 갖춰야 하는 두가지 조건
    - 종료조건 (base case)
    - 다른 입력값 (매번 다른 값이 입력되어야 한다.)

---

예시 1) countDown
```fs
// Recursive Version
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

// Iterative Version
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}
```

예시 2) sumRange
```fs
function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}

sumRange(4)                 
```

예시 3) factorial
```fs
// Iterative Version
function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}

// Recursive Version
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}
```

---

재귀함수에서 문제가 생기는 경우
- No base case (종료조건이 없을 때)
- 잘못된 값을 반환하거나, 반환하는 것을 잊는 경우
- Stack overflow! (Error msg: Maximum call stack size exceeded)

---

### Helper Method Recursion
: 재귀적이지 않은 외부함수가 재귀적인 내부함수를 호출하는 패턴
```js
function collectOddValues(arr){
    
    let result = []; // 외부 result 배열

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])
```
---

### 순수 재귀 (Pure Recursion)
: 필요한 모든 코드가 함수 자체에 포함되며 재귀적인 함수

```js
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
```

Pure Recursion Tips
- 배열의 경우, slice, the spread operator, concat을 사용하여 배열을 변경하지 않으면서 복사할 수 있다.
- 문자열은 변경할 수 없다. 따라서 slice, substr, substring과 같은 메서드를 사용하여 문자열을 복사해야 한다.
- 객체의 경우, Object.assign, spread operator를 사용한다.
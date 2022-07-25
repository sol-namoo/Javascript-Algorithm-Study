## 섹션10 : 검색 알고리즘

- 검색 알고리즘이 무엇인지 설명할 수 있다.
- 배열에 선형 검색(liner search) 실시
- 분류된 배열에서의 이진 검색(binary search) 실시
- 나이브(navie) 문자열 검색 알고리즘 실시
- KMP 문자열 검색 알고리즘 실시

---

### 선형검색 (Linear Search)

javascript 내장 메서드 : 한 번에 하나의 항목 확인

- indexOf
- includes
- find
- findIndex

---

### 연습 24. Linear Search Exercise

Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

Don't use indexOf to implement this function!

**Examples:**

```js
linearSearch([10, 15, 20, 25, 30], 15); // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
linearSearch([100], 100); // 0
linearSearch([1, 2, 3, 4, 5], 6); // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
linearSearch([100], 200); // -1
```

The soultion is...

```js
function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100);
```

---

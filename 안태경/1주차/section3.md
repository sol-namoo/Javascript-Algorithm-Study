## 섹션3 : 배열과 오브젝트의 성능 평가

- 빅오의 시점에서 오브젝트와 배열이 작동하는 방식
- 왜 배열 앞에 데이터를 추가하는 것이 왜 안좋은가
- 더 좋은 방법이 있는지 방안을 보고 배열을 처리하는 시간 비교 (내장 메서드 포함)

---
**객체**를 사용할 때
- 순서가 필요가 없을 때
- 빠른 접근, 입력, 제거를 원할 때
    - Insertion : O(1)
    - Removal : O(1)
    - Searching : O(N)
    - Access : O(1)
- 기타 내장 객체
    - Object.keys : O(N)
    - Object.values : O(N)
    - Object.entries : O(N)
    - hasOwnProperty : O(1)

**문제 1)** 오브젝트에 키와 값을 추가하기 위한 빅오는 무엇일까요?</br>
**정답 )** O(1)

**문제 2)** 오브젝트의 키에 접근하기 위한 빅오는 무엇일까요?</br>
**정답 )** O(n)

**문제 3)** 오브젝트의 키를 제거하기 위한 빅오는 무엇일까요?</br>
**정답 )** O(1)

---

**배열**을 사용할 때
- 순서가 필요할 때
- 빠른 접근, 입력, 제거를 원할 때
    - Insertion : It depends...
    - Removal : It depends...</br>
    (배열의 앞부분인지 끝부분인지에 따라 다르다.)
    - Searching : O(N)
    - Access : O(1)
- 기타 내장 객체
    - push : O(1)
    - pop : O(1)
    - shift : O(N)
    - unshift : O(N)
    - concat : O(N)
    - slice : O(N)
    - splice : O(N)
    - sort : O(N*logN)
    - forEach/map/filter/reduce/etc. : O(N) </br>
    (다 외울필요 없다.)

**문제 1)** 배열 안에 데이터를 삽입하는 빅오는 무엇일까요?</br>
**정답 )** O(1)

**문제 2)** 배열 안에 데이터를 이동하는 빅오는 무엇일까요?</br>
**정답 )** O(n)

**문제 3)** forEach 함수를 위한 빅오는 무엇일까요?</br>
**정답 )** O(n)
## 섹션 18 : 자료 구조 소개

**자료구조(data structure)** 는 컴퓨터 과학에서 효율적인 접근 및 수정을 가능케 하는 자료의 조직, 관리, 저장을 의미한다. 더 정확히 말해, 자료 구조는 데이터 값의 모임, 또 데이터 간의 관계, 그리고 데이터에 적용할 수 있는 함수나 명령을 의미한다.

### ES2015 Class Syntax

- Explain what a class is
- Understand how JavaScript implements the idea of classes
- Define therms like abstraction, encapsulation and polymorphism
- Use ES2015 classes to implement data sturctures

---

what is a class?

- 일반적으로 클래스란 사전에 정의된 속성 및 메소드들을 이용해 객체를 생성하기 위한 청사진과 같다.
- 클래스를 배우는 이유 : We're going to implement data structures as classes

---

### 용어 정리

- 인스턴스화</br>
  : 메소드와 변수를 모아놓은 것에 불과한 클래스를 사용할 수 있도록 해당 클래스 타입의 객체명을 선언하고 값을 넣어줘서 해당 클래스의 변수나 메소드를 사용 가능한 상태로 만드는 것

- .this</br>
  : constructor(생성자) 혹은 다른 인스턴스 메소드 내부에서 사용되는 경우에는 개별 클래스 인스턴스를 지칭하게 된다. - ex)
  ```js
  class Student {
  constructor(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  }
  }

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
```

-

Creating objects from classes => We use the **new** keyword

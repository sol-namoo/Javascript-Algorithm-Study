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
### 자료 구조 : 클래스 키워드

- 인스턴스화</br>
    : 메소드와 변수를 모아놓은 것에 불과한 클래스를 사용할 수 있도록 해당 클래스 타입의 객체명을 선언하고 값을 넣어줘서 해당 클래스의 변수나 메소드를 사용 가능한 상태로 만드는 것

- .this</br>
    : constructor(생성자) 혹은 다른 인스턴스 메소드 내부에서 사용되는 경우에는 개별 클래스 인스턴스를 지칭하게 된다.
    -   ex) 아래에서 fisrtStudent, secondStudent 각각을 말한다.
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
- Creating objects from classes => We use the **new** keyword

---
### 자료 구조 : instance 메소드 추가하기

- (class 안에 function 만들어준다고 생각하면 됨)

```js
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0; // 조건문 인스턴스 메소드 만들기
        this.scores = []; // 인자를 받는 인스턴스 메소드 만들기
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }  
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);
```

---
### 자료 구조 : class 메소드 추가하기

예제 1) 
```js
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }
    static EnrollStudents(){        // static으로 작성 된 이부분은
        return "ENROLLING STUDENTS!"
    }
    
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);

// 콘솔창 입력
firstStudent.EnrollStudnents() // Uncaught TypeError
Student.EnrollStudnents() // "ENROLLING STUDENTS!"
```

예제 2) 
```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

---

**How we'll be using classes**
```js
class DataStructure(){
    constructor(){
        // what default properties should it have?
    }
    someInstanceMethod(){
        // what should each object created from this class be able to do?
    }
}
```
- We will be using the constructor and instance methods quite a bit!
- We will almost never be using static methods

**One gotcha with `this`**
- Inside all of our instance methods and constructor, the keyword `this` refers to the object created from that class (also known as an instance)

---

### Recap
- Classes are blueprints that when created make objects known as instances
- Classes are created with the new keyword
- The constructor function is a special function that gets run when the class is instantiated
- Instance methods can be added to classes similar to methods in objects
- Class methods can be added using the static keyword
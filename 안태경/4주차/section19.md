## 섹션19 : 단일 연결 리스트

- Define what a Singly Linked List is (단방향 연결 리스트가 무언인가)
- Compare and constrast Linked Lists with Array (이미 알고있는 리스트 구조와 내장 어레이 구조를 비교)
- Implement insertion, removal and traversal methods on Singly Linked Lists

---

**What is a linked list?**

- A data structure that contains a **head, tail** and **length** property.
- Linked Lists consist of **nodes** (노드로 구성되어 있다), and each **node** has a value and a **pointer** to another node or null

**Comparisons with Arrays**

- Lists (엘베없는 고층건물 (계단: 하나씩 다 거쳐서 가야함))
  - Do not have indexes!
  - Connected via nodes with a next pointer
  - Random access is not allowed
- Arrays (엘베있는 고층건물 (엘베: 숫자를 지정하면 바로 갈 수 있음))
  - Indexed in order!
  - Insertion and deletion can be expensive
  - Can quickly be accessed at a specific index

---

### 1. method : push

- Practice

  ```js
  // piece of data - val
  //reference to next node - next

  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {}
  }

  // var first = new Node("Hi")
  // first.next = new Node("there")
  // first.next.next = new Node("how")
  // first.next.next.next = new Node("are")
  // first.next.next.next.next = new Node("you")

  var list = new SinglyLinkedList();
  list.push("HELLO");
  list.push("GOODBYE");
  ```

- Pushing pseudocode

  - This function should accept a value
  - Create a new node using the value passed to the function
  - If there is no head property on the list, set the head and tail to be the newly created node
  - Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
  - Increment the length by one
  - Return the linked list

  </br>

- Solution

  ```js
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      var newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  }

  var list = new SinglyLinkedList();
  // list.push("HELLO")
  // list.push("GOODBYE")
  ```

---

### 2. method : pop

---

### 3. method : shift

---

### 4. method : unshift

---

### 5. method : get

---

### 6. method : set

---

### 7. method : insert

---

### 8. method : remove

---

### 9. method : reserve

---

### 10. 빅오 복잡도

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

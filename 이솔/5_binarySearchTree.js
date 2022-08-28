class Node {
    constructor(val){
        this.value = val
        this.left = null
        this.right = null
    }
}

// 강의에서는 재귀로 처리하는 것보다 반복문을 선호한다고 했는데
// 직접 적어 보니 왜 그런지 알겠다.
// function 안에 function을 만들어 놓으면 return한 값을 다시 return해야 돼서 귀찮음 ㅠ
class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(val){
        let newNode = new Node(val)
        function findPlace(oldNode , newNode){
          if(newNode.value === oldNode.value) return undefined
          if(newNode.value < oldNode.value){
            if(oldNode.left === null) oldNode.left = newNode
            else findPlace(oldNode.left, newNode)
          }else{
            if(oldNode.right === null) oldNode.right = newNode
            else findPlace(oldNode.right, newNode)
          }
          return this
        }

        if(this.root === null){
            this.root = newNode
            return this
        }
        else return findPlace(this.root, newNode)
    }
    find(value){
        if(!this.root.value) return false
        else{
            if(value === this.root.value) return true
            else{
                let temp = this.root
                while(temp){
                    if(value === temp.value) return true
                    if(value < temp.value){
                      if(temp.left === null) return false 
                      else temp = temp.left
                    }else{
                      if(temp.right === null) return false
                      else temp = temp.right
                    }
                  }
            }
            
        }
    }
}


let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(2)
tree.insert(7)
tree.insert(16)
tree.insert(11)
tree.insert(1)
console.log(tree.root)
console.log(tree.find(16))
console.log(tree.find(1))
console.log(tree.find(3))
console.log(tree.find(9))

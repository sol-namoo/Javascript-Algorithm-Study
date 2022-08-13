class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(this.length === 0) return undefined
        let temp = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = temp.prev 
            this.tail.next = null
            temp.prev = null   
        }
        this.length--
        return temp
    }
    shift(){
        if(!this.head) return undefined
        let oldHead = this.head
        if(this.length === 0){
            this.tail = null
            this.head = null
        }else{
            this.head = oldHead.next
            oldHead.next = null
            this.head.prev = null
        }
        this.length--
        return oldHead
    }
    // unshift(val){
    //     let newNode = new Node(val)
    //     if(!this.head){
    //         this.head = newNode
    //         this.tail = newNode
    //     }
    //     newNode.next = this.head;
    //     this.head = newNode
    //     this.length++
    //     return this
    // }
    // get(idx){
    //     if(idx < 0 || idx >= this.length) return undefined
    //     let counter = 0
    //     let curr = this.head
    //     while(counter !== idx){
    //         counter++
    //         curr = curr.next
    //     }
    //     return curr
    // }
    // set(idx, val){
    //     if(this.get(idx)){
    //         this.get(idx).val = val
    //         return true
    //     }
    //     return null
    // }
    // insert(idx, val){
    //     if(idx < 0 || idx > this.length) return false
    //     if(idx = this.length) return !!this.push(val)
    //     if(idx === 0) return !!this.unshift(val)

    //     let newNode = new Node(val)
    //     newNode.next = this.get(idx)
    //     this.get(idx - 1).next = newNode
    //     this.length++
    //     return true
    // }
    // remove(idx){
    //     if(idx < 0 || idx > this.length) return undefined
    //     if(idx === 0) return this.shift()
    //     if(idx === this.length - 1) return this.pop()

    //     this.get(idx - 1).next = this.get(idx + 1)
    //     this.length--
    //     return 'removed'
    // }
    // reverse(){
    //     let temp = this.head; // 13
    //     this.head = this.tail // 71
    //     this.tail = temp // 13

    //     let prev = null
    //     let next
    //     for(let i = 0 ; i < this.length ; i++){
    //         next = temp.next // 27 
    //         prev = temp // 13
    //         temp = next // 27
    //     }
    // }
}


let list = new DoublyLinkedList()
list.push("hello")
list.push("future")
list.push("beatbox")
list.push("whale")
list.push("minicar")
list.push("first/last")
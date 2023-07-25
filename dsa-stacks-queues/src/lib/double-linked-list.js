class Node{
    constructor(val){
        this.previous = null;
        this.next = null;
        this.val = val;
    }
}

class DoublyLinkedList{
    constructor(vals=[]){
        this.length = 0;
        this.head = null;
        this.tail = null;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        const newNode = new Node(val);
        if(this.tail === null){ // empty list
            this.head = newNode;
            this.tail = newNode;
        }
        else{
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        }
        this.length++;
    }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if(this.head === null){ // empty list
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(this.length === 0){ // empty list
      return null;
    }else if(this.length === 1){ // one node in list
      let val = this.tail.val;
      this.length = 0;
      this.head = null;
      this.tail = null;
      return val;
    }
    else{// at least two nodes in list
      let previous = this.tail.previous;
      previous.next = null;
      let val = this.tail.val;
      let toRemoveNode = this.tail;
      this.tail = previous;
      this.length = this.length -1;
      toRemoveNode = null;

      return val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.length === 0){
      return null;
    }else if(this.length === 1){
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    }else{
      let val = this.head.val;
      this.head = this.head.next;
      this.length--;
      return val;
    }
  }

  /** findAt(idx): return node at idx */
  findAt(idx){
    let count = 0;
    let current = this.head;
    while( count < idx){
      current = current.next;
      count++;
    }
    return current;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    const node = this.findAt(idx);
      return node.val;
  }
  

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this.findAt(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx === 0) { // unshift
      this.unshift(val)}
    else if(idx !==0 && idx === this.length){ //push
      this.push(val);
    }
    else {
      const previousNode = this.findAt(idx-1);
      const nextNode = previousNode.next;
      const newNode = new Node(val);
      previousNode.next = newNode;
      newNode.previous = previousNode;
      newNode.next = nextNode;
      nextNode.previous = newNode;
      this.length++;
      }
  };

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx === 0){ //shift
      return this.shift();
    } else if(idx !== 0 && idx === this.length -1){ //pop
      return this.pop();
    }
    else{
      const previousNode = this.findAt(idx-1);
      const toRemoveNode = previousNode.next;
      const nextNode = toRemoveNode.next;

      previousNode.next = nextNode;
      nextNode.previous = previousNode;

      let val = toRemoveNode.val;
      toRemoveNode = null;
      this.length--;
      return val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0)
      return 0;
    else{
      let count = 0;
      let total = 0;
      let current = this.head;
      while (count < this.length){
        total += current.val;
        current = current.next;
        count++;
      }
      return total /this.length;
    }
  }

  /** reverse linked-list in-place */
  reverse(){
    let count = 0;
    let current = this.tail;
    let endNode = this.head;
    this.head = this.tail;


    while(count < this.length){
        let tmp = current.previous;
        current.previous = current.next;
        current.next = tmp;
        current = current.next;
        count++;
    }

    this.tail = endNode;
  }

  /** return true if the list is empty - length=0 */
  isEmpty(){
    return this.length === 0? true : false;
  }

  /** merge two sorted linked-lists */
  static merge(a, b){
    const results  = new DoublyLinkedList();
    let aValue, bValue;

    while ( !a.isEmpty() && !b.isEmpty()){
        aValue = a.head.val;
        bValue = b.head.val;
        if(aValue <= bValue) 
            results.push(a.shift())
        else 
            results.push(b.shift())
    }

    while(!a.isEmpty()){
        results.push(a.shift());
    }

    while(!b.isEmpty()){
        results.push(b.shift());
    }

    return results;
  }

}



module.exports.Node = Node;
module.exports.LinkedList = DoublyLinkedList;
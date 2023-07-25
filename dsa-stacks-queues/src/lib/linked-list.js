/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

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
      let previous = this.head;
      let current = this.head.next;
      while(current !== this.tail){
        previous = current;
        current = current.next;
      }
      previous.next = null;
      this.tail = previous;
      this.length--;
      return current.val;
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
      newNode.next = nextNode;
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

  /** pivot: reorder the list such that the first half consisting of all vals less than a given val
   *  and the second half consisting the rest vals
   * in-place?
   */
  pivot(key){
    let count = 0;
    let hasHead = false;
    let current = this.head;
    let len = this.length;
    let end;
    while(count < len){
      if(current.val < key){ // stay 
        if(!hasHead){
          this.head = current;
          hasHead = true;
        }
        end = current;
        current = current.next;
      }
      else{ // move to tail
        this.tail.next = current;
        this.tail = current;
        current = current.next;
        this.tail.next = null;
        if (hasHead) end.next = current;
      }
      count++;
    }
    
  }
}

module.exports.LinkedList = LinkedList;
module.exports.Node = Node;

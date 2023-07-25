/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null; // top
    this.last = null; // bottom
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if(this.isEmpty()){
      this.first = newNode;
      this.last = newNode;
    }
    else{
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.isEmpty() ){
      throw new Error("Empty stack");
    }
    else if (this.size === 1){
      let val = this.first.val;
      this.clearAll();
      return val;
    }else{
      const val = this.first.val;
      const next = this.first.next;
      this.first = null;
      this.first = next;
      this.size--;
      return val;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.isEmpty()? null : this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }

  /** clear: set this to be empty queue */
  clearAll(){
    if(this.isEmpty())
      return;

    let current = this.first;
    while (current !== null){
      let next = current.next;
      current = null;
      current = next;
    }

    this.first = null;
    this.last = null;
    this.size = 0;
  }

}

module.exports = Stack;

const {LinkedList} = require("../lib/linked-list");


/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this._list = new LinkedList();
    this._updateFields();
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this._list.unshift(val);
    this._updateFields();
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let removed = this._list.shift();
    if(removed === null){
      throw new Error("Empty stack")
    }
    this._updateFields();
    return removed;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.isEmpty()? null : this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }

  /** updateFields */
  _updateFields(){
    this.first = this._list.head; // top
    this.last = this._list.tail;  // bottom
    this.size = this._list.length;
  }

}

module.exports = Stack;

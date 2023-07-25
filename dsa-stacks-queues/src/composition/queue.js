const {LinkedList} = require("../lib/linked-list");

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this._list = new LinkedList();
    this._updateFields();
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._list.push(val);
    this._updateFields();
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let removed = this._list.shift();
    if(removed === null){
      throw new Error("Empty queue");
    }
    this._updateFields();
    return removed;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.isEmpty()? null : this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }


  /** updateFields */
  _updateFields(){
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
  }
}

module.exports = Queue;

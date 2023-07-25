/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size ++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.isEmpty()){
      throw new Error("Empty queue");
    }
    else if(this.size === 1){
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

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.isEmpty()? null : this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

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

module.exports = Queue;

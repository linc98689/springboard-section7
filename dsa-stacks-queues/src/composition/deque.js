const {LinkedList} = require("../lib/double-linked-list");
class Deque{
    constructor(){
        this._list = new LinkedList();
        this._updateFields();
    }

    appendLeft(val){
        this._list.unshift(val);
        this._updateFields();
        return undefined;
    }

    appendRight(val){
        this._list.push(val);
        this._updateFields();
        return undefined;
    }

    popLeft(){
        let removed = this._list.shift();
        if(removed === null)
            throw new Error("Empty deque");
        
        this._updateFields();
        return removed;
    }

    popRight(){
        let removed = this._list.pop();
        if(removed === null)
            throw new Error("Empty deque");
        
        this._updateFields();
        return removed;
    }

    peekLeft(){
        if(this.isEmpty())
            return null;
        else
            return this._list.head.val;
    }

    peekRight(){
        if(this.isEmpty())
            return null;
        else
            return this._list.tail.val;
    }

    isEmpty(){
        return this.size === 0;
    }

    _updateFields(){
        this.left = this._list.head;
        this.right = this._list.tail;
        this.size = this._list.length;
    }
}

module.exports = Deque;
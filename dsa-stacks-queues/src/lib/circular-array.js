class CircularArray{
    constructor(vals=[]){
        this.data = [...vals];
        this.start = 0;
    }

    /** length */
    length(){
        return this.data.length;
    }

    /** addItem: add item at the end, return length 
     * create new array with existing data after moving start to idx=0
     * then add new data to the end , and copy to this.data
    */
    addItem(val){
        let tmp = [];
        for(let i of [...Array(this.length()).keys()]){
            tmp.push(this.getByIndex(i));
        }
        this.data = [...tmp, val];
        this.start = 0;
    }

    /** rotate: positive arg results idx-0 to idx-length
     * negative arg results idx-0 to idx-1
     */
    rotate(n){
        const len = this.length();
        this.start = (this.start + (n % len) + len) % len; //ensure start in [0, len)
    };

    /** getByIndex: return val at given idx */
    getByIndex(idx){
        let len = this.length();
        return this.data[(this.start + idx) % len];
    };

    /** toString */
    toString(){
        let str = "[";
        for(let i of [...Array(this.length()).keys()]){
            str += `${this.getByIndex(i)},`;
        }
        return str.substring(0, str.length-1)+"]";
    }
};

module.exports.CircularArray = CircularArray;

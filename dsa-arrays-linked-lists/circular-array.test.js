const {CircularArray} = require("./circular-array");

describe("helpers: addItem, getByIndex", function(){
    it("addItem", function(){
        let circ = new CircularArray();
        circ.addItem(3);
        expect(circ).toStrictEqual(new CircularArray([3]));
    });

    it("getByIndex", function(){
        let circ = new CircularArray([2, 3, 4]);
        expect(circ.getByIndex(0)).toBe(2);
        expect(circ.getByIndex(1)).toBe(3);
        expect(circ.getByIndex(2)).toBe(4);
    });

});

describe("rotate", function(){
    let circ;
    beforeEach(()=>{
        circ = new CircularArray();
        circ.addItem('harry')
        circ.addItem('hermione')
        circ.addItem('ginny')
        circ.addItem('ron')
    });

    it("rotate: positive", function(){
        circ.rotate(2);
        expect(circ.toString()).toBe("[ginny,ron,harry,hermione]");
    });

    it("rotate: negative", function(){
        circ.rotate(-1);
        expect(circ.toString()).toBe("[ron,harry,hermione,ginny]");
    });

});
const Deque = require("./deque");

let deque;
beforeEach(function(){
    deque = new Deque();
});

describe("appendLeft", function(){
    it("add the value at the first, return undefined", function(){
       expect(deque.appendLeft(10)).toBe(undefined);
       expect(deque.left.val).toBe(10);
       expect(deque.right.val).toBe(10);
       deque.appendLeft(100);
       expect(deque.left.val).toBe(100);
       expect(deque.right.val).toBe(10);
       deque.appendLeft(1000);
       expect(deque.left.val).toBe(1000);
       expect(deque.right.val).toBe(10);
    });
});

describe("appendRight", function(){
    it("add the value at the last, return undefined", function(){
       expect(deque.appendRight(10)).toBe(undefined);
       expect(deque.left.val).toBe(10);
       expect(deque.right.val).toBe(10);
       deque.appendRight(100);
       expect(deque.left.val).toBe(10);
       expect(deque.right.val).toBe(100);
       deque.appendRight(1000);
       expect(deque.left.val).toBe(10);
       expect(deque.right.val).toBe(1000);
    });
});

describe("popLeft", function() {
    it("returns the value of the node removed", function() {
      deque.appendLeft(10);
      deque.appendLeft(100);
      deque.appendLeft(1000);
      let removed = deque.popLeft();
      expect(removed).toBe(1000);
      expect(deque.size).toBe(2);
      deque.popLeft();
      deque.popLeft();
      expect(deque.size).toBe(0);
    });
  
    it("throws an error if the deque is empty", function() {
      expect(() => deque.popLeft()).toThrow(Error);
    });
  });

  describe("popRight", function() {
    it("returns the value of the node removed", function() {
      deque.appendRight(10);
      deque.appendRight(100);
      deque.appendRight(1000);
      let removed = deque.popRight();
      expect(removed).toBe(1000);
      expect(deque.size).toBe(2);
      deque.popRight();
      deque.popRight();
      expect(deque.size).toBe(0);
    });
  
    it("throws an error if the deque is empty", function() {
      expect(() => deque.popRight()).toThrow(Error);
    });
  });

  describe("peekLeft", function() {
    it("returns the value at the left of the deque", function() {
      deque.appendLeft(3);
      expect(deque.peekLeft()).toBe(3);
      deque.appendLeft(5);
      expect(deque.peekLeft()).toBe(5);
    });
  });

  describe("peekRight", function() {
    it("returns the value at the right of the deque", function() {
      deque.appendRight(3);
      expect(deque.peekRight()).toBe(3);
      deque.appendRight(5);
      expect(deque.peekRight()).toBe(5);
    });
  });

  describe("isEmpty", function() {
    it("returns true for empty deque", function() {
      expect(deque.isEmpty()).toBe(true);
    });
  
    it("returns false for nonempty deque", function() {
      deque.appendRight(3);
      expect(deque.isEmpty()).toBe(false);
    });
  });
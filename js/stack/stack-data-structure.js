class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length === this.MAX_SIZE){
      return false;
    } else if (this.stackControl.length < 10){
      return true;
    }
  }

  isEmpty() {
    if (this.stackControl.length === 0){
      return true;
    } else {
      return false;
    }
  }

  push(item) {
    if (this.stackControl.length === this.MAX_SIZE){
      throw Error ("STACK_OVERFLOW");
    } else {
      this.stackControl.push(item);
      return this.stackControl;
    }
  }

  pop() {
    if (this.stackControl.length === 0){
      throw Error ("STACK_UNDERFLOW");
    } else {
      let x = this.stackControl.pop();
      return x;
    }
  }

  display() {
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;

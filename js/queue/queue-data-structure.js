class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length === this.MAX_SIZE){
      return false;
    } else if (this.queueControl.length < 10){
      return true;
    }
  }

  isEmpty() {
    if (this.queueControl.length === 0){
      return true;
    } else {
      return false;
    }
  }

  enqueue(item) {
    if (this.queueControl.length === this.MAX_SIZE){
      throw Error ("QUEUE_OVERFLOW");
    } else {
      this.queueControl.push(item);
      return this.queueControl;
    }
  }

  dequeue() {
    if (this.queueControl.length === 0){
      throw Error ("QUEUE_UNDERFLOW");
    } else {
      let x = this.queueControl.shift();
      return x;
    }
  }

  display() {
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;

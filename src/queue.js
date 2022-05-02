const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  // arr = []
  // current = null
  // obj = {value: null, next:null }


  constructor (){ 
    this.len = null
  }

  getUnderlyingList() {
     
      // return this.obj
      return this.len

  }

  enqueue(value) {
      if(this.len === null){ 
        this.len = new ListNode(value)
        return this.len
      }

      let tar = this.len
      while(tar.next !== null){ 
        tar = tar.next
      }
      // NODE UPD
      tar.next  = new ListNode(value)
    // remove line with error and write your code here
  }

  dequeue() {
      let tar = this.len
      this.len = this.len.next

      // console.log(this.current);
      return tar.value
    // remove line with error and write your code here
  }

  // print(){ 
  //     console.log(this.arr)
  // }
}

module.exports = {
  Queue
};

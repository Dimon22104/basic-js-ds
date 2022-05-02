const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){ 
      this.rootTree = null
  }

  root() {
      return this.rootTree
  
  }

  add(data){ 
      this.rootTree = addWithin(this.rootTree, data)

      function addWithin(node,value){ 
          if(!node){ 
              return new Node(value)
          }

          if(value < node.data){ 
              node.left = addWithin(node.left, value)
          } else { 
              node.right = addWithin(node.right, value)
          }
          return node
      }
  }

  has(data){
          let value = this.rootTree;
          
          while (value) {
            if (value.data === data) return true;
          
            if (value.data > data) {
              value = value.left;
            } else value = value.right;
    }
    return false;

 }

  find(data) {

    let value = this.rootTree;
          
    while (value) {
      if (value.data === data) return value;
    
      if (value.data > data) {
        value = value.left;
      } else value = value.right;
}
    return null;

  }
  remove(data) {

    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(node, value) {
          if (!node) return null;
          if (value < node.data) {
            node.left = removeNode(node.left, value);
            return node;
          }
      if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      }
        if (!node.left && !node.right) { 
          return null; }
        if (!node.left) { 
          return node.right;
        } 
        if (!node.right)  
        { 
          return node.left; 
        }


        let max = node.left;
        while (max.right) {
          max = max.right;
        }
        node.data = max.data;
        node.left = removeNode(node.left, max.data);
        return node;
      }
    
  }
  min(){ 
        let min = this.rootTree;
        
        if (!this.rootTree) {
             return null;
        } 
        
        while (min.left) {
             min = min.left;
    }
         return min.data;
  }

  max(){
    let max = this.rootTree;
        
        if (!this.rootTree) {
             return null;
        } 
        
        while (max.right) {
             max = max.right;
    }
         return max.data;

  }
}

module.exports = {
  BinarySearchTree
};

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(!this.root){
      this.root = new Node(val);
      return this
    }
    let current = this.root;
    while(current.val < val && current.right || current.val > val && current.left){
      if(current.val < val){
        current = current.right;
      }else {
        current = current.left;
      }
    }
    if(current.val < val){
      current.right = new Node(val);
    }else {
      current.left = new Node(val);
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root){
      this.root = new Node(val);
      return this;
    }
    function findPlace(node){
      if(node.val < val) {
        if(node.right){
          findPlace(node.right);
        }else{
          node.right = new Node(val);
        }
      }
      if(node.val > val) {
        if(node.left){
          findPlace(node.left);
        }else{
          node.left = new Node(val);
        }
      }
    }
    findPlace(this.root);
    return this
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while(current){
      if (current.val === val){
        return current;
      }
      if(current.val > val){
        current = current.left;
      }else{
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function findNode(node){
      if(!node){
        return undefined
      }
      if(node.val === val){
        return node
      }
      if(node.val > val){
        return findNode(node.left)
      }else{
        return findNode(node.right)
      }
    }
    return findNode(this.root)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = []
    function traverse(node){
      arr.push(node.val)
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root)
    return arr
  }


  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = []
    function traverse(node){
      if(node.left) traverse(node.left);
      arr.push(node.val)
      if(node.right) traverse(node.right);
    }
    traverse(this.root)
    return arr
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = []
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      arr.push(node.val)
    }
    traverse(this.root)
    return arr
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let toVisitQueue = [this.root];
    let arr =[];
    while(toVisitQueue.length){
      let current = toVisitQueue.shift();
      arr.push(current.val);
      if(current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }
    return arr
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;

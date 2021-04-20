function TreeNode(value) {
  this.value = value;
  this.children = [];
}

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this._root = null;
}

BinaryTree.prototype.traversePreOrder = () => {
  traversePreOrderHelper(this._root);
  function traversePreOrderHelper(node) {
    if (!node) return;
    traversePreOrderHelper(node.left);
    console.log(node.value);
    traversePreOrderHelper(node.right);
  }
};

BinaryTree.prototype.traversePreOrderIterative = () => {
  var nodeStack = [];
  nodeStack.push(this._root);
  while (nodeStack.length) {
    var node = nodeStack.pop();
    console.log(node.value);
    if (node.left) nodeStack.push(node.left);
    if (node.right) nodeStack.push(node.right);
  }
};
BinaryTree.prototype.traverseInOrder = function () {
  traverseInOrderHelper(this._root);

  function traverseInOrderHelper(node) {
    if (!node) return;
    traverseInOrderHelper(node.left);
    console.log(node.value);
    traverseInOrderHelper(node.right);
  }
};
BinaryTree.prototype.traverseInOrderIterative = function () {
  var current = this._root,
    s = [],
    done = false;

  while (!done) {
    // Reach the left most Node of the current Node
    if (current != null) {
      // Place pointer to a tree node on the stack
      // before traversing the node's left subtree
      s.push(current);
      current = current.left;
    } else {
      if (s.length) {
        current = s.pop();
        console.log(current.value);
        current = current.right;
      } else {
        done = true;
      }
    }
  }
};
BinaryTree.prototype.traversePostOrder = function () {
  traversePostOrderHelper(this._root);

  function traversePostOrderHelper(node) {
    if (node.left) traversePostOrderHelper(node.left);
    if (node.right) traversePostOrderHelper(node.right);
    console.log(node.value);
  }
};
BinaryTree.prototype.traversePostOrderIterative = function () {
  // Create two stacks
  var s1 = [],
    s2 = [];

  // Push root to first stack
  s1.push(this._root);

  //# Run while first stack is not empty
  while (s1.length) {
    // Pop an item from s1 and append it to s2
    var node = s1.pop();
    s2.push(node);

    // Push left and right children of removed item to s1
    if (node.left) s1.push(node.left);
    if (node.right) s1.push(node.right);
  }
  // Print all eleements of second stack
  while (s2.length) {
    var node = s2.pop();
    console.log(node.value);
  }
};
BinaryTree.prototype.traverseLevelOrder = function () {
  // Breath first search
  var root = this._root,
    queue = [];

  if (!root) return;
  queue.push(root);

  while (queue.length) {
    var temp = queue.shift();
    console.log(temp.value);
    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
  }
};
function BinarySearchTree() {
  this._root = null;
}

// If you know you need to explore the roots before inspecting any leaves, choose pre-order
// traversal because you will encounter all the roots before all of the leaves.
// If you know you need to explore all the leaves before any nodes, choose post-order
// traversal because you don’t waste any time inspecting roots when searching for leaves.
// If you know that the tree has an inherent sequence in the nodes and you want to
// flatten the tree into its original sequence, then you should use an in-order traversal.
// The tree would be flattened in the same way it was created. A pre-order or post-order
// traversal might not unwind the tree back into the sequence that was used to create it.
BinarySearchTree.prototype.insert = function (value) {
  var thisNode = {
    left: null,
    right: null,
    value: value,
  };
  if (!this._root) {
    //if there is no root value yet
    this._root = thisNode;
  } else {
    //loop traverse until
    var currentRoot = this._root;
    while (true) {
      if (currentRoot.value > value) {
        //let's increment if it's not a null and insert if it is a null
        if (currentRoot.left != null) {
          currentRoot = currentRoot.left;
        } else {
          currentRoot.left = thisNode;
          break;
        }
      } else if (currentRoot.value < value) {
        //if bigger than current, put it on the right
        //let's increment if it's not a null and insert if it is a null
        if (currentRoot.right != null) {
          currentRoot = currentRoot.right;
        } else {
          currentRoot.right = thisNode;
          break;
        }
      } else {
        //case that both are the same
        break;
      }
    }
  }
};
BinarySearchTree.prototype.remove = function (value) {
  return deleteRecursively(this._root, value);

  function deleteRecursively(root, value) {
    if (!root) {
      return null;
    } else if (value < root.value) {
      root.left = deleteRecursively(root.left, value);
    } else if (value > root.value) {
      root.right = deleteRecursively(root.right, value);
    } else {
      //no child
      if (!root.left && !root.right) {
        return null; // case 1
      } else if (!root.left) {
        // case 2
        root = root.right;
        return root;
      } else if (!root.right) {
        // case 2
        root = root.left;
        return root;
      } else {
        var temp = findMin(root.right); // case 3
        root.value = temp.value;
        root.right = deleteRecursively(root.right, temp.value);
        return root;
      }
    }
    return root;
  }

  function findMin(root) {
    while (root.left) {
      root = root.left;
    }
    return root;
  }
};
BinarySearchTree.prototype.findNode = function (value) {
  var currentRoot = this._root,
    found = false;
  while (currentRoot) {
    if (currentRoot.value > value) {
      currentRoot = currentRoot.left;
    } else if (currentRoot.value < value) {
      currentRoot = currentRoot.right;
    } else {
      //we've found the node
      found = true;
      break;
    }
  }
  return found;
};
var bst1 = new BinarySearchTree();
bst1.insert(1);
bst1.insert(3);
bst1.insert(2);
bst1.findNode(3); // true
bst1.findNode(5); // false

function AVLTree(value) {
  this.left = null;
  this.right = null;
  this.value = value;
  this.depth = 1;
}

AVLTree.prototype.setDepthBasedOnChildren = function () {
  if (this.node == null) {
    this.depth = 1;
  }

  if (this.left != null) {
    this.depth = this.left.depth + 1;
  }
  if (this.right != null && this.depth <= this.right.depth) {
    this.depth = this.right.depth + 1;
  }
};
AVLTree.prototype.rotateLL = function () {
  var valueBefore = this.value;
  var rightBefore = this.right;
  this.value = this.left.value;

  this.right = this.left;
  this.left = this.left.left;
  this.right.left = this.right.right;
  this.right.right = rightBefore;
  this.right.value = valueBefore;

  this.right.setDepthBasedOnChildren();
  this.setDepthBasedOnChildren();
};
AVLTree.prototype.rotateRR = function () {
  // the right side is too long => rotate from the right (_not_ rightwards)
  var valueBefore = this.value;
  var leftBefore = this.left;
  this.value = this.right.value;

  this.left = this.right;
  this.right = this.right.right;
  this.left.right = this.left.left;
  this.left.left = leftBefore;
  this.left.value = valueBefore;

  this.left.setDepthBasedOnChildren();
  this.setDepthBasedOnChildren();
};
AVLTree.prototype.balance = function () {
  var ldepth = this.left == null ? 0 : this.left.depth;
  var rdepth = this.right == null ? 0 : this.right.depth;

  if (ldepth > rdepth + 1) {
    // LR or LL rotation
    var lldepth = this.left.left == null ? 0 : this.left.left.depth;
    var lrdepth = this.left.right == null ? 0 : this.left.right.depth;

    if (lldepth < lrdepth) {
      // LR rotation consists of a RR rotation of the left child
      this.left.rotateRR();
      // plus a LL rotation of this node, which happens anyway
    }
    this.rotateLL();
  } else if (ldepth + 1 < rdepth) {
    // RR or RL rorarion
    var rrdepth = this.right.right == null ? 0 : this.right.right.depth;
    var rldepth = this.right.left == null ? 0 : this.right.left.depth;

    if (rldepth > rrdepth) {
      // RR rotation consists of a LL rotation of the right child
      this.right.rotateLL();
      // plus a RR rotation of this node, which happens anyway
    }
    this.rotateRR();
  }
};
AVLTree.prototype.insert = function (value) {
  var childInserted = false;
  if (value == this.value) {
    return false; // should be all unique
  } else if (value < this.value) {
    if (this.left == null) {
      this.left = new AVLTree(value);
      childInserted = true;
    } else {
      childInserted = this.left.insert(value);
      if (childInserted == true) this.balance();
    }
  } else if (value > this.value) {
    if (this.right == null) {
      this.right = new AVLTree(value);
      childInserted = true;
    } else {
      childInserted = this.right.insert(value);

      if (childInserted == true) this.balance();
    }
  }
  if (childInserted == true) this.setDepthBasedOnChildren();
  return childInserted;
};

AVLTree.prototype.remove = function (value) {
  return deleteRecursively(this, value);

  function deleteRecursively(root, value) {
    if (!root) {
      return null;
    } else if (value < root.value) {
      root.left = deleteRecursively(root.left, value);
    } else if (value > root.value) {
      root.right = deleteRecursively(root.right, value);
    } else {
      //no child
      if (!root.left && !root.right) {
        return null; // case 1
      } else if (!root.left) {
        root = root.right;
        return root;
      } else if (!root.right) {
        root = root.left;
        return root;
      } else {
        var temp = findMin(root.right);
        root.value = temp.value;
        root.right = deleteRecursively(root.right, temp.value);
        return root;
      }
    }
    root.setDepthBasedOnChildren(); // ONLY DIFFERENCE from the BST one
    return root;
  }

  function findMin(root) {
    while (root.left) root = root.left;
    return root;
  }
};
var avlTest = new AVLTree(1, "");
avlTest.insert(2);
avlTest.insert(3);
avlTest.insert(4);
avlTest.insert(5);
avlTest.insert(123);
avlTest.insert(203);
avlTest.insert(2222);
console.log(avlTest);

function printKthLevels(root, k) {
  var arrayKth = [];
  queue = [];

  if (!root) return;

  // Breath first search for tree
  queue.push([root, 0]);

  while (queue.length) {
    var tuple = queue.shift(),
      temp = tuple[0],
      height = tuple[1];

    if (height == k) {
      arrayKth.push(temp.value);
    }
    if (temp.left) {
      queue.push([temp.left, height + 1]);
    }
    if (temp.right) {
      queue.push([temp.right, height + 1]);
    }
  }
  console.log(arrayKth);
}
var node1 = {
  value: 1,
  left: {
    value: 0,
  },
  right: {
    value: 2,
  },
};

var node2 = {
  value: 1,
  left: {
    value: 0,
    left: {
      value: -1,
    },
    right: {
      value: 0.5,
    },
  },
  right: {
    value: 2,
  },
};

var node3 = {
  value: 1,
  left: {
    value: 0,
  },
  right: {
    value: 2,
    left: {
      value: 1.5,
    },
    right: {
      value: 3,
      left: {
        value: 3.25,
      },
    },
  },
};

printKthLevels(node1, 0); // 1
printKthLevels(node1, 1); // [0,2]

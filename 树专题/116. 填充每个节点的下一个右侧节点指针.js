function TreeNode(val, left, right, next) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
  this.next = next === undefined ? null : next;
}

var connect = function(node) {
  if (node === null || node.left === null) {
    return node
  }

  node.left.next = node.right
  connect(node.left)
  connect(node.right)
}; 


function perOrder(node) {
  if (node === null) {
    return
  }
  console.log(node.val);
  perOrder(node.left)
  perOrder(node.right)
}

function floorOrder(node) {
  if (node === null) {
    return
  }
  var saving = []
  saving.push(node)
  while (saving.length !== 0) {
    var tmp = saving.shift()
    console.log(tmp.val);
    if (tmp.left !== null) {
      saving.push(tmp.left)
    }
    if (tmp.right !== null) {
      saving.push(tmp.right)
    }
  }

}

function main() {
  var node1 = new TreeNode(1)
  var node2 = new TreeNode(2)
  var node3 = new TreeNode(3)
  var node4 = new TreeNode(4)
  var node5 = new TreeNode(5)
  var node6 = new TreeNode(6)
  var node7 = new TreeNode(7)

  node1.left = node2
  node1.right = node3
  node2.left = node4
  node2.right = node5
  node3.left = node6
  node3.right = node7


  // 算法调用开始
  // root = invertTree(node1)
  floorOrder(node1)

}

main()
// Advanced Data Structures

// Set
let mySet = new Set<number>();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.delete(2);
console.log("Set has 1:", mySet.has(1)); // Output: true
console.log("Set size:", mySet.size); // Output: 2

// Map
let myMap = new Map<string, number>();
myMap.set("a", 1);
myMap.set("b", 2);
console.log("Map get 'a':", myMap.get("a")); // Output: 1
console.log("Map size:", myMap.size); // Output: 2

// Binary Tree
class TreeNode {
  value: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class BinaryTree {
  root: TreeNode | null = null;

  insert(value: number): void {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: TreeNode, newNode: TreeNode): void {
    if (newNode.value < node.value) {
      if (!node.left) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (!node.right) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
}

const tree = new BinaryTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
console.log("Binary Tree root:", tree.root?.value); // Output: 50

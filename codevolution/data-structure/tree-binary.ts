class TreeNode<T> {
  value: T;
  right: TreeNode<T> | null;
  left: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<Tr> {
  root: TreeNode<Tr> | null;
  constructor() {
    this.root = null;
  }

  insert(val: Tr) {
    const newNode = new TreeNode<Tr>(val);
    if (this.isEmpty()) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(root: TreeNode<Tr>, newNode: TreeNode<Tr>) {
    if (newNode.value < root.value) {
      if (root.left === null) root.left = newNode;
      else this.insertNode(root.left, newNode);
    } else {
      if (root.right === null) root.right = newNode;
      else this.insertNode(root.right, newNode);
    }
  }

  search(root: TreeNode<Tr> | null, value: Tr): boolean {
    if (!root) return false;
    if (root.value === value) return true;
    else if (value < root.value) return this.search(root.left, value);
    else return this.search(root.right, value);
  }

  isEmpty() {
    return this.root === null;
  }

  public get value(): any {
    return this.root;
  }
}

const BTree = new BinarySearchTree<number>();
console.log("tree is Empty", BTree.isEmpty());
BTree.insert(10)
BTree.insert(5)
BTree.insert(15)

let test = [5,10,20,7].forEach(element => {
  console.log("search for",element,BTree.search(BTree.root,element))
});



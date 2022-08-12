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

  private insertNode(root: TreeNode<Tr>, newNode: TreeNode<Tr>) {
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

  preOrder(root: TreeNode<Tr>) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root: TreeNode<Tr>) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root: TreeNode<Tr>, cb?: (val: Tr) => void) {
    if (root) {
      this.postOrder(root.left,cb||null);
      this.postOrder(root.right,cb||null);
      cb && cb(root.value);
      // console.log(root.value);
    }
  }

  levelOrder(){
    const queue:TreeNode<Tr>[] = []
    queue.push(this.root)
    while(queue.length){
      let curr = queue.shift()
      console.log(curr.value)
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
    }
  }

  min(root:TreeNode<Tr>){
    if(!root.left) return root.value
    else return this.min(root.left)
  }

  max(root:TreeNode<Tr>){
    if(!root.right) return root.value
    else return this.max(root.right)
  }

  delete(val:Tr){
    this.root = this.deleteNode(this.root,val)
  }

  private deleteNode(root:TreeNode<Tr>,val:Tr):TreeNode<Tr>{
    if(root===null) return root
    if(val< root.value) root.left = this.deleteNode(root.left,val)
    else if(val > root.value) root.right = this.deleteNode(root.right,val)
    else {
      if(!root.left && !root.right) return null
      if(!root.left) return root.right
      else if(!root.right) return root.left
      root.value = this.min(root.right)
      root.right = this.deleteNode(root.right,root.value)
    }
    return root
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
BTree.insert(10);
BTree.insert(5);
BTree.insert(15);
BTree.insert(3);
BTree.insert(7);

let test = [5, 10, 20, 7].forEach((element) => {
  console.log("search for", element, BTree.search(BTree.root, element));
});

console.log("\x1b[36m%s\x1b[0m", "\n-preOrder");

BTree.preOrder(BTree.root);
console.log("\x1b[36m%s\x1b[0m", "\n-inOrder");
BTree.inOrder(BTree.root);

console.log("\x1b[36m%s\x1b[0m", "\n-postOrder");
let postOrder = [];
BTree.postOrder(BTree.root, (val) => {postOrder.push(val)});
console.log({ postOrder });

console.log("\x1b[36m%s\x1b[0m", "\n-levelOrder");
BTree.levelOrder();

console.log({min:BTree.min(BTree.root),max:BTree.max(BTree.root)});

console.log("\x1b[36m%s\x1b[0m", "\n-delete");
BTree.delete(15)
BTree.levelOrder();

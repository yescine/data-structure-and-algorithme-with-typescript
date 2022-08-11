class SingleNode<T> {
  value: T;
  next: SingleNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: SingleNode<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  public get length(): number {
    return this.size;
  }

  //? Big-O O(1)
  /**
   *
   * @description add node at first
   */
  prepend(val: T) {
    const node = new SingleNode(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //? Big-O O(n)
  /**
   *
   * @description add node at last node
   */
  append(val: T) {
    const node = new SingleNode(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      // movw the prev pointer
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(val: T, index: number) {
    if (index < 0 || index > this.size) return;
    if (index === 0) this.prepend(val);
    else {
      const node = new SingleNode(val)
      let prev = this.head
      for(let idx=0;idx<index-1;idx++){
        prev = prev.next
      }
      // organize the links
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  public get value(): T[] | null {
    if (this.isEmpty()) return null;
    else {
      let curr = this.head;
      let listValue = [];
      while (curr) {
        listValue.push(curr.value);
        curr = curr.next;
        // console.log({curr})
      }
      return listValue;
    }
  }
}

const list = new LinkedList<{ name: string }>();
list.prepend({ name: "ali" });

list.prepend({ name: "sami" });
list.append({ name: "bali" });
list.append({ name: "yeci" });
list.insert({ name: "insert-3" },3);

console.log({ listsStatus: list.value });

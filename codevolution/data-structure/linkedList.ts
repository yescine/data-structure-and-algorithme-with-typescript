/**
 * @description basic root element for linked list building
 */
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
    const node = new SingleNode<T>(val);
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
    const node = new SingleNode<T>(val);
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

  /**
   * @param val
   * @param index
   * @description insert node Value at a current index
   */

  insert(val: T, index: number) {
    if (index < 0 || index > this.size) return;
    if (index === 0) this.prepend(val);
    else {
      const node = new SingleNode<T>(val);
      let prev = this.head;
      for (let idx = 0; idx < index - 1; idx++) {
        prev = prev.next;
      }
      // organize the links
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  /**
   * @param index
   * @description remove at current index
   */
  remove(index: number) {
    if (index < 0 || index > this.size) return;
    let removeNode: SingleNode<T>;

    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let idx = 0; idx < index - 1; idx++) {
        prev = prev.next;
      }
      // re-organize links
      removeNode = prev.next;
      prev.next = removeNode.next;
    }

    this.size--;
    return removeNode.value;
  }

  removeWithVal(val: T, key?: (keyof T )| null): T | null {
    if (this.isEmpty()) return null;
    const targetVal = key ? val[key] : val;

    if (this.head.value === targetVal) {
      this.head = this.head.next;
      this.size--;
      return targetVal;
    } else {
      let prev = this.head;
      const nextTarget = key ? prev.next.value[key] : prev.next.value;

      while (prev.next && nextTarget !== targetVal) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return val;
      }
      return null;
    }
  }

  search(val:T, key?: (keyof T) | null):number{
    const targetVal = key ? val[key] : val;
    if(this.isEmpty()) return -1
    let idx=0
    let curr = this.head
    
    while(curr){
      const currTarget = key ? curr.value[key] : curr.value;
      if(currTarget===targetVal) return idx
      curr = curr.next
      idx++
    }
    return -1
  }

  reverse ():void{
    let prev = null
    let curr = this.head
    while(curr){
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
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
list.insert({ name: "insert-3" }, 3);
list.insert({ name: "insert-4" }, 4);

list.remove(3);
list.removeWithVal({name:"ali"},"name")

console.log({ listsStatus: list.value });
console.log({ search: list.search({name:"yeci"},"name") });
list.reverse()
console.log({ reverse: list.value});


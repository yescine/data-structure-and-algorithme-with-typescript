class Stack<T> {
  items: T[];
  constructor(elem: T[] = []) {
    this.items = elem;
  }

  push(elem: T) {
    return this.items.push(elem);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    } else return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  public get value(): T[] {
    return this.items;
  }
}

class SStack extends Stack<string> {}

const stack = new SStack(["q", "w"]);
stack.push("r");
console.log({stack:stack.value});

class Queue<T> {
  items: T[];
  constructor(elem: T[] = []) {
    this.items = elem;
  }

  enqueue(elem: T) {
    return this.items.push(elem);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  public get value(): T[] {
    return this.items;
  }
}

const queue = new Queue<number>();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();

console.log({ queue: queue.value });

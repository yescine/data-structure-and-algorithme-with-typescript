class QueueObject<T> {
  items:Object
  front:number
  rear:number

  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element:T) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  print() {
    console.log(this.items);
  }
}

const queueObj = new QueueObject<number>();
console.log(queueObj.isEmpty());
queueObj.enqueue(10);
queueObj.enqueue(20);
queueObj.enqueue(30);
console.log(queueObj.size());
queueObj.print();
console.log(queueObj.dequeue());
console.log(queueObj.peek());
console.log(queueObj.isEmpty());
queueObj.print();

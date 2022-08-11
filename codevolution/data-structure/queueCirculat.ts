class CircularQueue<T> {
  items:  T[];
  rear: number;
  front: number;
  currentLength: number;
  capacity: number;

  constructor(capacity:number) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  size() {
    return this.currentLength;
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queueCir = new CircularQueue<number>(5);
console.log(queueCir.isEmpty());
queueCir.enqueue(10);
queueCir.enqueue(20);
queueCir.enqueue(30);
queueCir.enqueue(40);
queueCir.enqueue(50);
console.log(queueCir.size());
queueCir.print();
console.log(queueCir.isFull());
console.log(queueCir.dequeue());
console.log(queueCir.peek());
queueCir.print();
queueCir.enqueue(60);
queueCir.print();
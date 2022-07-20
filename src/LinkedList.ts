class LLNode<T> {
  constructor(public data: T, public next: LLNode<T> = null) {}
}

class LinkedList<T> {
  public head: LLNode<T>;
  public tail: LLNode<T>;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value: T): void {
    if (this.head == null) {
      this.head = new LLNode<T>(value);
      this.tail = this.head;

      return;
    }

    this.tail.next = new LLNode<T>(value);
    this.tail = this.tail.next;
  }

  getLength(): number {
    let start = this.head;
    let length = 0;
    while (start != null) {
      start = start.next;
      length++;
    }
    return length;
  }

  print(): void {
    let start = this.head;
    let length = 0;
    let str = "";
    while (start != null) {
      str = str + start.data + " --> ";
      start = start.next;
    }
    str = str.slice(0, -4);
    console.log(str);
  }
}

const list = new LinkedList<number>();

list.add(5);
list.add(7);
list.add(9);
list.add(13);

const listLength = list.getLength();
console.log(listLength);
list.print();

import { Sorter } from './Sorter';

class Node<T> {
  next: Node<T> | null = null;

  constructor(public value: T) {}
}

export class LinkedList<T extends number | string> extends Sorter {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private size = 0;

  get length(): number {
    return this.size;
  }

  add(data: T): void {
    const node = new Node<T>(data);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.size++;
  }

  addList(list: T[]): void {
    for (const element of list) {
      this.add(element);
    }
  }

  at(index: number): Node<T> {
    if (this.size === 0) {
      throw new Error('List is empty.');
    }

    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds.');
    }

    if (index === this.size - 1) return this.tail!;

    let i = 0;
    let temp = this.head!;
    while (i < index) {
      temp = temp.next!;
      i++;
    }
    return temp;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (leftIndex < 0 || leftIndex >= this.length) {
      throw new Error('Left index out of bounds.');
    }
    if (rightIndex < 0 || rightIndex >= this.length) {
      throw new Error('Right index out of bounds.');
    }
    
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (this.size === 0) {
      throw new Error('List is empty.');
    }

    if (leftIndex < 0 || leftIndex >= this.size) {
      throw new Error('Left index out of bounds.');
    }
    if (rightIndex < 0 || rightIndex >= this.size) {
      throw new Error('Right index out of bounds.');
    }

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const temp = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = temp;
  }

  get list(): T[] {
    if (this.size === 0) {
      throw new Error('List is empty.');
    }

    let temp = this.head;
    const list: T[] = [];
    while (temp !== null) {
      list.push(temp.value);
      temp = temp.next;
    }

    return list;
  }
}

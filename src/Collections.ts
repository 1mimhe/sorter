import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (leftIndex < 0 || leftIndex >= this.length) {
      throw new Error('Left index out of bounds.');
    }
    if (rightIndex < 0 || rightIndex >= this.length) {
      throw new Error('Right index out of bounds.');
    }
    
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (leftIndex < 0 || leftIndex >= this.length) {
      throw new Error('Left index out of bounds.');
    }
    if (rightIndex < 0 || rightIndex >= this.length) {
      throw new Error('Right index out of bounds.');
    }

    [this.data[leftIndex], this.data[rightIndex]] = [
      this.data[rightIndex],
      this.data[leftIndex],
    ];
  }
}

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (leftIndex < 0 || leftIndex >= this.length) {
      throw new Error('Left index out of bounds.');
    }
    if (rightIndex < 0 || rightIndex >= this.length) {
      throw new Error('Right index out of bounds.');
    }

    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (leftIndex < 0 || leftIndex >= this.length) {
      throw new Error('Left index out of bounds.');
    }
    if (rightIndex < 0 || rightIndex >= this.length) {
      throw new Error('Right index out of bounds.');
    }
    
    const characters = this.data.split('');
    [characters[leftIndex], characters[rightIndex]] = [
      characters[rightIndex],
      characters[leftIndex],
    ];
    this.data = characters.join('');
  }
}

class Queue<T> {

  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  show(): T[] {
    return this.items
  }

}

export default Queue
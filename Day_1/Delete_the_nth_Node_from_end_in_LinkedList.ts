class NodeClass {
  data: number;
  next: NodeClass | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  private head: NodeClass | null;

  constructor() {
    this.head = null;
  }

  addLast(data: number): void {
    const newNode = new NodeClass(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  // Calculate the length of the linked list
  length(): number {
    let size = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  // Print the linked list
  print(): void {
    let currentNode = this.head;
    const elements: string[] = [];
    while (currentNode !== null) {
      elements.push(currentNode.data.toString());
      currentNode = currentNode.next;
    }
    console.log(elements.join(" -> ") + " -> null");
  }

  // Delete the nth node from the end of the list
  deleteNthFromEnd(n: number): number | null {
    const length = this.length();

    // Check if the position is valid
    if (n > length || n <= 0) {
      console.error("Invalid position.");
      return null;
    }

    // If the node to be deleted is the head
    const targetIndex = length - n;
    if (targetIndex === 0) {
      const deletedData = this.head!.data;
      this.head = this.head!.next;
      return deletedData;
    }

    // Traverse to the node just before the target node
    let currentNode = this.head;
    let counter = 1;
    while (counter < targetIndex && currentNode !== null) {
      currentNode = currentNode.next;
      counter++;
    }

    if (currentNode && currentNode.next) {
      const deletedData = currentNode.next.data;
      currentNode.next = currentNode.next.next;
      return deletedData;
    }

    return null;
  }
}

const main = () => {
  const list = new LinkedList();

  //adding nodes to the list
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
  list.addLast(4);
  list.addLast(5);
  list.addLast(6);
  list.addLast(7);

  console.log("Original Linked List:");
  list.print();

  //delete the nth node from the end
  const n = 3;
  const deletedData = list.deleteNthFromEnd(n);
  if (deletedData !== null) {
    console.log(
      `${n}th node from the end (${deletedData}) deleted. Updated Linked List:`
    );
    list.print();
  } else {
    console.log("Deletion failed.");
  }
};

/**
 * Improvements in TypeScript Version:
 * - Added validation for `n` to ensure it is within a valid range.
 * - Handled edge case when the head node itself needs to be deleted.
 * - Made the code safer by checking for `null` values during traversal.
 */

main();

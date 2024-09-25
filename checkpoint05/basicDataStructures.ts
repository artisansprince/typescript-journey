// Basic Data Structures in TypeScript

// 1. Array
const numberArray: number[] = [1, 2, 3, 4, 5];
console.log("Array:", numberArray);

// 2. Linked List
// Change Node to ListNode to avoid name collision
class ListNode {
    value: number;
    next: ListNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

// LinkedList class to manage the linked list
class LinkedList {
    head: ListNode | null = null;

    // Add a node at the end of the linked list
    append(value: number) {
        const newNode = new ListNode(value); // Use ListNode here
        if (!this.head) {
            this.head = newNode; // If list is empty, make newNode the head
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next; // Traverse to the end of the list
        }
        current.next = newNode; // Link the new node at the end
    }

    // Display all nodes in the linked list
    display() {
        let current = this.head;
        const values: number[] = [];
        while (current) {
            values.push(current.value); // Collect node values
            current = current.next; // Move to the next node
        }
        console.log("Linked List:", values);
    }
}

// Example usage of Linked List
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.display();

// 3. Stack
class Stack {
    private items: number[] = [];

    // Push an item onto the stack
    push(item: number) {
        this.items.push(item);
    }

    // Pop an item off the stack
    pop(): number | undefined {
        return this.items.pop();
    }

    // Display the stack items
    display() {
        console.log("Stack:", this.items);
    }
}

// Example usage of Stack
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display();
console.log("Popped from Stack:", stack.pop());
stack.display();

// 4. Queue
class Queue {
    private items: number[] = [];

    // Enqueue an item into the queue
    enqueue(item: number) {
        this.items.push(item);
    }

    // Dequeue an item from the queue
    dequeue(): number | undefined {
        return this.items.shift();
    }

    // Display the queue items
    display() {
        console.log("Queue:", this.items);
    }
}

// Example usage of Queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();
console.log("Dequeued from Queue:", queue.dequeue());
queue.display();

const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        // We are pushing the val in the nodes

        const node = new SinglyLinkedNode(val);

        if (!this.tail) {
            this.tail = node;
            this.head = this.tail;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;

        return this.length;
        // Write your hypothesis on the time complexity of this method here
        // O(1);
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        if (!this.head) return null;

        let node = this.head;

        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return node.value;
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}

// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(1);

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const node = new DoublyLinkedNode(val);

        if (!this.tail) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        // Write your hypothesis on the time complexity of this method here
        //O(1);
    }

    removeFromHead() {
        // Remove node at head
        // Make sure to return the old node

        if (this.head === null) return undefined;

        let node = this.head;

        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.head.next.prev = null;
            this.head = this.head.next;
        }

        this.length--;

        return node.value;
        // Write your hypothesis on the time complexity of this method her
        // O(1);
    }

    removeFromTail() {
        // Remove node at tail

        if (this.tail === null) return undefined;

        let node = this.tail;

        if (!this.tail.prev) {
            this.head = null;
            this.tail = null;
        } else {

            this.tail = this.tail.prev;
            // this.tail.prev = null;
            this.tail.next = null
            // We may need to set this.tail.next to null
        }

        this.length--;

        return node.value;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    peekAtHead() {
        // Return value of head node
        if (this.head === null) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    peekAtTail() {
        // Return value of tail node
        if (this.tail === null) return undefined;
        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}

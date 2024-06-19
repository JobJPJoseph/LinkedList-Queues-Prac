// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        // no previous
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        // no tail
        // no length
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // We don't have length

        // if (!this.head) return 0;

        // let current = this.head;
        // let count = 0;

        // while(current.next) {
        //     current = current.next;
        //     count++;
        // }

        // return count;

        // Implement in O(n) and in O(1) time complexity
        // using length

        return this.length;

    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // We need to iterate and collect the values from each node.

        let sums = 0;

        let current = this.head;

        while(current) {
            sums += current.value;
            current = current.next;
        }

        return sums;
        // Write your hypothesis on the time complexity of this method here
        // O(n);
    }

    averageValue() {
        // Returns the average value of all the nodes

        let sums = 0;

        let current = this.head;

        while(current) {
            sums += current.value;
            current = current.next;
        }

        return sums / this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}

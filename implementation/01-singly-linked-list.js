// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const node = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this
        // Write your hypothesis on the time complexity of this method here
        // Each line are all constants making it O(1) in Time.
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
            // The Time complexity of this function is O(n) because when node is true
            // we need to iterate down the string of nodes until we hit null

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;

            while (curr.next) {
                curr = curr.next;
            }

            curr.next = newNode;
            curr = newNode;
        }

        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head

        if (!this.head) return undefined;

        let node = this.head;

        if (!this.head.next) {
            this.head = null;

        } else {
            this.head = this.head.next;
        }

        this.length--;
        return node;
        // Write your hypothesis on the time complexity of this method here
        // The time complexity here is O(1)
    }

    removeFromTail() {
        // Remove node at tail

        if (!this.head) return undefined;

        let node = this.head;

        if (node.next === null) { // If there is one node left
            // this.tail = null;
            this.head = null;
        } else { // more than one node left

            while(node.next) {

                if (node.next.next === null) {

                    // this.tail = node.next;
                    let curr = node.next;
                    node.next = null;
                    this.length--;
                    return curr;
                }

                node = node.next;
            }
        }

        this.length--;
        // Write your hypothesis on the time complexity of this method here

        // The time complexity: O(n);
    }

    peekAtHead() {
        // Return value of head node
        if (this.head !== null) return this.head.value;
        return undefined;
        // Write your hypothesis on the time complexity of this method here
        // Time complexity: O(1);
    }

    print() {
        // Print out the linked list
        let node = this.head;

        while(node) {
            console.log(`${node.value}`);
            node = node.next;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}

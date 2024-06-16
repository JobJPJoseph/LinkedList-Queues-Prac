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

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(data);

        if (!this.head) {
            this.head = newNode;
            // return head;
        } else {
            let curr = this.head;

            while (curr.next) {
                curr = curr.next;
            }

            curr.next = newNode;
            curr = newNode;

            // return head;
        }


        length++;
        return;
    }

    removeFromHead() {
        // Remove node at head

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}

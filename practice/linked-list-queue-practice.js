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
        // O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        let current = this.head;

        while(n) {
            current = current.next;
            n--;
        }

        return current;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // single linked list
            // 3 => 1.5 => 2
            // 6 => 3 => 3
            // We can probably do Math.round(this.length / 2);

        let mid = Math.round(this.length / 2);

        return this.findNthNode(mid - 1);
        // Write your hypothesis on the time complexity of this method here
        // O(n);
    }

    reverse() {
        // Returns a new reversed version of the linked list
        // We don't have to iterate thru it twice to reverse it.

        const nodes = new SinglyLinkedList();

        while(nodes.length < this.length) {
            // get the different of length
            // (0 - 6) (1 - 5) (2 - 6)
            // We need to call findNthNode(index)

            nodes.addToTail( (this.findNthNode((this.length - 1) - nodes.length)).value );
        }

        return nodes;
        // Write your hypothesis on the time complexity of this method here
        // O(n^3)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        //

        // We need to make sure we keep track of prev node. Prev by default is null
        let prev = null;
        let next = null;
        let current = this.head;

        while (current) {
            next = current.next;

            current.next = prev;

            prev = current;

            current = next;
        }

        this.head = prev;

        // Explain:
            // Since we are only have next property we need to re-create the Doubly class
            // We are going to have three pointers called prev, current, next
                // next = null, prev = null, current = this.head;
            // This will all be done under a while loop.
                // We will test if current is valid.
                    // if true:
                        // We need to grab the current next which is 2 and have next point ot it.
                            // Note: On the first iteration current and this.head are the same but after are not
                        // Next we need to disconnect the current node .next 1 from 2 and set it to null;
                            // Note: next is still pointing to 2 so the value is not lost because it os a piece of a linked list.
                        // Next we need to re-assign prev which is null to point to current which is 1 or this.head
                            // Note: We don't lose the original null bc current.next now is null
                        // Next we need to move the current pointer which 1 to point to next which is 2. This makes current now 2

                    // if false:
                        // Means that We reached the last node. All we need to do is move the this.head.prev.

        // Write your hypothesis on the time complexity of this method here
        //O(n)
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
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        let mid = Math.round(this.length / 2) - 1;

        let current = this.head;

        while(mid) {
            current = current.next;
            mid--;
        }

        return current;
        // Write your hypothesis on the time complexity of this method here
        // O(n)

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

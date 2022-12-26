// project linked lists

// create a linked list class which will represent the full list

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    // add a node to the end of the list
    append(value) {
        const newNode = { value: value, next: null };
    
        if (this.tail) {
        this.tail.next = newNode;
        }
    
        this.tail = newNode;
    
        if (!this.head) {
        this.head = newNode;
        }
    }
    
    // add a node to the beginning of the list
    prepend(value) {
        const newNode = { value: value, next: this.head };
        this.head = newNode;
    
        if (!this.tail) {
        this.tail = newNode;
        }
    }
    
    size() {
        let counter = 0;
        let currentNode = this.head;

        while (currentNode) {
            counter++;
            currentNode = currentNode.next;
        }

        return counter;
    }

    at(index) {
        let counter = 0;
        let currentNode = this.head;

        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }

            counter++;
            currentNode = currentNode.next;
        }

        return null;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        const node = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;

            return node;
        }

    }

    contains(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }

            currentNode = currentNode.next;
        }

        return null;
    }



    // find a node in the list
    find(value) {
        if (!this.head) {
        return null;
        }
    
        let currentNode = this.head;
    
        while (currentNode) {
        if (currentNode.value === value) {
            return currentNode;
        }
    
        currentNode = currentNode.next;
        }
    
        return null;
    }

    toString() {
        let currentNode = this.head;
        let string = '';

        while (currentNode) {
            string += currentNode.value + ' -> ';
            currentNode = currentNode.next;
        }

        return string + 'null';
    }

    // insert a node after another node in the list

    insertAt(value, index) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }

        if (index === 0) {
            this.head = new Node(value, this.head);
            return;
        }

        const previous = this.at(index - 1) || this.tail;
        const node = new Node(value, previous.next);
        previous.next = node;
    }

    
  removeAt(index) {
    if (!this.head) {
        return;
    }

    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    const previous = this.at(index - 1);
    if (!previous || !previous.next) {
        return;
    }
    previous.next = previous.next.next;
    }    

// convert the list into an array
    toArray() {
        const elements = [];
    
        let currentNode = this.head;
    
        while (currentNode) {
        elements.push(currentNode);
        currentNode = currentNode.next;
        }
    
        return elements;
    }
    }

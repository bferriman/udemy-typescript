import { Sortable } from "./Sorter";

class Node {
    next: Node | null = null;

    constructor(public data: number) {}
}

export class LinkedList implements Sortable {
    head: Node | null = null;

    add(data: number): void {
        const newNode = new Node(data);
        if (!this.head) {  //if this.head is null
            this.head = newNode;
            return;
        }
        let node = this.head;
        while(node.next) {  //if node.next != null
            node = node.next;
        }
        node.next = newNode;
    }

    get length(): number {
        if (!this.head) {  //if this.head is null
            return 0;
        }
        let length = 1;
        let node = this.head;
        while(node.next) {  //if node.next != null
            node = node.next;
            length++;
        }
        return length;
    }

    at(index: number): Node {
        if (!this.head) {  //if this.head is null
            throw new Error("Index out of bounds");
        }
        let currentIndex = 0;
        let node: Node | null = this.head;
        while (node) {
            if (currentIndex === index) {
                return node;
            }
            node = node.next;
            currentIndex++;
        }
        throw new Error("Index out of bounds");
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const leftValue = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftValue;
    }

    print(): void {
        if (!this.head) {
            return;
        }
        let node: Node | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
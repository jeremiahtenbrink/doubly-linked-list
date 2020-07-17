"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
var LinkedListNode_1 = require("./LinkedListNode");
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
    }
    /**
     * Adds to the head of the LL
     * @param value
     */
    DoublyLinkedList.prototype.addToHead = function (value) {
        var node = new LinkedListNode_1.LinkedListNode(value);
        node.prev = this.head;
        this.head = node;
    };
    /**
     * Adds to the tail of the LL
     * @param value
     */
    DoublyLinkedList.prototype.addToTail = function (value) {
        var node = new LinkedListNode_1.LinkedListNode(value);
        node.next = this.tail;
        if (this.tail) {
            this.tail.prev = node;
        }
        this.tail = node;
    };
    /**
     * Returns the value of the head node. False if doesn't exist.
     */
    DoublyLinkedList.prototype.removeFromHead = function () {
        // check for head
        if (!this.head) {
            return false;
        }
        else {
            //get value of head
            var value = this.head.value;
            // check for next in line
            if (this.head.prev) {
                // set next in line to the head
                this.head = this.head.prev;
                // remove ref to current head
                this.head.next = null;
            }
            else {
                //if there is nothing behind the head
                this.head = null;
                this.tail = null;
            }
            // return value of head
            return value;
        }
    };
    /**
     * Returns the value of the tail node. False if doesn't exist.
     */
    DoublyLinkedList.prototype.removeFromTail = function () {
        if (!this.tail) {
            return false;
        }
        var value = this.tail.value;
        //check for stuff in front of tail
        if (this.tail.next) {
            // set next in line to the new tail
            var oldTail = this.tail;
            this.tail = oldTail.next;
            // remove link to old tail
            this.tail.prev = null;
            oldTail.next = null;
        }
        else {
            // there is no next
            this.tail = null;
            this.head = null;
        }
        return value;
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
//# sourceMappingURL=DoublyLinkedList.js.map
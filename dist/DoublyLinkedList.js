"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
var LinkedListNode_1 = require("./LinkedListNode");
var DoublyLinkedList = /** @class */ (function () {
    /**
     * @type {function} constructor
     * @param {any} [value = null]  initialize with a value
     */
    function DoublyLinkedList(value) {
        if (value === void 0) { value = null; }
        this.head = null;
        this.tail = null;
        this.size = 0;
        if (value) {
            var node = new LinkedListNode_1.LinkedListNode(value);
            this.head = node;
            this.tail = node;
        }
    }
    /**
     * @type {function} addToHead   Adds to the head of the LL
     * @param value
     */
    DoublyLinkedList.prototype.addToHead = function (value) {
        var node = new LinkedListNode_1.LinkedListNode(value);
        this.size += 1;
        /**
         * check if there is a tail node
         */
        if (this.tail === null) {
            /**
             * if no tail node then the list is empty
             * so make the head and the tail the new node
             */
            this.head = node;
            this.tail = node;
        }
        else {
            /**
             * the list is not empty
             */
            node.setPrev(this.head);
            this.head.setNext(node);
            this.head = node;
        }
    };
    /**
     * @type {function} addToTail  Adds to the tail of the LL
     * @param value
     */
    DoublyLinkedList.prototype.addToTail = function (value) {
        var node = new LinkedListNode_1.LinkedListNode(value);
        this.size += 1;
        // check if their is a head node
        if (this.head === null) {
            // list is empty
            this.head = node;
            this.tail = node;
        }
        else {
            // list is not empty
            node.setNext(this.tail);
            this.tail.setPrev(node);
            this.tail = node;
        }
    };
    /**
     * @type {function} removeFromHead    Returns the value of the head node.
     * Null if doesn't exist.
     *
     * @return {null | any} value of the node at the head
     */
    DoublyLinkedList.prototype.removeFromHead = function () {
        // check for head
        if (!this.head) {
            return null;
        }
        else {
            //get value of head
            var value = this.head.value;
            this.size -= 1;
            // check for next in line
            if (this.head.prev) {
                // set next in line to the head
                this.head = this.head.getPrev();
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
     * @type {function} removeFromTail  Returns the value of the tail node.
     * False if doesn't exist.
     *
     * @return {null | any} value of the node at the tail
     */
    DoublyLinkedList.prototype.removeFromTail = function () {
        if (!this.tail) {
            return null;
        }
        var value = this.tail.value;
        this.size -= 1;
        //check for stuff in front of tail
        if (this.tail.next) {
            // set next in line to the new tail
            var oldTail = this.tail;
            this.tail = oldTail.getNext();
            // remove link to old tail
            this.tail.prev = null;
        }
        else {
            // there is no next
            this.tail = null;
            this.head = null;
        }
        return value;
    };
    /**
     * @type {function} getSize   returns the size of the doubly linked list.
     */
    DoublyLinkedList.prototype.getSize = function () {
        return this.size;
    };
    /**
     * @type {function} forEach calls a callback function for each value added
     * to the DLL
     * @param {Function} cb call back function
     * @return {Promise} returns a promise that gets resolved once finished or
     * rejects if there is an error
     */
    DoublyLinkedList.prototype.forEach = function (cb) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.size === 0) {
                    resolve({
                        complete: true,
                        error: new Error("There are no items in the DLL")
                    });
                }
                var node = _this.head;
                while (node) {
                    cb(node.value);
                    node = node.prev;
                }
                return resolve({ complete: true, error: null });
            }
            catch (e) {
                reject({ complete: false, error: e });
            }
        });
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
//# sourceMappingURL=DoublyLinkedList.js.map
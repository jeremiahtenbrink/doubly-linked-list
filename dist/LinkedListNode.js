"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListNode = void 0;
/**
 * Linked List Node
 *
 */
var LinkedListNode = /** @class */ (function () {
    /**
     * @type {function} constructor   Takes a value and creates a new node.
     * @param {any} value
     */
    function LinkedListNode(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
    /**
     * @type {function} setNext   sets the node next pointer to the new node
     * @param {LinkedListNode} node
     * @throws {Error} error      throws error if node is not a valid node
     */
    LinkedListNode.prototype.setNext = function (node) {
        this.checkNode(node);
        this.next = node;
    };
    /**
     * @type {function} getNext   Gets the next node
     *
     */
    LinkedListNode.prototype.getNext = function () {
        return this.next;
    };
    /**
     * @type {function} setPrev   sets the nodes prev node to node passed in
     * @throws {Error} error      throws error if node is not a valid node
     * @param {LinkedListNode} node
     *
     */
    LinkedListNode.prototype.setPrev = function (node) {
        this.checkNode(node);
        this.prev = node;
    };
    /**
     * @type {function} getPrev    Gets the prev node and returns it.
     */
    LinkedListNode.prototype.getPrev = function () {
        return this.prev;
    };
    /**
     * @type {function} checkNode   returns true if the node is a valid node
     * @throws {Error} error      throws error if node is not a valid node
     * @param node
     */
    LinkedListNode.prototype.checkNode = function (node) {
        if (typeof node === "object" && node.value) {
            return true;
        }
        throw new Error("node must be of type object and include property value");
    };
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;
//# sourceMappingURL=LinkedListNode.js.map
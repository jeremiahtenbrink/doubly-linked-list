/**
 * Linked List Node
 *
 */
export declare class LinkedListNode {
    next: LinkedListNode | null;
    prev: LinkedListNode | null;
    value: any;
    /**
     * @type {function} constructor   Takes a value and creates a new node.
     * @param {any} value
     */
    constructor(value: any);
    /**
     * @type {function} setNext   sets the node next pointer to the new node
     * @param {LinkedListNode} node
     * @throws {Error} error      throws error if node is not a valid node
     */
    setNext(node: LinkedListNode): void;
    /**
     * @type {function} getNext   Gets the next node
     *
     */
    getNext(): null | LinkedListNode;
    /**
     * @type {function} setPrev   sets the nodes prev node to node passed in
     * @param {LinkedListNode} node
     * @throws {Error} error      throws error if node is not a valid node
     */
    setPrev(node: LinkedListNode): void;
    /**
     * @type {function} getPrev    Gets the prev node and returns it.
     */
    getPrev(): null | LinkedListNode;
}

/**
 * Linked List Node
 *
 */
export declare class LinkedListNode<T> {
    next: LinkedListNode<T> | null;
    prev: LinkedListNode<T> | null;
    value: T;
    /**
     * @type {function} constructor   Takes a value and creates a new node.
     * @param {any} value
     */
    constructor(value: T);
    /**
     * @type {function} setNext   sets the node next pointer to the new node
     * @param {LinkedListNode} node
     * @throws {Error} error      throws error if node is not a valid node
     */
    setNext(node: LinkedListNode<T>): void;
    /**
     * @type {function} getNext   Gets the next node
     *
     */
    getNext(): null | LinkedListNode<T>;
    /**
     * @type {function} setPrev   sets the nodes prev node to node passed in
     * @throws {Error} error      throws error if node is not a valid node
     * @param {LinkedListNode} node
     *
     */
    setPrev(node: LinkedListNode<T>): void;
    /**
     * @type {function} getPrev    Gets the prev node and returns it.
     */
    getPrev(): null | LinkedListNode<T>;
    /**
     * @type {function} checkNode   returns true if the node is a valid node
     * @throws {Error} error      throws error if node is not a valid node
     * @param node
     */
    private checkNode;
}

export declare class DoublyLinkedList {
    private head;
    private tail;
    private size;
    /**
     * @type {function} constructor
     * @param {any} [value = null]  initialize with a value
     */
    constructor(value?: any);
    /**
     * @type {function} addToHead   Adds to the head of the LL
     * @param value
     */
    addToHead(value: any): void;
    /**
     * @type {function} addToTail  Adds to the tail of the LL
     * @param value
     */
    addToTail(value: any): void;
    /**
     * @type {function} removeFromHead    Returns the value of the head node.
     * Null if doesn't exist.
     *
     * @return {null | any} value of the node at the head
     */
    removeFromHead(): null | any;
    /**
     * @type {function} removeFromTail  Returns the value of the tail node.
     * False if doesn't exist.
     *
     * @return {null | any} value of the node at the tail
     */
    removeFromTail(): null | any;
    /**
     * @type {function} getSize   returns the size of the doubly linked list.
     */
    getSize(): number;
    /**
     * @type {function} forEach calls a callback function for each value added
     * to the DLL
     * @param {Function} cb call back function
     * @return {Promise} returns a promise that gets resolved once finished or
     * rejects if there is an error
     */
    forEach(cb: (item: any) => {}): Promise<IterationComplete>;
}
interface IterationComplete {
    /**
     * @type {boolean} complete Indicates if iteration over the list is complete
     */
    complete: boolean;
    /**
     * @type {Error | null} error if a error occurred while iterating over the
     * list
     */
    error: Error | null;
}
export {};

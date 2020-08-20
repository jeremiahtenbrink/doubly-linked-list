export declare class DoublyLinkedList {
    private head;
    private tail;
    private size;
    /**
     * Call to create the DLL and to optionally pass in a item to be added to
     * the DLL head.
     *
     * @type {function} constructor
     * @param {any} [value = null]  initialize with a value
     */
    constructor(value?: any);
    /**
     *
     * Adds to the head of the DLL
     *
     * @type {function} addToHead
     * @param value
     */
    addToHead(value: any): void;
    /**
     * Adds to the tail of the DLL
     *
     * @type {function} addToTail
     * @param value
     */
    addToTail(value: any): void;
    /**
     * Returns the value of the head node.
     * Null if doesn't exist.
     *
     * @type {function} removeFromHead
     *
     * @return {null | any} value of the node at the head
     */
    removeFromHead(): null | any;
    /**
     * Returns the value of the tail node.
     * False if doesn't exist.
     *
     * @type {function} removeFromTail
     *
     * @return {null | any} value of the node at the tail
     */
    removeFromTail(): null | any;
    /**
     *
     * Returns the size of the DLL
     *
     * @type {function} getSize   returns the size of the doubly linked list.
     */
    getSize(): number;
    /**
     *
     * Call this function when you want to iterate through the entire list of
     * items.
     *
     * @type {function} forEach calls a callback function for each value added
     * to the DLL
     * @throws {Error} if this DLL is empty
     * @param {function} cb call back function
     *
     */
    forEach(cb: (item: any) => {}): Promise<IterationComplete>;
    /**
     *
     * Call this function to iterate through the list of items in reverse.
     *
     * @type {function} forEachReverse
     * @throws {Error} if this DLL is empty.
     * @param {function} cb call back function
     *
     */
    forEachReverse(cb: (item: any) => {}): Promise<IterationComplete>;
    /**
     *
     * Call this function when you want to iterate through the items in the
     * linked list but don't want to iterate through all of them.
     *
     * Return true in the callback to stop this function from continuing
     * to iterate through the items.
     *
     * @type {function} forSome
     * @throws {Error} if this DLL is empty.
     * @param {function} cb callback function
     *
     */
    forSome(cb: (item: any) => {}): Promise<IterationComplete>;
}
/**
 * Object returned indicating if ther was an error and if the itteration is
 * complete
 * @type {object} IterationComplete
 */
declare type IterationComplete = {
    /**
     * Indicates if iteration over the list is complete
     * @type {boolean} complete
     */
    complete: boolean;
    /**
     * Null if iteration complete with no errors or the error that occurred if
     * one occurred.
     * @type {Error | null} error
     */
    error: Error | null;
};
export {};

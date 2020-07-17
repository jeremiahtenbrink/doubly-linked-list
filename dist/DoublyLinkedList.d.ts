export declare class DoublyLinkedList {
    private head;
    private tail;
    constructor();
    /**
     * Adds to the head of the LL
     * @param value
     */
    addToHead(value: any): void;
    /**
     * Adds to the tail of the LL
     * @param value
     */
    addToTail(value: any): void;
    /**
     * Returns the value of the head node. False if doesn't exist.
     */
    removeFromHead(): false | any;
    /**
     * Returns the value of the tail node. False if doesn't exist.
     */
    removeFromTail(): false | any;
}

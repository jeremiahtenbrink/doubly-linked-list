/**
 * Linked List Node
 *
 */
export class LinkedListNode {
  public next: LinkedListNode | null = null;
  public prev: LinkedListNode | null = null;
  public value: any;
  
  /**
   * @type {function} constructor   Takes a value and creates a new node.
   * @param {any} value
   */
  constructor( value: any ) {
    
    this.value = value;
  }
  
  /**
   * @type {function} setNext   sets the node next pointer to the new node
   * @param {LinkedListNode} node
   * @throws {Error} error      throws error if node is not a valid node
   */
  setNext( node: LinkedListNode ): void {
    this.checkNode( node )
    this.next = node;
  }
  
  /**
   * @type {function} getNext   Gets the next node
   *
   */
  getNext(): null | LinkedListNode {
    return this.next;
  }
  
  /**
   * @type {function} setPrev   sets the nodes prev node to node passed in
   * @throws {Error} error      throws error if node is not a valid node
   * @param {LinkedListNode} node
   *
   */
  setPrev( node: LinkedListNode ): void {
    this.checkNode( node );
    this.prev = node;
  }
  
  /**
   * @type {function} getPrev    Gets the prev node and returns it.
   */
  getPrev(): null | LinkedListNode {
    return this.prev;
  }
  
  /**
   * @type {function} checkNode   returns true if the node is a valid node
   * @throws {Error} error      throws error if node is not a valid node
   * @param node
   */
  private checkNode( node: LinkedListNode ): boolean {
    if ( typeof node === "object" && node.value ) {
      return true
    }
    throw new Error( "node must be of type object and include property value" )
  }
}

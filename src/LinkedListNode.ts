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
  setNext(node: LinkedListNode): void {
    if(typeof  node === "object" && node.value){
      this.next = node
      return;
    }
    throw new Error("node must be of type object and include property value")
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
   * @param {LinkedListNode} node
   * @throws {Error} error      throws error if node is not a valid node
   */
  setPrev(node: LinkedListNode): void {
    if(typeof  node === "object" && node.value){
      this.prev = node
      return;
    }
    throw new Error("node must be of type object and include property value")
  }
  
  /**
   * @type {function} getPrev    Gets the prev node and returns it.
   */
  getPrev(): null | LinkedListNode {
    return  this.prev;
  }
}

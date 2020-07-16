import { LinkedListNode } from "./LinkedListNode";


export class DoublyLinkedList extends Object {
  
  private head: LinkedListNode | null = null;
  private tail: LinkedListNode | null = null;
  
  constructor() {
    super();
  }
  
  /**
   * Adds to the head of the LL
   * @param value
   */
  addToHead( value: any ): void {
    const node = new LinkedListNode( value )
    node.prev = this.head;
    this.head = node;
  }
  
  /**
   * Adds to the tail of the LL
   * @param value
   */
  addToTail( value: any ): void {
    const node = new LinkedListNode( value );
    node.next = this.tail;
    if ( this.tail ) {
      this.tail.prev = node;
    }
    this.tail = node;
  }
  
  /**
   * Returns the value of the head node. False if doesn't exist.
   */
  removeFromHead(): false | any {
    // check for head
    if ( !this.head ) {
      return false;
    } else {
      //get value of head
      const value = this.head.value;
      
      // check for next in line
      if ( this.head.prev ) {
        
        // set next in line to the head
        this.head = this.head.prev;
        // remove ref to current head
        this.head.next = null;
      } else {
        
        //if there is nothing behind the head
        this.head = null;
        this.tail = null;
      }
      
      // return value of head
      return value;
    }
  }
  
  /**
   * Returns the value of the tail node. False if doesn't exist.
   */
  removeFromTail(): false | any {
    if ( !this.tail ) {
      return false;
    }
    
    const value = this.tail.value;
    //check for stuff in front of tail
    if ( this.tail.next ) {
      // set next in line to the new tail
      const oldTail = this.tail;
      this.tail = oldTail.next;
      // remove link to old tail
      this.tail.prev = null
      oldTail.next = null;
    } else {
      // there is no next
      this.tail = null;
      this.head = null;
    }
    
    return value;
  }
  
}

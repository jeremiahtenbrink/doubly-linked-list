import { LinkedListNode } from "./LinkedListNode";


export class DoublyLinkedList {
  
  private head: LinkedListNode<any> | null = null;
  private tail: LinkedListNode<any> | null = null;
  private size: number = 0;
  
  /**
   * @type {function} constructor
   * @param {any} [value = null]  initialize with a value
   */
  constructor( value: any = null ) {
    if ( value ) {
      const node = new LinkedListNode( value )
      this.head = node;
      this.tail = node;
    }
  }
  
  
  /**
   * @type {function} addToHead   Adds to the head of the LL
   * @param value
   */
  addToHead( value: any ): void {
    const node = new LinkedListNode( value )
    this.size += 1;
    /**
     * check if there is a tail node
     */
    if ( this.tail === null ) {
      
      /**
       * if no tail node then the list is empty
       * so make the head and the tail the new node
       */
      this.head = node;
      this.tail = node;
    } else {
      
      /**
       * the list is not empty
       */
      node.setPrev( this.head )
      this.head.setNext( node )
      this.head = node;
    }
  }
  
  /**
   * @type {function} addToTail  Adds to the tail of the LL
   * @param value
   */
  addToTail( value: any ): void {
    const node = new LinkedListNode( value );
    this.size += 1;
    // check if their is a head node
    if ( this.head === null ) {
      // list is empty
      this.head = node;
      this.tail = node;
    } else {
      // list is not empty
      node.setNext( this.tail )
      this.tail.setPrev( node );
      this.tail = node;
    }
    
  }
  
  /**
   * @type {function} removeFromHead    Returns the value of the head node.
   * Null if doesn't exist.
   *
   * @return {null | any} value of the node at the head
   */
  removeFromHead(): null | any {
    // check for head
    if ( !this.head ) {
      return null;
    } else {
      //get value of head
      const value = this.head.value;
      this.size -= 1;
      // check for next in line
      if ( this.head.prev ) {
        
        // set next in line to the head
        this.head = this.head.getPrev();
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
   * @type {function} removeFromTail  Returns the value of the tail node.
   * False if doesn't exist.
   *
   * @return {null | any} value of the node at the tail
   */
  removeFromTail(): null | any {
    if ( !this.tail ) {
      return null;
    }
    
    const value = this.tail.value;
    this.size -= 1;
    //check for stuff in front of tail
    if ( this.tail.next ) {
      
      // set next in line to the new tail
      const oldTail = this.tail;
      this.tail = oldTail.getNext();
      
      // remove link to old tail
      this.tail.prev = null
      
    } else {
      // there is no next
      this.tail = null;
      this.head = null;
    }
    
    return value;
  }
  
  /**
   * @type {function} getSize   returns the size of the doubly linked list.
   */
  getSize(): number {
    return this.size;
  }
  
  /**
   * @type {function} forEach calls a callback function for each value added
   * to the DLL
   * @param {Function} cb call back function
   * @return {Promise} returns a promise that gets resolved once finished or
   * rejects if there is an error
   */
  forEach( cb: ( item: any ) => {} ): Promise<IterationComplete> {
    return new Promise( ( resolve, reject ) => {
      
      try {
        
        if ( this.size === 0 ) {
          resolve( {
            complete: true,
            error: new Error( "There are no items in the DLL" )
          } )
        }
        
        let node = this.head;
        while ( node ) {
          cb( node.value );
          node = node.prev;
        }
        
        return resolve( { complete: true, error: null } )
        
      } catch ( e ) {
        reject( { complete: false, error: e } )
      }
      
    } )
  }
}


interface IterationComplete {
  /**
   * @type {boolean} complete Indicates if iteration over the list is complete
   */
  complete: boolean,
  
  /**
   * @type {Error | null} error if a error occurred while iterating over the
   * list
   */
  error: Error | null
}

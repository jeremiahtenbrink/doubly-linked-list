import { LinkedListNode } from "./LinkedListNode";


export class DoublyLinkedList {
  
  private head: LinkedListNode<any> | null = null;
  private tail: LinkedListNode<any> | null = null;
  private size: number = 0;
  
  /**
   * Call to create the DLL and to optionally pass in a item to be added to
   * the DLL head.
   *
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
   *
   * Adds to the head of the DLL
   *
   * @type {function} addToHead
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
   * Adds to the tail of the DLL
   *
   * @type {function} addToTail
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
   * Returns the value of the head node.
   * Null if doesn't exist.
   *
   * @type {function} removeFromHead
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
   * Returns the value of the tail node.
   * False if doesn't exist.
   *
   * @type {function} removeFromTail
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
   *
   * Returns the size of the DLL
   *
   * @type {function} getSize   returns the size of the doubly linked list.
   */
  getSize(): number {
    return this.size;
  }
  
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
  forEach( cb: ( item: any ) => {} ): Promise<IterationComplete> {
    return new Promise( ( resolve ) => {
      
      if ( this.size === 0 ) {
        throw new Error( "There are no items in this DLL" )
      }
      
      let node = this.head;
      while ( node ) {
        cb( node.value );
        node = node.prev;
      }
      return resolve( { complete: true, error: null } )
      
      
    } )
  }
  
  /**
   *
   * Call this function to iterate through the list of items in reverse.
   *
   * @type {function} forEachReverse
   * @throws {Error} if this DLL is empty.
   * @param {function} cb call back function
   *
   */
  forEachReverse( cb: ( item: any ) => {} ): Promise<IterationComplete> {
    return new Promise( ( resolve ) => {
      
      if ( this.size === 0 ) {
        throw new Error( "There are no items in this DLL" )
      }
      
      let node = this.tail;
      while ( node ) {
        cb( node.value )
        node = node.next;
      }
      
      return resolve( {
        complete: true,
        error: null
      } )
      
      
    } )
  }
  
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
  forSome( cb: ( item ) => {} ): Promise<IterationComplete> {
    return new Promise( ( resolve ) => {
      
      if ( this.size === 0 ) {
        throw new Error( "There are no items in this DLL" )
      } else {
        
        let node = this.head;
        while ( node ) {
          let value = cb( node.value );
          if ( value === true ) {
            resolve( { complete: false, error: null } )
            node = null
          } else {
            node = node.prev;
          }
        }
        
        resolve( { complete: true, error: null } )
        
      }
    } )
  }
}

/**
 * Object returned indicating if ther was an error and if the itteration is
 * complete
 * @type {object} IterationComplete
 */
type IterationComplete = {
  /**
   * Indicates if iteration over the list is complete
   * @type {boolean} complete
   */
  complete: boolean,
  
  /**
   * Null if iteration complete with no errors or the error that occurred if
   * one occurred.
   * @type {Error | null} error
   */
  error: Error | null
}

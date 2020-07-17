import { DoublyLinkedList } from "../DoublyLinkedList";
import { LinkedListNode } from "../LinkedListNode";

describe( 'tests the DoubllyLinkedList class', () => {
  
  // new DoublyLinkedList for testing
  let dll = null
  beforeEach( () => {
    
    // assign a new DoublyLinkedList before each test
    dll = new DoublyLinkedList()
  } )
  
  it( "ensure the doubly linked list is created", () => {
    
    // check the type of dll and that it has all the methods
    expect( dll ).toBeInstanceOf( DoublyLinkedList );
    expect( dll ).toHaveProperty( 'addToTail' )
    expect( dll ).toHaveProperty( 'addToHead' )
    expect( dll ).toHaveProperty( 'removeFromTail' )
    expect( dll ).toHaveProperty( 'removeFromHead' )
    dll = new DoublyLinkedList( 'some value' );
    expect( dll.head ).toBeInstanceOf( LinkedListNode )
    expect( dll.head.value ).toBe( 'some value' )
    expect( dll.tail.value ).toBe( 'some value' )
    
  } )
  
  it( 'checks add to head method', () => {
    dll.addToHead( 30 );
    dll.addToHead( "someThing" );
    dll.addToHead( 35 );
    
    expect( dll.head.value ).toBe( 35 )
    expect( dll.head.prev.value ).toBe( "someThing" )
    expect( dll.head.prev.prev.value ).toBe( 30 )
    expect( dll.tail.value ).toBe( 30 )
    expect( dll.tail.next.value ).toBe( "someThing" )
    expect( dll.tail.next.next.value ).toBe( 35 )
  } );
  
  it( "checks add to tail method", () => {
    dll.addToTail( 30 )
    dll.addToTail( 45 )
    dll.addToTail( 50 )
    
    expect( dll.head.value ).toBe( 30 )
    expect( dll.head.prev.value ).toBe( 45 )
    expect( dll.head.prev.prev.value ).toBe( 50 )
    expect( dll.tail.value ).toBe( 50 )
    expect( dll.tail.next.value ).toBe( 45 )
    expect( dll.tail.next.next.value ).toBe( 30 )
  } )
  
  it( 'checks the remove from head method', () => {
    dll.addToHead( 30 )
    dll.addToHead( 45 )
    dll.addToHead( 50 )
    expect( dll.head.value ).toBe( 50 );
    let value = dll.removeFromHead();
    expect( value ).toBe( 50 )
    expect( dll.head.value ).toBe( 45 );
    value = dll.removeFromHead();
    expect( value ).toBe( 45 );
    value = dll.removeFromHead();
    expect( value ).toBe( 30 );
    expect( dll.head ).toBe( null );
    expect( dll.tail ).toBe( null );
    value = dll.removeFromHead();
    expect( value ).toBeNull();
  } )
  
  it( 'checks the remove from tail method', () => {
    dll.addToHead( 30 )
    dll.addToHead( 45 )
    dll.addToHead( 50 )
    expect( dll.tail.value ).toBe( 30 );
    let value = dll.removeFromTail();
    expect( value ).toBe( 30 )
    expect( dll.tail.value ).toBe( 45 );
    value = dll.removeFromTail();
    expect( value ).toBe( 45 );
    value = dll.removeFromTail();
    expect( value ).toBe( 50 );
    expect( dll.head ).toBe( null )
    expect( dll.tail ).toBe( null )
    value = dll.removeFromTail();
    expect( value ).toBe( null )
  } )
  
  it( 'checks the size of the linked list', () => {
    dll.addToHead( 35 );
    expect( dll.getSize() ).toBe( 1 );
    dll.addToHead( 35 );
    dll.addToHead( 35 );
    dll.addToHead( 35 );
    expect( dll.getSize() ).toBe( 4 )
    dll.removeFromHead();
    expect( dll.getSize() ).toBe( 3 );
    dll.removeFromTail();
    expect( dll.getSize() ).toBe( 2 );
    dll.removeFromHead();
    dll.removeFromHead();
    expect( dll.getSize() ).toBe( 0 );
    dll.removeFromHead();
    expect( dll.getSize() ).toBe( 0 );
    dll.removeFromTail();
    expect( dll.getSize() ).toBe( 0 )
  } )
  
} )

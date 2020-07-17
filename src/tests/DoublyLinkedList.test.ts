import { DoublyLinkedList } from "../DoublyLinkedList";

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
  
  it("checks add to tail method", () => {
    dll.addToTail(30)
    dll.addToTail(45)
    dll.addToTail(50)
    
    expect(dll.head.value).toBe(30)
    expect(dll.head.prev.value).toBe(45)
    expect(dll.head.prev.prev.value).toBe(50)
    expect(dll.tail.value).toBe(50)
    expect(dll.tail.next.value).toBe(50)
    expect(dll.tail.next.next.value).toBe(50)
  })
  
  
  
} )

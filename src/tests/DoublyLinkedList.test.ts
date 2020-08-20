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
  
  it( 'checks the forEach function', async () => {
    
    let result = await dll.forEach( item => {
    } ).catch(e => {
      expect( e.message ).toBe( "There are no items in this DLL" )
    })
    
    dll.addToHead( 23 );
    dll.addToHead( 24 );
    dll.addToHead( 25 );
    const items = []
    result = await dll.forEach( ( item => {
      items.push( item );
    } ) );
    expect( items.length ).toBe( 3 );
    expect( items ).toContain( 23 )
    expect( items ).toContain( 24 )
    expect( items ).toContain( 25 )
    expect( result.complete ).toBe( true )
    expect( result.error ).toBe( null )
  } )
  
  it( "tests the forSome function", async () => {
    let result = await dll.forSome( item => {
    } ).catch(e => {
      expect( e.message ).toBe( "There are no items in this DLL" )
    })
    
    
    dll.addToHead( 23 );
    dll.addToHead( 24 );
    dll.addToHead( 25 );
    let items = []
    result = await dll.forSome( item => {
      items.push( item );
      return true;
    } );
    
    expect( result.complete ).toBe( false );
    expect( items.length ).toBe( 1 );
    
    items = []
    result = await dll.forSome( item => {
      items.push( item )
    } );
    expect( result.complete ).toBe( true );
    expect( result.error ).toBe( null );
    expect( items.length ).toBe( 3 );
    expect( items[ 0 ] ).toBe( 25 )
    expect( items[ 1 ] ).toBe( 24 )
    expect( items[ 2 ] ).toBe( 23 )
    
    
  } )
  
  it( 'checks the forEachReverse function', async () => {
    
    let result = await dll.forEachReverse( item => {
    } ).catch( e => {
      expect( e.message ).toBe( "There are no items in this DLL" )
    } )
    
    dll.addToHead( 23 );
    dll.addToHead( 24 );
    dll.addToHead( 25 );
    const items = []
    result = await dll.forEachReverse( ( item => {
      items.push( item );
    } ) );
    expect( items.length ).toBe( 3 );
    expect( items[ 0 ] ).toBe( 23 );
    expect( items[ 1 ] ).toBe( 24 );
    expect( items[ 2 ] ).toBe( 25 );
    expect( result.complete ).toBe( true )
    expect( result.error ).toBe( null )
  } )
  
  
} )

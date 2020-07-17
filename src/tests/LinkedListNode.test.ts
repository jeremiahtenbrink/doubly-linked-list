import { LinkedListNode } from "../LinkedListNode";

describe( 'test LinkedListNode ', () => {
  
  // node to be created at the begining of every test
  let node = null;
  
  // runs before each test and assigns node to a new LinkedListNode
  beforeEach( () => {
    node = new LinkedListNode( 'value' )
  } )
  
  // creates a node and checks its value and type
  it( 'create node', () => {
    
    // check to be sure node is a LinkedListNode
    expect( node ).toBeInstanceOf( LinkedListNode );
    
    // check the node value
    expect( node.value ).toBe( "value" );
  } )
  
  // checks to ensure node.setNext is working by passing in a new node and
  // checks the setNext function throws a error if the value passed is not a
  // LinkedListNode
  it( 'adds a node to next', () => {
    
    node.setNext( new LinkedListNode( 'value2' ) );
    expect( node.next.value ).toBe( 'value2' );
    try {
      // tell typescript to ignore the error below so it will compile.
      // @ts-ignore
      node.setNext( 'error' )
    } catch ( e ) {
      // catch the error thrown in the function
      expect( e ).toBeInstanceOf( Error );
      expect( e.message )
        .toBe( "node must be of type object and include property value" )
    }
  } )
  
  it( 'gets the nodes next value', () => {
    
    // call get next and check its null because there is no next node yet
    let nextNode = node.getNext();
    expect( nextNode ).toBeNull();
    
    // set next node to new node and check its value and type
    node.setNext( new LinkedListNode( 'value2' ) );
    nextNode = node.getNext();
    expect( nextNode ).toBeInstanceOf( LinkedListNode );
    expect( nextNode.value ).toBe( "value2" )
  } )
  
  it( 'sets the nodes prev node', () => {
    
    // set prev node to new node and check type and value
    node.setPrev( new LinkedListNode( 'valuePrev' ) )
    expect( node.prev ).toBeInstanceOf( LinkedListNode );
    
    try {
      // tell typescript to ignore next error so it will compile.
      // @ts-ignore
      node.setPrev( 'error' );
    } catch ( e ) {
      
      // catch the thrown error from function and check its type and message
      expect( e ).toBeInstanceOf( Error );
      expect( e.message ).toBe( "node must be of type object and include" +
        " property value" );
    }
  } )
  
  it( "gets the prev node", () => {
    // get prev node and expect it to be null because there is no node
    let prevNode = node.getPrev()
    expect( prevNode ).toBeNull();
    
    // sets the prev node and then gets its and checks its type and value
    node.setPrev( new LinkedListNode( 'prevNode' ) );
    prevNode = node.getPrev()
    expect( prevNode ).toBeInstanceOf( LinkedListNode )
    expect( prevNode.value ).toBe( "prevNode" )
  } )
  
} )

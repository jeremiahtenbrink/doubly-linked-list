export class LinkedListNode extends Object {
  public next: LinkedListNode | null = null;
  public prev: LinkedListNode | null = null;
  public value: any;
  
  constructor( value: any ) {
    super();
    this.value = value;
  }
}

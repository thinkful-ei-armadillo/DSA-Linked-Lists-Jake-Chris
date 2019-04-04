'use strict';

class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next; 
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head); 
  }
 
  insertBefore(item, item2) {
    if (!this.head){
      console.log('no list');
      return null; 
    }

    if(this.head.value === item2){
      this.insertFirst(item);
    }
    let currNode = this.head;
    while(currNode.next.value !== item2){
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('item not found');
      return;
    }
    currNode.next = new _Node(item, currNode.next);
  }

  insertAfter(item, item2) {
    if (!this.head) {
      return null;
    }

    let currNode = this.head;

    while((currNode !== null) && (currNode.value !== item2)){
      currNode = currNode.next; 
    }

    if (currNode === null){
      console.log('Item not found'); 
      return; 
    }

    currNode.next = new _Node(item, currNode.next); 

  }

  insertAt(item, loc, list){
    let current = list.head;
    for (let i = 1; i < loc -1; i++) {
      current = current.next;
      if(current.next === null){
        this.insertLast(item)
      }
    }
    current.next = new _Node(item, current.next);
  }


  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next; 
      }
      tempNode.next = new _Node(item, null); 
    }
  }

  find(item) {
    let currNode = this.head; 
    if (!this.head) {
      return null; 
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null; 
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode; 
  }

  remove(item) {
    if (!this.head) {
      return null; 
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return; 
    }

    let currNode = this.head; 
    let previousNode = this.head; 

    while((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode; 
      currNode = currNode.next; 
    }
    if (currNode === null) {
      console.log('Item not found');
      return; 
    }
    previousNode.next = currNode.next; 
  }
}

//outside class

function display(sll){
  let currNode = sll.head;
  while(currNode !== null){
    console.log(currNode.value);
    currNode = currNode.next;
  }
}
function size(sll){
  let currNode = sll.head;
  let counter = 0;
  while(currNode !== null){
    counter++;
    currNode = currNode.next;
  }
  console.log(counter)
}
function isEmpty(sll) {
  if(sll.head === null){
    console.log('List is empty');
  } else{
    console.log('List is NOT empty');
  }
}

function findPrev(sll, item) {
  let currNode = sll.head; 
  let prevNode = null;
  if (!sll.head) {
    return null; 
  }

  while (currNode.value !== item) {
    if (currNode.next === null) {
      return null; 
    }
    else {
      prevNode = currNode;
      currNode = currNode.next;
    }
  }
  console.log(prevNode);
  return prevNode; 
}
function findLast(sll) {
  if (sll.head === null) {
    console.log('Nothing in list');
  }
  else {
    let tempNode = sll.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next; 
    }
    console.log(tempNode);
    return tempNode;
  }
}

function main() {
  let SLL = new LinkedList;
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer'); 
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3, SLL);
  SLL.remove('Tauhida');
  // display(SLL);
  // size(SLL);
  // isEmpty(SLL);
  // findPrev(SLL, 'Apollo');
  // findLast(SLL);
  reverse(SLL); 
} 

main(); 

/*4.
The mystery program just traverses through the list.
It does not return anything.
Time complexity: O(n^2)
*/

//At last node change the pointer to head
//Every other step, change next to previous

function reverse (list){
  let current = list.head; 
  let previous = null;
  let next = null; 

  while (current !== null){
    next = current.next;
    current.next = previous;
    previous = current; 
    current = next; 
  }
  list.head = previous;
  display(list); 
}


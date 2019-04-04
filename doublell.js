'use strict';

class _Node {
  constructor(value, next, previous){
    this.value = value;
    this.next = next; 
    this.previous = previous;
  }
}


class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
     
    this.tail === null ? this.tail = this.head : this.tail= this.tail.next;
    this.head = new _Node(item, this.head, this.tail);
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
    let previousNode = this.head;
    while(currNode.next.value !== item2){
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('item not found');
      return;
    }
    currNode.next = new _Node(item, currNode.next, previousNode);
  }



  insertAfter(item, item2) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while((currNode !== null) && (currNode.value !== item2)){
      previousNode = currNode;
      currNode = currNode.next; 
    }
    if (currNode === null){
      console.log('Item not found'); 
      return; 
    }
    currNode.next = new _Node(item, currNode.next, previousNode); 

  }



  insertAt(item, loc, list){
    let current = list.head;
    let previous = list.head;
    for (let i = 1; i < loc -1; i++) {
      previous = current;
      current = current.next;
      if(current.next === null){
        this.insertLast(item)
      }
    }
    current.next = new _Node(item, current.next, previous);
  }



  insertLast(item, next=null) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      let previous = this.head;
      while (tempNode.next !== null) {
        previous = tempNode;
        tempNode = tempNode.next; 
      }
      tempNode.next = new _Node(item, next, previous); 
    }
  }



  find(item) {
    let currNode = this.head; 
    let previous = this.head;
    if (!this.head) {
      return null; 
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null; 
      }
      else {
        previous = currNode;
        currNode = currNode.next;
      }
    }
    return (currNode, previous); 
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

function main(){
  let DLL = new DoublyLinkedList;
  DLL.insertFirst('Aquaria');
  DLL.insertFirst('Caprica');
  DLL.insertFirst('Gemenon');
  DLL.insertFirst('Picon');
  DLL.insertFirst('Sagittaron');
  console.log(DLL);
}

main();
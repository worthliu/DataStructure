// // // console.log(module.path);
// // var DoublyLinkedList = require("DoublyLinkedList");

// // var doublyLinkedList = new DoublyLinkedList();
// // doublyLinkedList.insert(0, "John");

// // console.log(doublyLinkedList.toString());




// //
// var LinkedList = require("LinkedList");
// //
// var linkedList = new LinkedList();

// linkedList.append('John');
// linkedList.append('Jack');
// linkedList.append('Camile');
// console.log(linkedList.toString());

// linkedList.insert(2, 'worth');

// console.log(linkedList.toString());

// linkedList.removeAt(2);
// console.log(linkedList.toString());
// linkedList.remove('Jack');
// console.log(linkedList.toString());

// console.log(linkedList.indexOf('Camile'));







// // 
// var ProrityQueue = require("ProrityQueue");
// var queue = new ProrityQueue();
// queue.enqueue('John',2);
// queue.enqueue('Jack',3);
// queue.enqueue('Camila',1);

// queue.print();


// var hotPotato = require("Queue");
// var names = ['John','Jack','Camila','Ingrid','Carl','Ice'];
// var winner = hotPotato(names, 2);
// console.log('winner:' + winner);



// // --------------------------
// var Set = require("Set");
// var set = new Set();
// set.add(1);
// // console.log(set.values());
// // console.log(set.has(1));
// // console.log(set.size());

// set.add(2);
// // console.log(set.values());
// // console.log(set.has(1));
// // console.log(set.size());

// set.add(3);
// // console.log(set.values());
// // console.log(set.has(1));
// // console.log(set.size());

// // set.remove(1);
// // console.log(set.values());

// // set.remove(2);
// // console.log(set.values());


// var otherSet = new Set();
// otherSet.add(9);
// var unionSet = set.union(otherSet);
// console.log(unionSet.values());


var ht = require("HashTable");

var hashTable = new ht.HashTable();
hashTable.put("Gandalf", "gandalf@gmail.com");
hashTable.put("John", "john@gmail.com");
hashTable.put("Tyrion", "tyrion@gmail.com");

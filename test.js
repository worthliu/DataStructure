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


// var ht = require("HashTable");

// var hashTable = new ht.HashTable();
// hashTable.put("Gandalf", "gandalf@gmail.com");
// hashTable.put("John", "john@gmail.com");
// hashTable.put("Tyrion", "tyrion@gmail.com");


var gp = require("Graph");

var graph = new gp.Graph();
var myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for(var i = 0; i < myVertices.length; i++){
	graph.addVertex(myVertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.printGraph());

graph.bfs(myVertices[0], gp.printValue);
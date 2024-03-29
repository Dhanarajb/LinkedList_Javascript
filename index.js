import createNode, {
  appendNode,
  printLinkedList,
  createLinkedList,
} from "./Basic.js";

// Usage examples
const myList = createLinkedList();
appendNode(myList, 1);
appendNode(myList, 2);
appendNode(myList, 3);
printLinkedList(myList);

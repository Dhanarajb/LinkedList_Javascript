// Define a function to create a node
function createNode(data) {
  return {
    data: data,
    next: null,
  };
}

// Define a function to append a new node to the linked list
function appendNode(linkedList, data) {
  const newNode = createNode(data);

  if (!linkedList.head) {
    linkedList.head = newNode;
    return;
  }

  let current = linkedList.head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
}

// Define a function to print the linked list
function printLinkedList(linkedList) {
  let current = linkedList.head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

// Define a function to create a linked list
function createLinkedList() {
  return {
    head: null,
  };
}

// Export the createNode function as default
export default createNode;

// Export other functions as named exports
export { appendNode, printLinkedList, createLinkedList };

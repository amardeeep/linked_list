//Node factory

function node(value) {
  return {
    value: value,
    nextNode: null,
  };
}
// factory linkedList
function linkedList(value = null) {
  let headNode = {
    value: value,
    nextNode: null,
  };
  //1 function append

  function append(value) {
    newNode = node(value);
    function check(node) {
      if (node.nextNode == null) {
        node.nextNode = newNode;
      } else {
        check(node.nextNode);
      }
    }
    check(headNode);
  }
  //2 function prepend

  function prepend(value) {
    newNode = node(value);
    newNode.nextNode = headNode;
  }
  // 3 checkSize to get number of nodes
  function size() {
    temp = headNode;
    let length = 1;
    while (temp.nextNode) {
      length++;
      temp = temp.nextNode;
    }
    return length;
  }
  //4 head returns first node after headNode
  function head() {
    return headNode;
  }
  //5 tail returns last node
  function tail() {
    temp = headNode;
    while (temp.nextNode) {
      temp = temp.nextNode;
    }
    return temp;
  }
  //6 index
  function at(index) {
    temp = headNode;
    let ind = 0;
    while (ind !== index) {
      ind++;
      temp = temp.nextNode;
    }
    return temp;
  }
  //7 pop removes last element of the list
  function pop() {
    curr = headNode;
    while (curr.nextNode) {
      prev = curr;
      curr = curr.nextNode;
    }
    prev.nextNode = null;
  }
  //8 contains(value)
  function contains(value) {
    temp = headNode;
    while (temp.value !== value && temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    if (temp.value == value) {
      return true;
    }
    return false;
  }
  //9 find(value)
  function find(value) {
    temp = headNode;
    let index = 0;
    while (temp.value !== value && temp.nextNode !== null) {
      temp = temp.nextNode;
      index++;
    }
    if (temp.value == value) {
      return index;
    }
    return "null";
  }
  //10 toString returns a string containing value in form (value)->(value)
  function toString() {
    temp = headNode;
    let string = "The Linked List is:";
    do {
      string = string + "(" + temp.value + ")->";
      temp = temp.nextNode;
    } while (temp.nextNode);
    string = string + "(" + temp.value + ")";
    return string;
  }
  //11 insertAt(value,index)
  function insertAt(value, index) {
    temp = headNode;
    newNode = node(value);
    let ind = 0;
    while (ind !== index) {
      ind++;
      temp = temp.nextNode;
    }
    succNode = temp.nextNode;
    newNode.nextNode = succNode;
    temp.nextNode = newNode;
  }
  //12 removeAt
  function removeAt(index) {
    temp = headNode;
    let ind = 0;
    while (ind !== index) {
      ind++;
      prev = temp;
      temp = temp.nextNode;
    }
    succNode = temp.nextNode;
    prev.nextNode = succNode;
  }
  // values to return
  return {
    removeAt,
    insertAt,
    toString,
    find,
    contains,
    pop,
    size,
    headNode,
    append,
    prepend,
    head,
    tail,
    at,
  };
}

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
  let length = 1;
  function checkSize(node) {
    if (node.nextNode == null) {
      return length;
    } else {
      length++;
      checkSize(node.nextNode);
    }
    return length;
  }
  function size() {
    length = 0;
    return checkSize(headNode);
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
    while (temp.value !== value && temp !== null) {
      temp = temp.nextNode;
    }
    if (temp.value == value) {
      return true;
    }
    return false;
  }
  // values to return
  return {
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

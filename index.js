//Node factory

function node(value) {
  return {
    value: value,
    nextNode: null,
  };
}
// factory linkedList
function linkedList() {
  let headNode = {
    value: null,
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
    secondNode = headNode.nextNode;
    headNode.nextNode = newNode;
    newNode.nextNode = secondNode;
  }
  // 3 checkSize to get number of nodes
  function checkSize(node) {
    let length = 0;
    if (node.nextNode == null) {
      return length;
    } else {
      length++;
      checkSize(node.nextNode);
    }
    return length;
  }
  function size() {
    return checkSize(headNode);
  }
  //4 head returns first node after headNode
  function head() {
    return headNode.nextNode;
  }
  //5 tail returns last node
  function tail() {
    let tail = {};
    function returnTail(node) {
      if (node.nextNode == null) {
        return node;
      } else {
        returnTail(node.nextNode);
      }
    }
    return (tail = returnTail(headNode));
  }
  // values to return
  return {
    size,
    headNode,
    append,
    prepend,
    head,
    tail,
  };
}

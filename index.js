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
  //function append
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
  //function prepend
  function prepend(value) {
    newNode = node(value);
    secondNode = headNode.nextNode;
    headNode.nextNode = newNode;
    newNode.nextNode = secondNode;
  }
  // values to return
  return {
    headNode,
    append,
    prepend,
  };
}

function node(value) {
  return {
    value: value,
    nextNode: null,
  };
}
function linkedList() {
  let headNode = {
    value: null,
    nextNode: null,
  };
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

  return {
    headNode,
    append,
  };
}

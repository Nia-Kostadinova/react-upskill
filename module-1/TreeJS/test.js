const rootNode = new TreeNode('div');
const childNode1 = new TreeNode('h1');
const childNode2 = new TreeNode('p');
rootNode.appendChild(childNode1);
rootNode.appendChild(childNode2);


const container = document.getElementById('container');
render(rootNode, container);


const virtualRoot = _.cloneDeep(rootNode);
const newChild = new TreeNode('span');
virtualRoot.appendChild(newChild);


setTimeout(() => {
  update(rootNode, virtualRoot);
  render(rootNode, container);
}, 2000);



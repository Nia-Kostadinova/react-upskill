class TreeNode {

    constructor(type) {
      // A string representing the type of DOM element (e.g., 'div', 'h1', 'p', etc.).
      this.type = type;
      // A reference to the parent node (if applicable).
      this.parent = null;
      this.children = [];
    }

    // A method that appends a node as a child to another node in the tree.
    appendChild(child) {
        child.parent = this;
        this.children.push(child);
    }

    // A method that returns a DOM element for this node (e.g., document.createElement(this.type)).
    render() {
        const element = document.createElement(this.type);
        this.children.forEach(child => element.appendChild(child.render()));
        return element;
    }

}

/**
 * Render the tree structure as HTML and inject it into a container in the DOM.
 * @param {TreeNode} root
 * @param {HTMLElement} container
 */
function render(root, container) {
    container.innerHTML = '';
    container.appendChild(root.render());
}

/**
 * Update the real DOM by comparing the current DOM (root) with the virtualDOM. Only nodes that are different in the virtual DOM is updated in the real DOM.
 * @param {*} root The root node of the current tree structure.
 * @param {*} virtualDOM The virtual DOM tree that represents the new state of the tree.
 * @returns 
 */
function update(root, virtualDOM) {
  if (root.type !== virtualDOM.type) {
      root.type = virtualDOM.render();
      return;
  }

  if (root.children.length > virtualDOM.children.length) {
      for (let i = virtualDOM.children.length; i < root.children.length; i++) {
          root.children.pop();
      }
  } else if (root.children.length < virtualDOM.children.length) {
      for (let i = root.children.length; i < virtualDOM.children.length; i++) {
          root.appendChild(virtualDOM.children[i]);
      }
  }

  for (let i = 0; i < virtualDOM.children.length; i++) {
      update(root.children[i], virtualDOM.children[i]);
  }
}

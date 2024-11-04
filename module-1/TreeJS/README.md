#  TreeJS - a React-Like Library 

## Features
- TreeNode Class: Represents each DOM element, allowing for a tree structure of elements.
- Render Function: Traverses the tree and renders it in the specified container.
- Update Function: Compares a real DOM structure with a virtual DOM and only updates changed nodes, reducing unnecessary DOM manipulation.

## Setup
Ensure you have a basic HTTP server (e.g., VS Code's Live Server extension) to run the index.html file in the browser.

## Expected Behavior
Initial Render: The render function creates a tree structure with a `<div>` containing `<h1>` and `<p>` elements and injects it into the `#container`.

Update After 2 Seconds: The update function compares the real DOM with the modified virtual DOM and adds a `<span>` element as a child of the `<div>` only if it’s not already present.

## Testing
Open index.html in your browser using Live Server.
After 2 seconds, check if the `<span>` element has been added inside the `<div>`, verifying that update works as expected.
Open the browser’s console to confirm no errors appear.

## File Structure

- index.html - HTML file to load the TreeJS library and test
- TreeJS.js - Library file with TreeNode, render, and update functions
- test.js - Test file to create and update the DOM structure
- README.md - Documentation file

## Project Completion Checklist
- TreeNode class implemented to represent DOM elements.
- render function implemented to render the tree structure to the specified container.
- update function implemented to compare real and virtual DOMs and only update changed nodes.
- Successfully tested in the browser using the example structure and update functionality.
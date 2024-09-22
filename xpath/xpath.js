// XPath query
const xpath = "//div[@class='product']/a";

// Evaluating the XPath expression in the document
const result = document.evaluate(
  xpath,                     // The XPath expression
  document,                   // Context node (can be a specific element or document)
  null,                       // Namespace resolver (null for HTML)
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, // Return multiple results
  null                        // Initial result object (null creates a new one)
);

// Loop through the results and log the text content of each link
for (let i = 0; i < result.snapshotLength; i++) {
  const node = result.snapshotItem(i);
  console.log(node.textContent); // Logs 'Buy Product 1', 'Buy Product 2', etc.
}

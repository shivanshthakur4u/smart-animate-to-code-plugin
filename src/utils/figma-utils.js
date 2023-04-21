// Utility functions for Figma plugin
// Function to calculate the translation between two components
function calculateTranslation(mainComponent, variantComponent) {
    const dx = variantComponent.x - mainComponent.x;
    const dy = variantComponent.y - mainComponent.y;
    return { dx, dy };
}
// Function to generate the Smart Animation code
function generateCode(mainComponent, variantComponent, translation) {
    const mainComponentKey = mainComponent.key;
    const variantComponentKey = variantComponent.key;
    const code = `// Smart Animation code for Figma Components:
  // Main Component: "${mainComponent.name}" (key: ${mainComponentKey})
  // Variant Component: "${variantComponent.name}" (key: ${variantComponentKey})
  
  const mainComponent = figma.root.findOne(node => node.type === 'COMPONENT' && node.key === '${mainComponentKey}');
  const variantComponent = figma.root.findOne(node => node.type === 'COMPONENT' && node.key === '${variantComponentKey}');
  const translation = { dx: ${translation.dx}, dy: ${translation.dy} };
  
  // Apply translation to variant component
  variantComponent.x += translation.dx;
  variantComponent.y += translation.dy;
  `;
    return code;
}
export { calculateTranslation, generateCode };

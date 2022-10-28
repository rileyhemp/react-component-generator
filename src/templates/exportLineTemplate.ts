export function exportLineTemplate(
  componentName: string,
  componentsFolderIndex?: boolean
) {
  return componentsFolderIndex
    ? `import componentName from './${componentName}';\n`
    : `import componentName from './${componentName}';\n
    export default ${componentName}\n`;
}

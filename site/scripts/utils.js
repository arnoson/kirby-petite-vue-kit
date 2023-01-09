export const dashToPascal = str => {
  const camel = str.replace(/-\w/g, match => match[1].toUpperCase())
  return camel.charAt(0).toUpperCase() + camel.slice(1)
};

export function extractVariables(content) {
  const regex = /{{(.*?)}}/g;
  const vars = new Set();
  let match;

  while ((match = regex.exec(content)) !== null) {
    vars.add(match[1].trim());
  }

  return Array.from(vars);
}

export function applyVariables(content, values) {
  let output = content;
  Object.keys(values).forEach((key) => {
    output = output.replaceAll(`{{${key}}}`, values[key]);
  });
  return output;
}

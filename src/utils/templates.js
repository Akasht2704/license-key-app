export function getTemplates() {
  return window.electronAPI?.getTemplates() || [];
}

export function saveTemplates(data) {
  return window.electronAPI?.saveTemplates(data);
}

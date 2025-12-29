export function saveSettings(type, data) {
  window.electronAPI.saveApiSettings(type, data);
}

export function loadSettings(type) {
  return window.electronAPI.getApiSettings(type);
}

export function saveToken(token) {
  return window.electronAPI?.saveToken(token);
}

export function getToken() {
  return window.electronAPI?.getToken() || null;
}

export function removeToken() {
  return window.electronAPI?.removeToken();
}

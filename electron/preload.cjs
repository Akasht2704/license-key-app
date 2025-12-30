const { contextBridge, ipcRenderer  } = require("electron");
const fs = require("fs");
const path = require("path");

const TOKEN_PATH = path.join(process.cwd(), "token.txt");
const settingsPath = path.join(process.cwd(), "api-settings.json");
const templatesPath = path.join(process.cwd(), "templates.json");

contextBridge.exposeInMainWorld("electronAPI", {

  saveToken: (token) => {
    
    
    fs.writeFileSync(TOKEN_PATH, token, "utf-8");
  },
  getToken: () => {
    if (fs.existsSync(TOKEN_PATH)) {
      console.log('token-Path--->',TOKEN_PATH);
      return fs.readFileSync(TOKEN_PATH, "utf-8");
    }
    return null;
  },
  removeToken: () => {
    console.log('token-Path--->',TOKEN_PATH);
    if (fs.existsSync(TOKEN_PATH)) fs.unlinkSync(TOKEN_PATH);
  },

  saveApiSettings: (type, data) => {
    let json = {};
    if (fs.existsSync(settingsPath)) {
      json = JSON.parse(fs.readFileSync(settingsPath));
    }
    json[type] = data;
    fs.writeFileSync(settingsPath, JSON.stringify(json, null, 2));
  },

  getApiSettings: (type) => {
    if (!fs.existsSync(settingsPath)) return null;
    const json = JSON.parse(fs.readFileSync(settingsPath));
    return json[type] || null;
  },

  getTemplates: () => {
    if (!fs.existsSync(templatesPath)) return [];
    return JSON.parse(fs.readFileSync(templatesPath, "utf-8"));
  },

  saveTemplates: (templates) => {
    fs.writeFileSync(
      templatesPath,
      JSON.stringify(templates, null, 2),
      "utf-8"
    );
  },

  printPRN: (content, copies) => {
    ipcRenderer.send("print-prn", { content, copies });
  }
});






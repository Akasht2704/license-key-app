// import { app, BrowserWindow } from "electron";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 1000,
//     height: 700,
//     webPreferences: {
//       preload: path.join(__dirname, "preload.cjs"),
//       contextIsolation: true,
//       sandbox: false,          // ⭐⭐⭐ THIS FIXES fs ERROR
//     },
//   });

//   win.loadURL("http://localhost:5173");
//   win.webContents.openDevTools();
// }

// app.whenReady().then(createWindow);

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") app.quit();
// });


import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { exec } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

/* ===============================
   CREATE WINDOW
================================ */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false, // required for fs in preload
    },
  });

  // Dev URL
  mainWindow.loadURL("http://localhost:5173");

  //mainWindow.webContents.openDevTools();
}

/* ===============================
   🖨️ PRN PRINT HANDLER
================================ */
ipcMain.on("print-prn", (event, payload) => {
  try {
    // ✅ SAFE destructuring
    const { content, copies } = payload || {};

    if (!content || !copies) {
      console.error("❌ Invalid print payload", payload);
      return;
    }

    // Use project root folder instead of C drive temp
    const projectTempDir = path.join(process.cwd(), "temp_prn");

    // Create folder if it doesn't exist
    if (!fs.existsSync(projectTempDir)) {
      fs.mkdirSync(projectTempDir, { recursive: true });
      console.log("✅ Created temp folder:", projectTempDir);
    }

    // Temp file path inside project folder
    const tempFile = path.join(projectTempDir, `print_${Date.now()}.prn`);
    console.log("Temp file path:", tempFile);

    // Write PRN file
    fs.writeFileSync(tempFile, content, "utf-8");
    console.log("✅ PRN file created");

    const printerName = getDefaultPrinter();

    // Windows RAW print
    for (let i = 0; i < copies; i++) {
      exec(
        `print /d:"\\\\localhost\\${printerName}" "${tempFile}"`,
        (err) => {
          if (err) console.error("❌ Print command failed:", err);
        }
      );
    }

    // Optional: Delete file after printing
    // fs.unlink(tempFile, (err) => {
    //   if (err) console.error("❌ Failed to delete temp file:", err);
    //   else console.log("✅ Temp file deleted:", tempFile);
    // });

  } catch (err) {
    console.error("❌ Printing failed:", err);
  }
});

/* ===============================
   🖨️ DEFAULT PRINTER
================================ */
function getDefaultPrinter() {
  // ⚠️ Change this to your actual printer later
  return "Microsoft Print to PDF";
}

/* ===============================
   APP LIFECYCLE
================================ */
app.whenReady().then(createWindow);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});



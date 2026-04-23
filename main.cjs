const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 700,
    resizable: false,
    autoHideMenuBar: true,
  });

  const filePath = path.join(__dirname, "dist", "index.html");
  win.loadFile(filePath);
}

app.whenReady().then(createWindow);
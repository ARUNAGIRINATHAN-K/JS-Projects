const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    resizable: false,
    icon: path.join(__dirname, 'assets', 'icon.png'), // optional icon
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.setMenu(null); // optional: removes the menu bar
  win.loadFile('renderer/index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

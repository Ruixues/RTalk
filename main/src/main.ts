
import { app, BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';
import ipc from './ipcListener';

const ENV = process.env.NODE_ENV;
const rootDir = path.resolve(__dirname, '..');

let mainWin: BrowserWindow;
function createWindow() {
  mainWin = new BrowserWindow({
    width: 1000,
    height: 700,
    minWidth: 950,
    minHeight: 650,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (ENV === "development") {
    // 开发环境
    mainWin.loadURL('http://localhost:5924/#/account/login');
  } else {
    // 生产环境
    mainWin.loadURL(url.format({
      pathname: path.join(rootDir, './dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  mainWin.webContents.openDevTools(); // 打开控制台
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipc();

export {mainWin};


import { ipcMain } from 'electron';
import { mainWin } from './main';

export default function ipc() {
  ipcMain.on('win-minimize', () => {
    mainWin.minimize();
  });
  
  ipcMain.on('win-maximize', () => {
    if (mainWin.isMaximized()) {
      mainWin.restore();
    } else {
      mainWin.maximize();
    }
  });
  
  ipcMain.on('win-close', () => {
    mainWin.hide();
  });
}

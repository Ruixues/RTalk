
import { ipcMain } from 'electron';
import { mainWin } from './main';
import login from './request/user';

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

  ipcMain.on('req-login', async (event, ...args) => {
    let res = await login(args[1], args[2]);
    event.reply(res);
  })
}

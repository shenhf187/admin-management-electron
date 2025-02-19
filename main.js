const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('node:path')
// createWindow函数将应用加载到新的BrowserWindow实例中
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}

// 应用准备就绪的时候调用函数
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  // 在没有窗口的时候打开一个窗口
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 如果窗口关闭，则退出程序 mac会自动退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

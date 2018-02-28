const electron = require('electron')
const path = require('path')
const cp = require('child_process')

// electron 应用生命周期模块
const app = electron.app
// 创建浏览器窗口模块
const BrowserWindow = electron.BrowserWindow
// 通信模块
const ipc = electron.ipcMain

app.setName("信息报送客户端")

const debug = /--debug/.test(process.argv[2])


let appWindow = null

/*创建应用窗口*/
function createWindow () {

  // 创建应用窗口
  appWindow = new BrowserWindow({
    width: 1280,
    height: 768,
    minWidth: 910,
    minHeight: 400,
    // transparent: true,
    frame: false
  })

  // 加载应用主界面
  appWindow.loadURL(`file://${__dirname}/index.html`)

  // 启用开发工具
  if (debug) {
    appWindow.webContents.openDevTools({detach: true})
  }

  // 添加关闭事件
  appWindow.on('closed', function () {
    appWindow = null
  })

  require('./script/main-process-settings')(appWindow)
  require('./script/main-process-utils')(appWindow)

}


ipc.on('refresh', function (event) {
  appWindow.loadURL(`file://${__dirname}/index.html`)
})


app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', function() {
  app.quit();
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (appWindow === null) {
    createWindow()
  }
})


var handleSquirrelEvent = function() {
   // if (process.platform != 'win32') {
   //    return false;
   // }

   function executeSquirrelCommand(args, done) {
      let updateDotExe = path.resolve(path.dirname(process.execPath), '..', 'update.exe');
      let child = cp.spawn(updateDotExe, args, { detached: true });
      child.on('close', function(code) {
         done()
      })
   };

   function install(done) {
      let target = path.basename(process.execPath)
      executeSquirrelCommand(["--createShortcut", target], done)
   };

   function uninstall(done) {
      let target = path.basename(process.execPath);
      executeSquirrelCommand(["--removeShortcut", target], done)
   };

   let squirrelEvent = process.argv[1]
   switch (squirrelEvent) {
      case '--squirrel-install':
         install(app.quit);
         return true;
      case '--squirrel-updated':
         install(app.quit);
         return true;
      case '--squirrel-obsolete':
         app.quit();
         return true;
      case '--squirrel-uninstall':
         uninstall(app.quit);
         return true;
   }

   return false;
}

if (handleSquirrelEvent()) {
   return
}

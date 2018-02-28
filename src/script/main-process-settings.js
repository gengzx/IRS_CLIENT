const electron = require('electron')
const ipc = electron.ipcMain
const dialog = electron.dialog

const appWindow = null

const windowTools = function(appWindow){

  appWindow = appWindow
  var webContents = appWindow.webContents

  ipc.on("close-appwindow",function(event){

      const msgOptions = {
        type: 'info',
        title: '系统提示',
        message: "确定退出系统?",
        buttons: ['Yes', 'No']
      }

      dialog.showMessageBox(msgOptions, function (index) {
        if (index === 0)  appWindow.close()
      })

  })

  ipc.on("resize-appwindow",function(event){

    if(appWindow.isMaximized()) appWindow.unmaximize()
    else appWindow.maximize()

  })

  ipc.on("min-appwindow",function(event){
    appWindow.minimize()
  })


  ipc.on("go-before",function(event){
    webContents.goBack()

  })
  ipc.on("go-after",function(event){
    webContents.goForward()
  })

}


module.exports = windowTools

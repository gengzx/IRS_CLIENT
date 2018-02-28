const electron = require('electron')
const ipc = electron.ipcMain
const dialog = electron.dialog
const BrowserWindow = electron.BrowserWindow
const shell = electron.shell

const SAVE_DIALOG_FILTER = {
  excel: [{ name: 'Excel 工作簿', extensions: ['xlsx'] }],
  xml: [{ name: 'xml', extensions: ['xml'] }],
  zip: [{ name: 'zip压缩文件', extensions: ['zip'] }]
}

var init = function (appWindow) {

  /*进度*/
  ipc.on("show-progressBar",function(event,progress){

    appWindow.setProgressBar(progress)

  })

  /*信息提示框*/
  ipc.on("show-message",function(event,msg){

      let options = {
          type: 'info',
          title: '系统提示',
          buttons: ['OK'],
          message: msg
      }
      dialog.showMessageBox(appWindow,options)

  })

  /*文件保存框*/
  ipc.on('save-dialog', function (event,type,defaultName) {

    let options = {
      title: '保存文件',
      defaultPath:defaultName || '',
      filters: SAVE_DIALOG_FILTER[type]
    }
    dialog.showSaveDialog(options, function (filename) {
      event.sender.send('saved-file', filename)
    })

  })

  /*文件浏览框*/
  ipc.on('open-dialog', function (event, type) {

    let options = {
      title: '浏览文件'
    }
    if(type) options.filters = SAVE_DIALOG_FILTER[type];
    dialog.showOpenDialog(options, function (filename) {
      event.sender.send('opened-file', filename)
    })

  })

  /**/
  ipc.on('open-window', function (event,path) {
    let win = new BrowserWindow({ width: 800, height: 600, autoHideMenuBar : true})

    win.on('closed', function () { win = null })
    win.loadURL(path)
    win.show()
  })


}

module.exports = function (appWindow) {
  init(appWindow)
}

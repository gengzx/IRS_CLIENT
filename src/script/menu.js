var electron = require('electron')
var remote = electron.remote
var dialog = remote.dialog
var Menu = remote.Menu
var MenuItem = remote.MenuItem



/*
menu.append(new MenuItem({
  label: '关闭',
  click: function() {
    remote.app.quit();
  }
}))

menu.append(new MenuItem({
  label: '更多...',
  click: function() {
    // Trigger an alert when menu item is clicked
    alert('更多...')
    dialog.showMessageBox({type: 'info', buttons: ['OK'], message: 'msg'})

  }
}))
*/


// Add the listener
// document.addEventListener('DOMContentLoaded', function () {

  /*
  document.querySelector('.js-context-menu').addEventListener('contextmenu', function (event) {
    menu.popup(remote.getCurrentWindow());
  })*/


// })

const menu = function(sheet){

  var menu = new Menu()
  menu.append(new MenuItem({
    label: '在上面插入行',
    click: function() {
      sheet.alter('insert_row', sheet.getSelected()[0]);
    }
  }))

  menu.append(new MenuItem({
    label: '在下面插入行',
    click: function() {
      sheet.alter('insert_row', sheet.getSelected()[2] + 1);
    }
  }))

  document.querySelector('.htCore').addEventListener('contextmenu', function (event) {
    menu.popup(remote.getCurrentWindow());
  })

}

module.exports = menu


module.exports = function(grunt){

  grunt.config.init({

  pkg: grunt.file.readJSON("package.json"),
    'create-windows-installer': {
      // x64: {
      //   appDirectory: 'out/信息报送客户端-win32-x64', //Electron App 的目录
      //   outputDirectory: 'out',  ///最后输出exe的目录
      //   authors: '石大正信',
      //   //loadingGif: 'src/assets/images/loading.gif', // 安装过程中的加载图片
      //   // setupIcon: 'src/assets/images/app-icon/win/app1.ico',
      //   description: '信息报送',
      //   version: '1.0.1',
      //   noMsi:true, //不需要创建.msi安装文件
      //   // remoteReleases:'', //更新链接，如果填写，当链接中有新版本，会自动下载安装。
      //   exe: '信息报送客户端.exe'
      // }

      ia32: {
        appDirectory: 'out/信息报送客户端-win32-ia32', //Electron App 的目录
        outputDirectory: 'out',  ///最后输出exe的目录
        authors: '石大正信',
        // loadingGif: 'src/assets/images/loading.gif', // 安装过程中的加载图片
        // setupIcon: '/src/assets/images/app-icon/win/app1.ico',
        description: '信息报送',
        version: '1.0.1',
        noMsi:true, //不需要创建.msi安装文件
        // remoteReleases:'', //更新链接，如果填写，当链接中有新版本，会自动下载安装。
        exe: '信息报送客户端.exe'
      }
    }

  })

  // 加载插件
  grunt.loadNpmTasks('grunt-electron-installer')

  //注册任务
  grunt.registerTask('default', ['create-windows-installer'])

}

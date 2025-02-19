# electron-app
使用electron创建的项目

### .vscode文件夹下的launch.json配置
使用vscode进行断点调试需要的配置
保存后，当您选择侧边栏的 “运行和调试”，将会出现一个 "Main + renderer" 选项。然后您便可设置断点，并跟踪主进程和渲染器进程中的所有变量。
- Main 用来运行主程序，并且暴露出 9222 端口用于远程调试 (--remote-debugging-port=9222) 。 我们将把调试器绑定到那个端口来调试 renderer 。 因为主进程是 Node.js 进程，类型被设置为 node。
- Renderer 用来调试渲染器进程。 因为后者是由主进程创建的，我们要把它 “绑定” 到主进程上 ()"request": "attach"，而不是创建一个新的。 渲染器是 web 进程，因此要选择 chrome 调试器。
- Main + renderer 是一个复合任务，可以同时执行上述任务。

## 操作步骤
1. 本地具有node环境
- node -v     v18.17.0
- npm -v      v9.6.7
2. npm init 初始化 其中main设置为main.js,license 使用了 MIT
3. 安装electron到本地依赖
- npm i electron@23.1.3 --save-dev
4. 在package.json中的scripts中添加start: 'electron .'，用于启动执行electron
5. 在根目录创建main.js，使用 console.log('Hello Electron')进行测试，使用npm start启动，控制台输出Hello Electron
6. 按照electron官网教程编写main.js文件，preload.js文件，添加index.html文件，使用对应的renderer.js文件
7. 启动后可以看到打开electron界面，同时界面内容显示index.html的内容
8. 打包：执行以下命令：
  - npm i --save-dev @electron-forge/cli
  - npx electron-forge import
  成功后再执行下边的命令,创建可分发文件,生成根目录下的out文件夹，找到make/zip/darwin/x64/xxx.zip,本地解压后即可找到打包过得electron应用
  - npm run make
Electron 应用程序需要打包后分发给用户。 根据官网教程，将应用程序导入 Electron Forge 并对其进行配置以打包开发者的应用程序并生成安装程序。
为了让应用程序受到用户系统的信任，开发者需要以数字签名证明可分发文件的内容是真实的并且未被代码签名篡改。只要在应用配置中添加签名证书信息，开发者就可以通过 Forge 对其进行签名。

### 未完待续
- [text](https://www.electronjs.org/zh/docs/latest/tutorial/%E6%8E%A8%E9%80%81%E6%9B%B4%E6%96%B0%E6%95%99%E7%A8%8B)
- [text](https://www.electronjs.org/zh/docs/latest/tutorial/code-signing)
- 代码签名需要 
1. 缴纳年费加入Apple Developer Program
2. Download and install Xcode - this requires a computer running macOS
3. 生成，下载，并安装 签名证书
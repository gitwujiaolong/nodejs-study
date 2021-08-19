const { promisify } = require('util')
const figlet = promisify(require('figlet')) // 画一个大字
const clear = require('clear') // 类似命令行clear
const chalk = require('chalk') // 给文字加颜色
const ora = require('ora') // 进度
const { clone } = require('./download') // 下载项目从github
const spawn = async (...args) => { // 子进程
    const { spawn } = require('child_process')
    const options = args[args.length - 1]
    if(process.platform === 'win32'){
        // 设置 shell 选项为 true 以隐式地调用 cmd 
        options.shell = true
    }else {
        // nothing
    }

    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close', () => {
            resolve()
        })
    })
}
const log = content => console.log(chalk.green(content))
const sleep = function(time = 3000){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },time)
    })
}
module.exports = async name => {
    // 打印欢迎画面
    clear()
    log('初始化')
    await sleep()
    const data = await figlet('WJL Welcome') 
    log(data)
    // 创建项目
    const process1 = ora(`🚀创建项目:${name}`)
    process1.start();
    await sleep()
    process1.succeed()
    // 克隆代码
    // await clone('github:su37josephxia/vue-template', name)
    const process2 = ora(`🚀安装依赖`)
    process2.start()
    await sleep()
    process2.succeed()
     //await spawn('npm', ['install'], { cwd: `./${name}` })
    /* 
    log(`
👌安装完成：
To get Start:
===========================
    cd ${name}
    npm run serve
===========================
            `) 
        */

    // const open = require('open') // 打开浏览器 指定端口
    // open('http://localhost:8080')
    // await spawn('npm', ['run', 'serve'], { cwd: `./${name}` })
}
const fs = require('fs')
const ping = require('ping')
const spawn = require('child_process').spawn
const exec = require('child_process').exec

const pingHosts = 'baidu.com'

// spawn
const spawnObj = spawn('ping', [pingHosts], { encoding: 'utf-8' })
spawnObj.stdout.on('data', (chunk) => {
  const result = chunk.toString()
  console.log(result.slice(result.indexOf('time') + 5))
})
spawnObj.stderr.on('data', (data) => {
  console.log(data)
})
spawnObj.on('close', (code) => {
  console.log('close code : ' + code)
})

// exec
function execPromise () {
  return new Promise((resolve, reject) => {
    exec(`ping ${pingHosts} -c 1`, { encoding: 'utf-8' }, (err, stdout, stderr) => {
      if (err) {
        reject(err)
      }
      resolve(resultReg(stdout))
    }).on('exit', (code) => {
      console.log('子进程已退出, 退出码 ' + code)
    })
  })
}

async function execTest () {
  const res = await execPromise()
  console.log(res)
}

execTest()

// ping module
function pingModuleTest () {
  setInterval(async () => {
    try {
      const res = await ping.promise.probe(pingHosts)
      console.log(resultReg(res.output))
    } catch (error) {
      console.log('ping error')
    }
  }, 5000)
}
pingModuleTest()

function resultReg (str) {
  const result = str.split('\n').find(item => item.indexOf('time') > -1)
  return result.slice(result.indexOf('time') + 5)
}

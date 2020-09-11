const fs = require('fs')
const Readable = require('stream').Readable

class haha {
  constructor (version) {
    this.version = version
    this.stream = new Map()
  }

  get (url) {
    // 创建可读流
    const data = []
    return new Promise((resolve, reject) => {
      const readerStream = fs.createReadStream(url, { flags: 'a+' })
      this.stream.set(url, readerStream)
      readerStream.on('data', function (chunk) {
        data.push(chunk)
      })
      readerStream.on('end', function () {
        // 合并Buffer
        const finalData = Buffer.concat(data)
        resolve(finalData)
      })
      readerStream.on('error', (err) => {
        reject(err)
      })
    })
  }

  set (url, content) {
    const writeStream = fs.createWriteStream('./temp.txt', { flags: 'r+' })
    writeStream.write(content)
    const data = []
    const readerStream = fs.createReadStream('./temp.txt', { flags: 'a+' })
    readerStream.on('data', function (chunk) {
      data.push(chunk)
    })
    readerStream.on('end', function () {
      // 合并Buffer
      const finalData = Buffer.concat(data)
    })
    readerStream.on('error', (err) => {
      console.log(err)
    })
    // readerStream.pipe(this.stream.get(url))
    // const createReadStream = fs.createWriteStream(url)
    // writeStream.pipe(createReadStream)
    // writeStream.pipe(content)
    const res = new Readable()
    res.push('1111111111111')
    writeStream.pipe(res)
    // res.pipe(writeStream.stream.get(url))
    // this.stream.get(url).pipe(res)
  }
}

const LXW = new haha('1.0.0')

LXW.get('./test.txt').then(res => {
  console.log(res)
})
LXW.set('./haha.txt', '[2020-09-01T17:34:15.446] [FATAL] default - LXW test...')

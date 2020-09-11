const log4js = require('log4js')

log4js.configure({
  appenders: {
    cheese: {
      type: 'file',
      filename: 'cheese.log'
    }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'debug'
    }
  }
})

const logger = log4js.getLogger()
// logger.trace('Entering cheese testing')
// logger.debug('Got cheese.')
// logger.info('Cheese is Comté.')
// logger.warn('Cheese is quite smelly.')
logger.info('Cheese is 啊啊啊啊啊啊啊啊啊啊啊啊Comté.')
logger.error('Cheese is too ripe!')
logger.fatal('Cheese was breeding ground for listeria.')

if ('victory') {
  console.log('alive')
} else {
  console.log('died')
}

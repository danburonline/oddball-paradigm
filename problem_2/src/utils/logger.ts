import { createLogger, transports, format } from 'winston'

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.prettyPrint()
  ),
  transports: [
    new transports.File({
      filename: 'logs/errors.log',
      level: 'error'
    })
  ],
  exceptionHandlers: [
    new transports.File({
      filename: 'logs/exceptions.log'
    })
  ]
})

logger.add(
  new transports.Console({
    format: format.combine(format.prettyPrint())
  })
)
logger.exceptions.handle(
  new transports.Console({
    format: format.combine(format.prettyPrint())
  })
)

logger.exitOnError = false

export default logger

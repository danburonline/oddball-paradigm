import { Request, Response } from 'express'
import logger from '../utils/logger'
import HttpException from '../exceptions/httpException'
import { HttpStatusEnum } from '../shared'

export default (err: HttpException, req: Request, res: Response): void => {
  logger.log('error', '', err)
  res.status(err.status || HttpStatusEnum.SERVER_ERROR).send(err.message)
}

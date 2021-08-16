/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express'
import logger from '../utils/logger'
import HttpException from '../exceptions/httpException'
import { HttpStatusEnum } from '../shared'

export default (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.log('error', '', err)
  res.status(err.status || HttpStatusEnum.SERVER_ERROR).send(err.message)
}

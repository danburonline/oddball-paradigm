import { Request, Response, NextFunction } from 'express'
import logger from '../utils/logger'
import HttpException from '../exceptions/httpException'
import { HttpStatusEnum } from '../shared'

export default (
  err: HttpException,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void => {
  logger.log('error', '', err)
  res.status(err.status || HttpStatusEnum.SERVER_ERROR).send(err.message)
}

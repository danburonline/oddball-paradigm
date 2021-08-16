import { plainToClass } from 'class-transformer'
import { ClassType } from 'class-transformer/ClassTransformer'
import { validate, ValidationError } from 'class-validator'
import * as express from 'express'
import HttpException from '../exceptions/httpException'
import { HttpStatusEnum } from '../shared'

function validationMiddleware(type: ClassType<never>): express.RequestHandler {
  return async (req, res, next): Promise<void> => {
    const errors: ValidationError[] = await validate(
      plainToClass(type, req.body)
    )
    if (errors.length > 0) {
      const message = errors
        .map((error: ValidationError) => Object.values(error.constraints))
        .join(', ')
      next(new HttpException(HttpStatusEnum.BAD_REQUEST, message))
    } else {
      next()
    }
  }
}

export default validationMiddleware

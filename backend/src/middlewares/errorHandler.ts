import {Request, Response, NextFunction} from 'express'
import {IErrorResponseClass} from '../interfaces/IErrorResponse.interface'
import {IErrorResponse} from '../interfaces/IResponse.interface'

/**
 * @desc This ErrorHandler catch all errors and send result with correct status code and message to client */
const errorHandler = (
  err: IErrorResponseClass,
  req: Request,
  res: Response<IErrorResponse>,
  next: NextFunction,
) => {
  console.log('Error is: ', err.errors, 'Message is: ', err.message, 'Name is: ', err.name)

  const error = {...err, message: err.message}

  res.status(error.statusCode || 500).json({
    success: false,
    error: {
      message: error.message || 'Server Error',
    },
  })
}

export default errorHandler

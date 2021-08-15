import {IErrorResponseClass} from '../interfaces/IErrorResponse.interface'

/**
 * @desc This is a custom Error class witch allows add status code and message, it is used for "errorHandler"
 * */
export class ErrorResponse extends Error implements IErrorResponseClass {
  constructor(public statusCode: number, public message: string = '') {
    super(message)
  }
}

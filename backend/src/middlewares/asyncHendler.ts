import {NextFunction, Request, RequestHandler, Response} from 'express'

/**
 * @desc This handler is allows to implement "DRY" pattern and refuse of "try/catch"*/
const asyncHandler =
  (fn: Function): RequestHandler =>
  (req: Request, res: Response, next: NextFunction): Promise<any> =>
    Promise.resolve(fn(req, res, next)).catch(next)

export default asyncHandler

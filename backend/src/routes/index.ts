import Router, {Response, Request, NextFunction} from 'express'
import errorHandler from '../middlewares/errorHandler'
import {ErrorResponse} from '../utils/errorResponse'
import movies from './v1/movies'

const route = Router()

route.get('/api/v1/movies', movies.GET)

route.use('*', (req: Request, res: Response, next: NextFunction) => {
  return next(new ErrorResponse(404, 'No route or method'))
})

route.use(errorHandler)

export default route

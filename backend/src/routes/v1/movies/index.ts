import {NextFunction, Response, Request} from 'express'
import moviesController from '../../../controllers/MoviesController'
import {IMovie} from '../../../interfaces/IMovies.interfsce'
import {ISuccessResponse} from '../../../interfaces/IResponse.interface'
import asyncHandler from '../../../middlewares/asyncHendler'

type IReqQuery = {g?: string; y?: string}

type IGetResponse = ISuccessResponse<{
  movies: IMovie[]
}>

/**
 * @url GET /api/v1/movies
 * @desc Get all movies
 */
const GET = asyncHandler(
  async (req: Request<{}, {}, {}, IReqQuery>, res: Response<IGetResponse>, next: NextFunction) => {
    const {g: genre = '', y: year = ''} = req.query

    let movies = await moviesController.getMovies()

    if (genre) {
      movies = movies.filter(({genre1, genre2}) => genre1 === genre || genre2 === genre)
    }

    if (year) {
      movies = movies.filter((movie) => movie.year === year)
    }

    return res.status(200).json({success: true, data: {movies}})
  },
)

export default {GET}

import path from 'path'
import fs from 'fs'
import parse from 'csv-parse'
import {createObjectCsvWriter} from 'csv-writer'

import {IMovie} from '../interfaces/IMovies.interfsce'

class MoviesController {
  private path = path.join(__dirname, '../data/movies.csv')

  getMovies = async (): Promise<IMovie[]> => {
    return new Promise((resolve, reject) => {
      fs.readFile(this.path, (err, fileData) => {
        if (err) return reject(err)

        parse(fileData, {delimiter: ',', columns: true, from: 1}, function (err, movies: IMovie[]) {
          if (err) return reject(err)

          resolve(movies)
        })
      })
    })
  }

  setMovies = async (movies: IMovie[]) => {
    const csvWriter = createObjectCsvWriter({
      path: this.path,
      header: [
        {id: 'id', title: 'id'},
        {id: 'name', title: 'name'},
        {id: 'year', title: 'year'},
        {id: 'genre1', title: 'genre1'},
        {id: 'genre2', title: 'genre2'},
        {id: 'poster', title: 'poster'},
      ],
    })

    return await csvWriter.writeRecords(movies)
  }
}

const moviesController = new MoviesController()

export default moviesController

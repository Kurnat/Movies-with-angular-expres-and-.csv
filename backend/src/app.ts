import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import routes from './routes'

const app = express()

app.use(cors({origin: true, credentials: true}))
app.use(express.json())
app.use(morgan('dev'))

app.use(routes)

export default app
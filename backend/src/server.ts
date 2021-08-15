import http from 'http'
import app from './app'

const PORT = process.env.PORT || 8000
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})

/**
 * @desc Handle unhandled promise rejections */
process.on('unhandledRejection', (err: Error) => {
  console.log(`Error: ${err.message}`)
  server.close(() => process.exit(1))
})

import chalk from "chalk"
import express from "express"
import morgan from "morgan"
import userScraperRouter from "./router/UserScraperRouter"
const debug = require('debug')('app')

class App {
  private port = process.env.PORT || 3000
  private app = express()

  constructor() {
    this.setup()
  }

  private async setup() {
    this.setupRoutes()
  }

  private setupRoutes() {
    this.app.use(morgan('tiny'))
    this.app.use(express.json())

    this.app.use('/userscraper', userScraperRouter)

    this.app.listen(this.port, () => {
      debug(`Listening on port ${chalk.green(this.port)}`)
    })
  }
}


new App()

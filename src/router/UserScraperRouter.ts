import { Request, Response, Router } from "express"
import axios from "axios"
import UserScraperService from "../service/UserScraperService"

const userScraperRouter = Router()

userScraperRouter.get("/getuserbyid", async (req: Request, res: Response) => {

  try {
    const result = await UserScraperService.getUserByID(req.body.id, req.body.apiKey, req.body.authcookie)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)
  }

})

userScraperRouter.get("/searchusers", async (req: Request, res: Response) => {

  try {
    const result = await UserScraperService.searchUsers(req.body.searchTerm, req.body.numberOfResults, req.body.offset, req.body.apiKey, req.body.authcookie)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)
  }

})

userScraperRouter.get("/getfriends", async (req: Request, res: Response) => {

  try {
    const result = await UserScraperService.getFriends(req.body.numberOfResults, req.body.offset, req.body.offline, req.body.apiKey, req.body.authcookie)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)
  }

})

userScraperRouter.get("/onlineusercount", async (req: Request, res: Response) => {

  try {
    const result = await UserScraperService.onlineUserCount()
    res.status(200).send({ "onlineusercount": result })
  } catch (error) {
    res.status(500).send(error)
  }

})

export default userScraperRouter

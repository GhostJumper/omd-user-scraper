import { Request, Response, Router } from "express"

const userScraperRouter = Router()

userScraperRouter.get("/", async (req: Request, res: Response) => {
    res.status(200).send("UserScraper")
})

export default userScraperRouter
import express, { Request, Response } from 'express'
import PostController from './controllers/PostController'

const app = express()
const port: number = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! edited!')
})

app.get("/posts", PostController.getPosts)
app.get("/posts/:id", PostController.getPost)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
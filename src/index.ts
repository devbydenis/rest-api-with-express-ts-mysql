import express, { Request, Response } from 'express'
import PostController from './controllers/PostController'
import CommentController from './controllers/CommentController'

const app = express()
const port: number = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! edited!')
})

app.get("/posts", PostController.getPosts)
app.post("/posts", PostController.createPost)
app.get("/posts/:id", PostController.getPost)
app.put("/posts/:id", PostController.uploadPost)
app.delete("/posts/:id", PostController.deletePost)

app.post("/comments", CommentController.createComment)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import { Request, Response } from "express";
import { Post } from "../models";

export default class PostController {
  static async getPosts(req: Request, res: Response) {
    const posts = await Post.findAll()
    return res.status(200).json(posts)
  }
}

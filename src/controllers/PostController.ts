import { Request, Response } from "express";
import { Post } from "../models";

export default class PostController {
  static async getPosts(req: Request, res: Response) {
    const posts = await Post.findAll();
    return res.status(200).json(posts);
  }

  static async getPost(req: Request, res: Response) {
    const { id } = req.params;
    const post = await Post.findByPk(id)
    console.log(post)

    if (!post) return res.status(404).json({message: "post not found"})

    return res.status(200).json({
      message: "success get post by id",
      data: post
    });
  }

  static async createPost(req: Request, res: Response) {
    const body = req.body
    if (!body.title || !body.description) {
      return res.status(400).json({success: false, message: "title or description is required"})
    }

    await Post.create({
      title: body.title,
      description: body.description
    })

    return res.status(201).json({
      message: "successfully created"
    })
  }
}

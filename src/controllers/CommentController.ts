import { Request, Response } from "express";
import { Post, Comment } from "../models";

export default class CommentController {
  static async createComment(req: Request, res: Response) {
    const body = req.body;

    if (!body.comment || !body.post_id) {
      return res
        .status(400)
        .json({ message: "comment or post_id is required" });
    }

    const post = await Post.findByPk(body.post_id)
    if (!post) {
      return res.status(404).json({message: "post not found"})
    }

    await Comment.create({
      comment: body.comment,
      post_id: body.post_id
    })

    return res.status(201).json({ message: "successfully create comment" });
  }
  
}

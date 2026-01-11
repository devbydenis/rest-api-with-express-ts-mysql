import { Sequelize } from "sequelize";
import { Post } from "./post";

const env = process.env.NODE_ENV || "development"
const config = require("../../config/config.json")[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

Post.initModel(sequelize)

export {
  Sequelize,
  Post
}
import { DataTypes, Model, Optional, Sequelize } from "sequelize";

interface IPost {
  id: number;
  title: string;
  description: string;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface IPostCreate extends Optional<IPost, "id" | "createdAt" | "updatedAt" | "deletedAt"> {} // ngasih tau kalo id, createdAt, UpdatedAt, deletedAt dari IPost ini optional

export class Post extends Model<IPost, IPostCreate> implements IPost {
  public id!: number;
  public title!: string;
  public description!: string;
  public deletedAt!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // association
  public static associate(models:any){

  }

  static initModel(sequelize: Sequelize): typeof Post {
    Post.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE
    },{
      sequelize,
      tableName: "Posts",
      modelName: "Post",
      paranoid: true,
      deletedAt: "deletedAt"
    })

    return Post
  }
}

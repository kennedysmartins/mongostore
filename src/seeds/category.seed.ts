import mongoose from "mongoose";
import Category from "../models/category.model";
require("dotenv").config()

mongoose.connect(process.env.DATABASE_URL as string)

const seedCategory = async () => {
  try {
    mongoose.connection.on("connected", async () => {
      const qtdSeeds = 10
      for (let index = 5; index < qtdSeeds; index++) {
        const newCategory = new Category({
          category_name: "Categoria" + index,
        })
        await newCategory.save()
      }
      console.log("Categorias criadas com sucesso")
      mongoose.disconnect()
    })
  } catch (error) {
    console.log("ERROR:", error)
    mongoose.disconnect()
  }
}

seedCategory()
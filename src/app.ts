import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
require("dotenv").config()

const app = express()
const PORT = 4000

//.env  DATABASE_URL="mongodb+srv://<user>:<password>@<name>.3ructdz.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(process.env.DATABASE_URL as string)

// Evento de conexão bem-sucedida
mongoose.connection.on("connected", () => {
  console.log("Conexão com o MongoDB estabelecida com sucesso!")
})

// Evento de erro na conexão
mongoose.connection.on("error", (err) => {
  console.error("Erro na conexão com o MongoDB:", err)
})


app.use(bodyParser.json())
app.listen(PORT, () => {
  console.log("Servidor rodando em http://localhost:" + PORT)
})

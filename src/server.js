require("express-async-errors")
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")

const express = require("express")
const routes = require("./routes")

migrationsRun()

const app = express()
app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }
    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    })
})


const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
 
// devolve uma resposta pro navegador
// app.get("/message", (request, response) => {
//     response.send("Hello, world")
// })

// requisita e responde os parâmetros passados na URL
// app.get("/message/:id/:user", (request, response) => {
//     const { id, user } = request.params

//     response.send(`
//         Mensagem ID: ${id}.
//         Para o usuário: ${user}.
//     `)
// })

// requisita e responde os parâmetros passados na URL sem serem obrigatórios
// app.get("/message/:id/:user", (request, response) => {
//     const { id, user } = request.params

//     response.send(`
//         Mensagem ID: ${id}.
//         Para o usuário: ${user}.
//     `)
// })

// app.get("/users", (request, response) => {
//     const { page, limit } = request.query

//     response.send(`Página: ${page}. Mostrar: ${limit}`)
// })

// Utiliza o método POST para responde um requisição
// app.post("/users", (request, response) => {
//     response.send(`Você chamou o POST`)
// })

// requisita um JSON e responde com um JSON através do POST
// app.post("/users", (request, response) => {
//     const { name, email, password } = request.body

//     response.json({ name, email, password })
// })

// requisita um JSON e responde com um JSON através do POST
// app.post("/users", (request, response) => {
//     const { name, email, password } = request.body

//     response.json({ name, email, password })
// })
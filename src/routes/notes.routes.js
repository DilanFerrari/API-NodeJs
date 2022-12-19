const { Router } = require("express")

const NotesController = require("../controllers/NotesController")

const notesRoutes = Router()

// function myMiddleware(request, response, next) {
//     if(!request.body.isAdmin) {
//         return response.json({ message: "user unauthorized"})
//     }

//     next()
// }

const notesController = new NotesController()

notesRoutes.get("/", notesController.index) 
notesRoutes.post("/:user_id", notesController.create) 
notesRoutes.get("/:id", notesController.show) 
notesRoutes.delete("/:id", notesController.delete) 

module.exports = notesRoutes
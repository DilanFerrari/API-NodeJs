const { Router } = require("express")

const TagsController = require("../controllers/TagsController")

const tagsRoutes = Router()

// function myMiddleware(request, response, next) {
//     if(!request.body.isAdmin) {
//         return response.json({ message: "user unauthorized"})
//     }

//     next()
// }

const tagsController = new TagsController()

tagsRoutes.get("/:user_id", tagsController.index) 

module.exports = tagsRoutes
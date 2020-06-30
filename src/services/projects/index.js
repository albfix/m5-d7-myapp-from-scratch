const express = require("express") //CREAZIONE ENDPOINT

const projectsRouter = express.Router() //ENDPOINT API FOR PROJECTS

//CRUD PER PROJECTS, DA METTERE NELL'INDEX RELATIVO
projectsRouter.get("/")
projectsRouter.get("/:id")
projectsRouter.post("/")
projectsRouter.put("/")
projectsRouter.delete("/")




module.exports = projectsRouter
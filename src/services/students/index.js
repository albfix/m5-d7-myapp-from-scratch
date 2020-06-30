const express = require("express") //CREAZIONE ENDPOINT

const studentsRouter = express.Router() //ENDPOINT API FOR STUDENTS

//CRUD PER STUDENTS, 
studentsRouter.get("/", (req, res) => {
    res.send("ok") //RISPOSTA DELLA REQ
    console.log(req)
})
studentsRouter.get("/:id", (req, res) => {
    res.send("ok get id")
    console.log(req.params) //CONSOLE DELLA REQ PIU I PARAMETRI, IN QUESTO CASO L'ID MESSO SU POSTMAN TIPO LOCALHOST:3000/STUDENTS/1234
})
studentsRouter.post("/", (req, res) => {
    res.send("ok post")
})
studentsRouter.put("/:id", (req, res) => {
    res.send("ok put")
})
studentsRouter.delete("/:id", (req, res) => {
    res.send("ok delete")
})

//SE VOLESSI FARE UPLOAD FILE DOVREI FARE ALTRI STUDENTSROUTER, O SE VOLESSI CHECKARE EMAIL 
//studentsRouter.get()



module.exports = studentsRouter
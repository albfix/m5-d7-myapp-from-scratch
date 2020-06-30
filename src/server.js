const express = require("express") //crea la funzione
const server = express()//invoca la funzione express
const listEndPoints = require("express-list-endpoints")//PER VERIFICARE ESATTEZZA DEL PATH
const studentsRouter = require("./services/students/index.js")// IMPORTARE IL ROUTER DA INDEX.JS DI STUDENTS
const projectsRouter = require("./services/projects/index.js")

const port = process.env.PORT // LA PORTA PRESENTE NEL FILE .ENV

server.use("/students", studentsRouter) //CODICE PER PER USARE IL ROUTER IMPORTATO, CON PATH /STUDENTS. ESEMPIO: LOCALHOST.3000/STUDENTS
server.use("/projects", projectsRouter)

console.log(listEndPoints(server))// VERIFICA SE IL PATH E' GIUSTO


server.listen(port, () => {
    console.log(`Server run in port ${port}`)// QUALE PORTA USERA' L'APP, COLLEGATO ALLA VARIABILE CONST 
}) 
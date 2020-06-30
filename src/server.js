const express = require("express") //crea la funzione
const server = express()//invoca la funzione express

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server run in port ${port}`)
}) 
const express = require('express');
const morgan = require('morgan');
const Service = require('./src/service.js');

const app = express();
const PORT = 5000;

app.use(morgan('dev'));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message : "Lista de usuarios",
        body : Service.getUsers(),
    })
})

app.get('/:id', (req, res) => {
    let { params: {id} } = req;
    let user = Service.getUser(id);
    res.json({
        message: `usuario ${id}`,
        body: user 
    })
})

app.post("/", (req, res) => {
    let { body: newUSer } = req
    let user = Service.createUser(newUSer);
    res.status(201).json({
        message: "nuevo usuario la monda",
    })
})



app.listen(PORT, () => console.log(`Servidor Listen in ${PORT}`));
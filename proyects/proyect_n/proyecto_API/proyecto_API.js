const express = require("express");
const mongoose = require('mongoose');
const user = require("./user.controller");
const app = express(); 
const port = 3000;

app.use(express.json());
mongoose.connect('mongodb+srv://seiken:fer213142@cluster0.va3sdo5.mongodb.net/miapp?retryWrites=true&w=majority');

app.get('/' , user.list)
app.post('/', user.create) 
app.get('/:id' , user.get)
app.put('/:id', user.update)
app.patch('/:id', user.update)
app.delete('/:id', user.destroy)

app.get('*', (req,res) => {
    res.status(404).send('Esta pagina no existe')
})

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto ' + port + '...')
});
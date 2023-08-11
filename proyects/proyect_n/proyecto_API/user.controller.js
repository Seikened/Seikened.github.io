const Users = require('./User');

const User = {
    get: async (req,res) => {
        res.status(200).send('Este es un chanchito')
    },
    list: async (req,res) => {
        const users = await Users.find();
        res.status(200).send(users)
    },
    create: async (req,res) => {
        console.log(req.body);
        res.status(201).send('Chanchito creado')
    },
    update: async (req,res) => {
        res.sendStatus(204).send('Chanchito actualizado')
    },
    destroy: async (req,res) => {
        res.sendStatus(204).send('Chanchito eliminado')
    }
}

module.exports = User
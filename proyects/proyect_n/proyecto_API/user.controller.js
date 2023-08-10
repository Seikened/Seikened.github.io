const User = {
    get: (req,res) => {
        res.status(200).send('Este es un chanchito')
    },
    list: (req,res) => {
        res.status(200).send('Hola chanchito feliz')
    },
    create: (req,res) => {
        res.status(201).send('Chanchito creado')
    },
    update: (req,res) => {
        res.sendStatus(204).send('Chanchito actualizado')
    },
    destroy: (req,res) => {
        res.sendStatus(204).send('Chanchito eliminado')
    }
}

module.exports = User
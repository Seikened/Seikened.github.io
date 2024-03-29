const Users = require('./User');

const User = {
    get: async (req,res) => {
        const { id } = req.params;
        const user = await Users.findOne({_id: id});
        res.status(200).send(user);
    },
    list: async (req,res) => {
        const users = await Users.find();
        res.status(200).send(users)
    },
    create: async (req,res) => {
        console.log(req.body);
        const user = new Users(req.body);
        const saveUser = await user.save();
        console.log(saveUser);
        res.status(201).send(saveUser._id)
    },
    update: async (req,res) => {
        const { id } = req.params;
        const user = await Users.findOne( { _id: id } );
        Object.assign(user, req.body);
        const saveUser = await user.save();
        res.status(200).send(saveUser);
    },
    destroy: async (req,res) => {
        const { id } = req.params;
        const user = await Users.findOne( { _id: id } );
        if (user) {
            await Users.deleteOne ( {_id:id} )
            console.log('Chanchito eliminado')
            res.sendStatus(200)
        }else{
            console.log('Chanchito no encontrado')
            res.sendStatus(404)
        }
    }
}

module.exports = User
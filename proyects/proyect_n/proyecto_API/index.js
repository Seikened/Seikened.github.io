const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://seiken:fer213142@cluster0.va3sdo5.mongodb.net/miapp?retryWrites=true&w=majority');

const User = mongoose.model('User', {
    username: String,
    edad: Number,
});

const crear = async () => {
    const user = new User({
        username: 'Fernando Leon Franco',
        edad: 25,
    });
    const saveUser = await user.save();
    console.log(saveUser);
};

// crear();

const buscarTodo = async () => {
    const users = await User.find();
    console.log(users);
};

// buscarTodo();

const buscar = async () => {
    const user = await User.find({ username: 'Fernando Leon Franco' });
    console.log(user);
};

// buscar();

const buscarUno = async () => {
    const user = await User.findOne({ username: 'Fernando Leon Franco' });
    console.log(user);
};

// buscarUno();

const actualizar = async () => {
    const user = await User.findOne({ username: 'Fernando Leon Franco' });
    console.log(user);
    user.edad = 45;
    await user.save();
};

// actualizar();

const eliminar = async () => {
    const result = await User.findOneAndDelete({ username: 'Seiken' });
    if (result) {
        console.log(result);
        console.log('Usuario eliminado con éxito.----------------------------');
    } else {
        console.log('Usuario no encontrado. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    }
    buscarTodo();
};

eliminar();

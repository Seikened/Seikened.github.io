const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://seiken:fer213142@cluster0.va3sdo5.mongodb.net/miapp?retryWrites=true&w=majority');

const User = mongoose.model('User', {
    username: String,
    edad: Number,
});

const crear = async () => {
    const user = new User({
        username: 'Seiken',
        edad: 20,
    });
    const saveUser = await user.save();
    console.log(saveUser);
};

crear();
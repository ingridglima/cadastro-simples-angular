'use strict';

const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');

exports.create = async(data) => {
    var cadastro = new Cadastro(data);
    await cadastro.save();
}

exports.get = async() => {
    const res = await Cadastro.find();
    return res;
}

exports.getById = async(id) => {
    const res = await Cadastro
        .findById(id);
    return res;
}

exports.delete = async(id) => {
    await Cadastro
        .findOneAndRemove(id);
}


'use strict';

const repository = require('../repositories/cadastro-repository');

exports.post = async(req, res, next) => {
    try {

        await repository.create({
            nome: req.body.nome,
            email: req.body.email,
            logradouro: req.body.logradouro,
            bairro: req.body.bairro,
            localidade: req.body.localidade,
            uf: req.body.uf,
            ibge: req.body.ibge,
            observacoes: req.body.observacoes
        });

        res.status(201).send({
            message: 'Cadastro realizado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição.'
        });
    }
};

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Cadastro removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};
;
'use strict'

const Usuarios = require('../models/usuarios'),
      { ObjectId } = require("mongodb"),
      path = require('path')


async function crear (req, res) {
    const users = req.body
    console.log(users)
    try {
        const user = await Usuarios.create(users)
        res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({
            msg: 'No se pudo crear',
            error
        })
    }

}

async function getFull (req, res) {
    try {
       const users = await Usuarios.find()
        res.json(users)
       
    } catch (error) {
        return res.status(400).json({
            msg: 'No se pudo conectar',
            error
        })
    }

}



module.exports = {
    crear,
    getFull
}
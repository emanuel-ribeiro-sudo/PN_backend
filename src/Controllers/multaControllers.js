const Multas = require('../models/multa');
const Sequelize = require('sequelize');
module.exports={
    async index(req,res){
        const matricula_carro = req.params
        const multa =await Multas.findAll(matricula_carro)
        if(multa=="" || multa== null){
            return res.status(400).send({
                status:0,
                message:'Nenhuma multa para esse Veiculo'
            })
        }   
        return res.status(200).send({
            status:1,
            multa
        }) 
    },
    async index1(req,res){
        const {matricula_carro} = req.body
        const multa =await Multas.findAll({where:
             {matricula_carro}})
        if(!multa){
            return res.status(400).send({
                status:0,
                message:'Nenhuma multa para esse Veiculo'
            })
        }   
        return res.status(200).send({
            status:1,
            multa
        }) 
    },
};
const Sequelize = require('sequelize');
const database = require('../config/db')

const Multas = database.define('multas',{
    id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    // matricula: {
    //     type:Sequelize.STRING(8),
    //     allowNull:false
    // },
    valor: {
        type:Sequelize.DECIMAL(9,2),
        allowNull:false
    },
    data_Multa: {
        type:Sequelize.DATE,
        allowNull:false
    },
    matricula_carro: {
        type:Sequelize.STRING(8),
        allowNull:true
    },
    estado: {
        type:Sequelize.ENUM('Pago','Nao pago'),
        defaultValue:'Nao pago',
        allowNull:false
    },
},
)
module.exports = Multas

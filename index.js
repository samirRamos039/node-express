import app from './app.js'
import morgan  from "morgan";
import { sequelize } from "./src/dataBase/database.js"
import express from 'express'
import proyectroutes from './src/routes/proyectsroutes.js'
//import './src/models/proyect.js'
//import './src/models/tasks.js'


async function main() {
    try {
        app.use(morgan('dev'))
        app.use(express.json())
        app.use(proyectroutes)
        
        await sequelize.sync({force: false})
        console.log('Connection was succefull')
        app.listen(3000)
        console.log('listening port 3000')
        
    } catch (error) {
        console.error('connetion was wrong', error)

    }

}

main()
import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('nodeexpress','postgres','1234',{
    host: 'localhost',
    dialect: 'postgres'
})
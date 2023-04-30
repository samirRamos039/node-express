import { DataTypes } from "sequelize";
import { sequelize } from "../dataBase/database.js";


export const Tasks = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING
    },

    done: {
        type: DataTypes.BOOLEAN,
        defaultValues: true
    },


},
    {
        timestamps: true
    }
)
import { DataTypes } from "sequelize";
import { sequelize } from "../dataBase/database.js";
import { Tasks } from './tasks.js'

export const Proyects = sequelize.define('proyects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING
    },

    prioryty: {
        type: DataTypes.INTEGER
    },

    description: {
        type: DataTypes.TEXT
    },

},
    {
        timestamps: true
    }
)

Proyects.hasMany(Tasks, {
    foreignKey: 'proyectId',
    sourceKey: 'id'
})

Tasks.belongsTo(Proyects, {
    foreignKey: 'proyectId',
    targetKey: 'id'
})
//samir

import { where } from 'sequelize'
import { Proyects } from '../models/proyect.js'

export const gets = async (req, res) => {
    try {
        const projects = await Proyects.findAll()
        res.json(projects)
        res.send('obteniendo empleados')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const sendEmployess = async (req, res) => {

    const { name, prioryty, description } = req.body
    try {
        const newProyect = await Proyects.create(
            {
                name,
                prioryty,
                description
            }
        )
        res.json(newProyect)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const putEmployess = async(req, res) => {
    res.send('actualizando empleados')
}

export const deletEmployess = async(req, res) => {
    
        const {id} = req.params;
        await Proyects.destroy(
            {
               where: id,
            }
        )
        res.sendStatus(204);
    
}

export const patchEmployess = (req, res) => {
    res.send('patch empleados')
}
import app from './app.js'
import morgan  from "morgan";
import { sequelize } from "./src/dataBase/database.js"

async function main() {
    try {
        await sequelize.authenticate()
        console.log('Connection was succefull')
        app.listen(3000)
        app.use(express.json())
        app.use(morgan('dev'))
    } catch (error) {
        console.error('connetion was wrong')

    }

}

main()
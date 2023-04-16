import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('nodeexpress','postgres','1234',{
    host: 'localhost',
    dialect: 'postgres'
})

import React, { memo } from 'react'

const database = memo(() => {
  return (
    <div>database</div>
  )
})

export default database
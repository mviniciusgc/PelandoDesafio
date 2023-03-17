import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Promotion } from '@/infra/models/promotion'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'desafio-pelando',
  entities: [Promotion],
  synchronize: false,
  logging: true
})

AppDataSource.initialize()
  .then(() => {
    console.log('conectado')
  })
  .catch((error) => console.log(error))

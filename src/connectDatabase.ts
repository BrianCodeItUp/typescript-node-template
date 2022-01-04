import { createConnection, Entity } from 'typeorm'
import { logger } from '@utils'
import { User } from '@entities'

async function connectDatabase () {
  try {
    const connection = await createConnection()
    const migrations = await connection.runMigrations()
    if (migrations.length > 0) {
      migrations.forEach(migration => {
        logger.info(`Migration ${migration.id} ${migration.name} is applied`)
      })
    }
    logger.info('Database Connected 🚀🚀🚀')

    return connection
  } catch(e) {
    logger.error(`Connect Database Fail: ${e}`)
    throw e
  }
} 

export default connectDatabase
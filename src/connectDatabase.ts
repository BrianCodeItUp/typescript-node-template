import { createConnection, Entity } from 'typeorm'
import { UserEntity } from '@entities'
import { logger } from '@utils'

async function connectDatabase () {
  try {
    const connection = await createConnection()
    logger.info('Database Connected 🚀🚀🚀')
  } catch(e) {
    logger.error(`Connect Database Fail: ${e}`)
  }
} 

export default connectDatabase
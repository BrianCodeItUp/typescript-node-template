import 'reflect-metadata'
import server from './server'
import connectDatabase from './connectDatabase'
import { logger } from '@utils'

const PORT = process.env.PORT || 3000

async function main() {
  await connectDatabase()
  server.listen(PORT, () => logger.info(`Server is listening on PORT ${PORT}`))
}

main()


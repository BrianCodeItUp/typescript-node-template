import 'reflect-metadata'
import startServer from './server'
import connectDatabase from './connectDatabase'

async function main() {
  await connectDatabase()
  startServer()
}

main()

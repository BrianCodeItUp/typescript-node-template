
const dbConfig = {
  type: 'postgres',
  port: 5432,
}
switch (process.env.NODE_ENV) {
  case "development":
    Object.assign(dbConfig, {
      host: 'db',
      username: 'postgres',
      password: 'postgres',
      database: 'todo',
      entities: ["src/entities/*.entity.ts"],
      migrations: ["migration/*.ts"],
      cli: {
        "migrationsDir": "migration"
      },
      synchronize: true
    })
    break;
  case "production":
    Object.assign(dbConfig, {
      entities: ['**/*.entity.js'],
      host: "localhost",
      password: 'postgres',
      database: "todo",
    })
}

module.exports = dbConfig

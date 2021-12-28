
const dbConfig = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "todo",
  synchronize: false,
}
switch (process.env.NODE_ENV) {
  case "development":
    Object.assign(dbConfig, {
      entities: ["src/entities/*.entity.ts"],
      migrations: ["migration/*.ts"],
      cli: {
        "migrationsDir": "migration"
      }
    })
    break;
  case "production":
    Object.assign(dbConfig, {
      entities: ['**/*.entity.js'],
    })
}

module.exports = dbConfig

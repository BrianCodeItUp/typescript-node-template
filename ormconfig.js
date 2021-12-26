module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "test-db",
  entities: ["**/*.entity.ts"],
  synchronize: false,
  migrations: ["migration/*.ts"],
  cli: {
    "migrationsDir": "migration"
  }
}
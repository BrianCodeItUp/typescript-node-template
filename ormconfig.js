module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "todo",
  entities: ["**/*.entity.ts"],
  synchronize: false,
  migrations: ["migration/*.ts"],
  cli: {
    "migrationsDir": "migration"
  }
}

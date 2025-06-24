require('dotenv/config');
const { DataSource } = require('typeorm');
const path = require('path');

const dataSourceOptions = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [path.join(__dirname, '../domain/entities/*.entity.{js,ts}')],
  migrations: ['dist/database/migrations/*.js'],
});

dataSourceOptions
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

module.exports = dataSourceOptions;

import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  synchronize: true,
  url: process.env.DATABASE_URL,
  entities: ['dist/**/*.schema.js'],
  migrations: ['dist/db/migrations/*.js'],
  logging: false,
  ssl: process.env.NODE_ENV === 'production',
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;

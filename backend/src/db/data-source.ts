import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  synchronize: true,
  url: 'postgres://neondb_owner:npg_C7yKtpsLJkG1@ep-frosty-bar-a4y7pjjk-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
  entities: ['dist/**/*.schema.js'],
  migrations: ['dist/db/migrations/*.js'],
  logging: false,
  ssl: process.env.NODE_ENV === 'production',
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;

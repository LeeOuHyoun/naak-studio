import * as promise from 'bluebird';
import { IMain, IDatabase } from 'pg-promise';
import * as pgPromise from 'pg-promise';

// pg-promise initialization options:
const initOptions: any = {
  promiseLib: promise,
  schema: 'public'
};

// Database connection parameters:
const config = {
  host: 'localhost',
  port: 5440,
  database: 'medalstation',
  user: 'rdb_admin',
  password: 'PassW0rd'
};

const pgp: IMain = pgPromise(initOptions);
const db: IDatabase<any> = pgp(config);

export { db };

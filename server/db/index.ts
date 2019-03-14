import * as promise from 'bluebird';
import * as pgPromise from 'pg-promise';
import { IMain, IDatabase, IOptions } from 'pg-promise';
import { IExtensions, ProductsRepository } from './repository';

// pg-promise initialization options:
const initOptions: IOptions<IExtensions> = {
    promiseLib: promise,
    schema: 'public',
    extend(obj: IExtensions, dc: any) {
        obj.products = new ProductsRepository(obj, pgp);
    }
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
const db = <IDatabase<IExtensions> & IExtensions>pgp(config);

export { db };

import * as promise from 'bluebird';
import * as pgPromise from 'pg-promise';
import { IMain, IDatabase, IOptions } from 'pg-promise';
import { IExtensions, ProductsRepository } from './repos';

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
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'postgresql'
};

const pgp: IMain = pgPromise(initOptions);
const dao = <IDatabase<IExtensions> & IExtensions>pgp(config);

export { dao };

import * as promise from 'bluebird';
import * as pgPromise from 'pg-promise';
import { IMain, IDatabase, IOptions } from 'pg-promise';
import { IExtensions, ProductsRepository } from './repository';
import { dbAccessOptions } from '../config';

// pg-promise initialization options:
const initOptions: IOptions<IExtensions> = {
    promiseLib: promise,
    schema: 'public',
    extend(obj: IExtensions, dc: any) {
        obj.products = new ProductsRepository(obj, pgp);
    }
};

const pgp: IMain = pgPromise(initOptions);
const db = <IDatabase<IExtensions> & IExtensions>pgp(dbAccessOptions);

export { db };

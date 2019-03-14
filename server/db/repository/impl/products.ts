import { IDatabase, IMain, ColumnSet } from 'pg-promise';
// import { IResult } from 'pg-promise/typescript/pg-subset';
import * as sqlProvider from '../../sql';

const sql = sqlProvider.products;

export class ProductsRepository {
    constructor(db: any, pgp: IMain) {
        this.db = db;
        this.pgp = pgp;
    }

    private db: IDatabase<any>;
    private pgp: IMain;

    public all() {
        return this.db.any('SELECT * FROM t_products');
    }

    public findByProductNo(productNo) {
        return this.db.any(sql.select, { productNo: productNo });
    }
}

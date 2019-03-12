import { IDatabase, IMain, ColumnSet } from 'pg-promise';
import { IResult } from 'pg-promise/typescript/pg-subset';


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

    public findByProductNo(productNo) { }
}

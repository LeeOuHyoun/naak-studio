import { QueryFile, TQueryFileOptions } from 'pg-promise';
import * as path from 'path';

const products = { select: sql('./products/products.sql') };

function sql(file: string): QueryFile {
    const fullPath: string = path.join(__dirname, file);
    const options: TQueryFileOptions = { minify: true };
    const qf: QueryFile = new QueryFile(fullPath, options);
    if (qf.error) {
        console.error(qf.error);
    }
    return qf;
}

export { products };

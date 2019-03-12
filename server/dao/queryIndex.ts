import { QueryFile, TQueryFileOptions } from 'pg-promise';
import * as path from 'path';

const products = { select: sql('./queryFactory/sql/products.sql') };

export { products };

function sql(file: string): QueryFile {
    const fullPath: string = path.join(__dirname, file);

    const options: TQueryFileOptions = {
        minify: true,
        // replace ${schema~} with "public"
        // params: { schema: 'public' }
    };
    const qf: QueryFile = new QueryFile(fullPath, options);
    if (qf.error) {
        console.error(qf.error);
    }
    return qf;
}

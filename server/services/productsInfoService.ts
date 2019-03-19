import { db } from '../db/index';

const productsInfoService: any = {
    // :productNo
    helloTest: productNo => {
        return db.oneOrNone('SELECT * FROM t_products WHERE product_no = $1', [productNo]);
    },

    getAllProducts: () => {
        return db.products.all();
    },

    findByProductNo: (productNo) => {
        return db.products.findByProductNo(productNo);
    },

    findAllByCategory: (category) => {
        return db.manyOrNone('SELECT * FROM t_products WHERE category = $1', [category]);
    }

};

export { productsInfoService };

import { dao } from '../dao/index';

const productsInfoService: any = {
    // :productNo
    helloTest: productNo => {
        return dao.oneOrNone('SELECT * FROM t_products WHERE product_no = $1', [productNo]);
    },

    getAllProducts: () => {
        return dao.products.all();
    }
};

export { productsInfoService };

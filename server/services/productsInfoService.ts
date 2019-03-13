import { dao } from '../dao/index';

const productsInfoService: any = {
    // :productNo
    helloTest: productNo => {
        return dao.oneOrNone('SELECT * FROM t_products WHERE product_no = $1', [productNo]);
    },

    getAllProducts: () => {
        return dao.products.all();
    },

    findByProductNo: (productNo) => {
        return dao.products.findByProductNo(productNo);
    }
};

export { productsInfoService };

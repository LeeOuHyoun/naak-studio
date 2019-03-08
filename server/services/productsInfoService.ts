import { db } from '../dao/index';

const productsInfoService: any = {
  // :productNo
  helloTest: productNo => {
    return db.oneOrNone('SELECT * FROM t_products WHERE product_no = $1', [productNo]);
  }
};

export { productsInfoService };

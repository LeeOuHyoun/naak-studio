import { ProductsRepository } from './impl/products';

// Database Interface Extensions:
interface IExtensions {
    products: ProductsRepository;
}

export {
    IExtensions,
    ProductsRepository
};

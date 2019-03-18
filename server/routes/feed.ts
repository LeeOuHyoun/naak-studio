import { Request, Response, Router, NextFunction } from 'express';
import { productsInfoService } from '../services/productsInfoService';

const feedRouter: Router = Router();

feedRouter.post('/', (request: Request, response: Response, next: NextFunction) => {
    productsInfoService.helloTest(request.body.productId).then((data: any) => {
        response.json({ data: data });
    }).catch((error: any) => {
        next(error);
    });
});

feedRouter.post('/products/dummy', (request: Request, response: Response, next: NextFunction) => {
    productsInfoService.getAllProducts().then((data: any) => {
        response.json({ data: data });
    }).catch((error: any) => {
        next(error);
    });
});

feedRouter.post('/products', (request: Request, response: Response, next: NextFunction) => {
    productsInfoService.findByProductNo('2').then((data: any) => {
        response.json({ data: data });
    }).catch((error: any) => {
        next(error);
    });
});

export { feedRouter };

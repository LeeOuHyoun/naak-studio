import { Request, Response, Router } from 'express';
import { productsInfoService } from '../services/productsInfoService';

const feedRouter: Router = Router();

feedRouter.post('/', (request: Request, response: Response) => {
    productsInfoService.helloTest(request.body.productId).then(data => {
        // console.log('data===> ', data);
        response.json({ data: data });
    }).catch(error => {
        console.log('error ==>', error);
    });
});

feedRouter.post('/products/dummy', (request: Request, response: Response) => {
    productsInfoService.getAllProducts().then(data => {
        response.json({ data: data });
    }).catch(error => {
        console.log('error ==>', error);
    });
});

feedRouter.post('/products', (request: Request, response: Response) => {
    productsInfoService.findByProductNo('2').then(data => {
        response.json({ data: data });
    }).catch(error => {
        console.log('error ==>', error);
    });
});

export { feedRouter };

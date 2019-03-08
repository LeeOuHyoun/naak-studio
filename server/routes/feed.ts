import { Request, Response, Router } from 'express';
import { productsInfoService } from '../services/productsInfoService';

const feedRouter: Router = Router();

feedRouter.post('/', (request: Request, response: Response) => {
  productsInfoService.helloTest(request.body.productId).then(data => {
    // console.log('data===> ', data);
    response.json({ data : data });
  }).catch(error => {
    console.log('error ==>', error);
  });
});

export { feedRouter };

import { Request, Response, Router, NextFunction } from 'express';
import { productsInfoService } from '../services/productsInfoService';

const productsRouter: Router = Router();

productsRouter.post('/yarn', (request: Request, response: Response, next: NextFunction) => {
    const category: any = request.body.category;
    productsInfoService.findAllByCategory(category).then((data: any) => {
        response.json({ data: data });
    }).catch((error: any) => {
        next(error);
    });
});

export { productsRouter };

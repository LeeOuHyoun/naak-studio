import { Request, Response, Router } from 'express';

const feedRouter: Router = Router();

feedRouter.post('/', (request: Request, response: Response) => {
  console.log('feedRouter ===>');
  console.log('request data ===> ', request.body);
  console.log('get from body data ==> %s', request.body.data);
  response.json({
    testResponse: 'Hello response～～～'
  });
});

export { feedRouter };

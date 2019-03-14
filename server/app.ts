import { json, urlencoded } from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import * as path from 'path';

const app: express.Application = express();

app.disable('x-powered-by');
app.use(compression());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

// api routes FIXME TODO
import { feedRouter } from './routes/feed';
app.use('/api/feed', feedRouter);

// catch 404 and forward to error handler
app.use(
    (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const error = new Error('Not Found');
        next(error);
    }
);
// catch other errors handler
app.use(
    (error: any, request: express.Request, response: express.Response, next: express.NextFunction) => {
        response.status(error.status || 500);
        response.json({
            error: {},
            message: error.message
        });
    }
);

export { app };

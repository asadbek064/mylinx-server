import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import compressFilter from './utils/compressFilter.util';
import routes from './routes';

const app: Express = express();

app.use(cors());

// Helmet is used to secure this app by configuring the http-header
app.use(helmet());

// Compression is used to reduce the size of the response body
app.use(compression({ filter: compressFilter }));

app.use('/', routes);

export default app;

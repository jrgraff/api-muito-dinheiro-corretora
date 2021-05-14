import { Router } from 'express';

import { exchangeRouter } from './exchange.routes';

const router = Router();

//router.use('/report', reportRouter);
router.use('/exchange', exchangeRouter);

export { router };
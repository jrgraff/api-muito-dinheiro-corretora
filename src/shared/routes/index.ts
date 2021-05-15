import { Router } from 'express';

import { exchangeRouter } from './exchange.routes';
import { currencyRouter } from './currency.routes'

const router = Router();

//router.use('/report', reportRouter);
router.use('/exchange', exchangeRouter);
router.use('/currency', currencyRouter);

export { router };
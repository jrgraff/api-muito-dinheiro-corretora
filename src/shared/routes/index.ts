import { Router } from 'express';

import { exchangesRouter } from './exchanges.routes';
import { currenciesRouter } from './currencies.routes'

const router = Router();

//router.use('/report', reportRouter);
router.use('/exchanges', exchangesRouter);
router.use('/currencies', currenciesRouter);

export { router };
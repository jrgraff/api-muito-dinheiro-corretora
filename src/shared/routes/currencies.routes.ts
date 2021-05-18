import { Router } from "express";

import { CreateCurrencyController } from "../../modules/currencies/useCase/createCurrency/CreateCurrencyController";
import { ListCurrenciesController } from "../../modules/currencies/useCase/listCurrencies/ListCurrenciesController";

const currenciesRouter = Router();
const createCurrencyController = new CreateCurrencyController();
const listCurrenciesController = new ListCurrenciesController();

currenciesRouter.post('/', createCurrencyController.handle);
currenciesRouter.get('/', listCurrenciesController.handle);

export { currenciesRouter };
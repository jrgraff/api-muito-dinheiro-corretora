import { Router } from "express";

import { CreateCurrencyController } from "../../modules/currencies/useCase/createCurrency/CreateCurrencyController";
import { ListCurrenciesController } from "../../modules/currencies/useCase/listCurrencies/ListCurrenciesController";

const currencyRouter = Router();
const createCurrencyController = new CreateCurrencyController();
const listCurrenciesController = new ListCurrenciesController();

currencyRouter.post('/', createCurrencyController.handle);
currencyRouter.get('/', listCurrenciesController.handle);

export { currencyRouter };
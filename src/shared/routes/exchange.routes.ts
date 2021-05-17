import { Router } from "express";

import { CreateExchangeController } from "../../modules/exchanges/useCase/createExchange/CreateExchangeController";
import { ListExchangesController } from "../../modules/exchanges/useCase/listExchanges/ListExchangesController";

const exchangeRouter = Router();
const createExchangeController = new CreateExchangeController();
const listExchangeController = new ListExchangesController();

exchangeRouter.post('/', createExchangeController.handle);
exchangeRouter.get('/', listExchangeController.handle);

export { exchangeRouter };
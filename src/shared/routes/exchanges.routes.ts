import { Router } from "express";

import { CreateExchangeController } from "../../modules/exchanges/useCase/createExchange/CreateExchangeController";
import { ListExchangesController } from "../../modules/exchanges/useCase/listExchanges/ListExchangesController";

const exchangesRouter = Router();
const createExchangeController = new CreateExchangeController();
const listExchangeController = new ListExchangesController();

exchangesRouter.post('/', createExchangeController.handle);
exchangesRouter.get('/', listExchangeController.handle);

export { exchangesRouter };
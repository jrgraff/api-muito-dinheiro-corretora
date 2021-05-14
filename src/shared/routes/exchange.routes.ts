import { Router } from "express";
import { CreateExchangeController } from "../../modules/exchanges/useCase/createExchange/CreateExchangeController";

const exchangeRouter = Router();
const createExchangeController = new CreateExchangeController();

exchangeRouter.post('/', createExchangeController.handle);

export { exchangeRouter };
import { container } from "tsyringe";

import { IExchangesRepository } from "../../modules/exchanges/repositories/IExchangesRepository";
import { ExchangesRepository } from "../../modules/exchanges/typeorm/repositories/ExchangesRepository";

container.registerSingleton<IExchangesRepository>(
  "ExchangesRepository",
  ExchangesRepository
);
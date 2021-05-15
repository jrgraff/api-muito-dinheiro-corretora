import { container } from "tsyringe";

import { IExchangesRepository } from "../../modules/exchanges/repositories/IExchangesRepository";
import { ExchangesRepository } from "../../modules/exchanges/typeorm/repositories/ExchangesRepository";

import { ICurrenciesRepository } from "../../modules/currencies/repositories/ICurrenciesRepository";
import { CurrenciesRepository } from "../../modules/currencies/typeorm/repositories/CurrenciesRepository";

container.registerSingleton<IExchangesRepository>(
  "ExchangesRepository",
  ExchangesRepository
);

container.registerSingleton<ICurrenciesRepository>(
  "CurrenciesRepository",
  CurrenciesRepository
);
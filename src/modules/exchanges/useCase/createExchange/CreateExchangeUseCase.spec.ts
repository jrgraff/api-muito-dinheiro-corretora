import { CurrenciesRepository } from "../../../currencies/typeorm/repositories/CurrenciesRepository";
import { InMemoryExchangesRepository } from "../../repositories/in-memory/InMemoryExchangesRepository";
import { CreateExchangeUseCase } from "./CreateExchangeUseCase";

let exchangesRepository: InMemoryExchangesRepository;
let currenciesRepository: CurrenciesRepository;
let createExchangeUseCase: CreateExchangeUseCase;

describe('Create Exchange', () => {
  beforeEach(() => {
    exchangesRepository = new InMemoryExchangesRepository();
    currenciesRepository = new CurrenciesRepository();
    createExchangeUseCase = new CreateExchangeUseCase(
      exchangesRepository,
      currenciesRepository,
    );
  });

  it('should be able to create a new exchange', async () => {
    const exchange = await createExchangeUseCase.execute({
      username: "Jack",
      from_currency_id: "BRL",
      to_currency_id: "ARS",
      original_amount: 12,
    })

    expect(exchange).toHaveProperty('id')
  });
});
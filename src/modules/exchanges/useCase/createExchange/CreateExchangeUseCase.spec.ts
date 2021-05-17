import { AppError } from "../../../../shared/errors/AppError";

import { ICurrenciesRepository } from "../../../currencies/repositories/ICurrenciesRepository";
import { InMemoryCurrenciesRepository } from "../../../currencies/repositories/in-memory/InMemoryCurrenciesRepository";
import { IExchangesRepository } from "../../repositories/IExchangesRepository";
import { InMemoryExchangesRepository } from "../../repositories/in-memory/InMemoryExchangesRepository";
import { CreateExchangeUseCase } from "./CreateExchangeUseCase";

let exchangesRepository: IExchangesRepository;
let currenciesRepository: ICurrenciesRepository;
let createExchangeUseCase: CreateExchangeUseCase;

describe('Create Exchange', () => {
  beforeEach(() => {
    exchangesRepository = new InMemoryExchangesRepository();
    currenciesRepository = new InMemoryCurrenciesRepository();
    createExchangeUseCase = new CreateExchangeUseCase(
      exchangesRepository,
      currenciesRepository,
    );
  });

  it('should be able to create a new exchange', async () => {
    currenciesRepository.create({
      id: "TFC",
      name: "test_from_currency",
      rate: 10
    })

    currenciesRepository.create({
      id: "TTC",
      name: "test_to_currency",
      rate: 11
    })

    const exchange = await createExchangeUseCase.execute({
      username: "Test1",
      from_currency_id: "TFC",
      to_currency_id: "TTC",
      original_amount: 12,
    })

    expect(exchange).toHaveProperty('id')
  });

  it('should not be able to create a new exchange when origin currency does not exists', async () => {
    currenciesRepository.create({
      id: "TTC",
      name: "test_to_currency",
      rate: 12
    })
    
    await expect(
      createExchangeUseCase.execute({
        username: "Test2",
        from_currency_id: "Test",
        to_currency_id: "TTC",
        original_amount: 11,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new exchange when target currency does not exists', async () => {
    currenciesRepository.create({
      id: "TFC",
      name: "test_from_currency",
      rate: 13
    })
    
    await expect(
      createExchangeUseCase.execute({
        username: "Test3",
        from_currency_id: "TFC",
        to_currency_id: "Test",
        original_amount: 10,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
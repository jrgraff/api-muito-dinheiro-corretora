import { InMemoryExchangesRepository } from "../../repositories/in-memory/InMemoryExchangesRepository";
import { CreateExchangeUseCase } from "./CreateExchangeUseCase";

let exchangesRepository: InMemoryExchangesRepository;
let createExchangeUseCase: CreateExchangeUseCase;

describe('Create Exchange', () => {
  beforeEach(() => {
    exchangesRepository = new InMemoryExchangesRepository();
    createExchangeUseCase = new CreateExchangeUseCase(
      exchangesRepository,
    );
  });

  it('should be able to create a new exchange', async () => {
    const exchange = await createExchangeUseCase.execute({
      username: "Jack",
      from_currency: "BRL",
      to_currency: "ARS",
      original_amount: 12,
    })

    expect(exchange).toHaveProperty('id')
  });
});
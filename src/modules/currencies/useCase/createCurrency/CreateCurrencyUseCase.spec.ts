import { ICurrenciesRepository } from "../../repositories/ICurrenciesRepository";
import { InMemoryCurrenciesRepository } from "../../repositories/in-memory/InMemoryCurrenciesRepository";
import { CreateCurrencyUseCase } from "./CreateCurrencyUseCase";

let createCurrencyUseCase: CreateCurrencyUseCase;
let currenciesRepository: ICurrenciesRepository;

describe("Create Currency", () => {
  beforeEach(() => {
    currenciesRepository = new InMemoryCurrenciesRepository();
    createCurrencyUseCase = new CreateCurrencyUseCase(
      currenciesRepository
    );
  });

  it("shoud be able to create a new currency", async () => {
    const currency = {
      id: "TST",
      name: "Test currency",
      rate: 123,
    }

    await createCurrencyUseCase.execute(currency);

    const currencyCreated = await currenciesRepository.findById(currency.id)
    expect(currencyCreated).toHaveProperty("id")
  })
});
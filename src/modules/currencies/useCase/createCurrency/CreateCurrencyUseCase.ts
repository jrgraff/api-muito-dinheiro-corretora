import { inject, injectable } from "tsyringe";

import { ICurrenciesRepository } from "../../repositories/ICurrenciesRepository";
import { Currency } from "../../typeorm/entities/Currency";

interface IRequest {
  id: string;
  name: string;
  rate: number;
}

@injectable()
class CreateCurrencyUseCase {
  constructor(
    @inject("CurrenciesRepository")
    private currenciesRepository: ICurrenciesRepository
  ) {}

  async execute({ id, name, rate }: IRequest): Promise<Currency> {
    const currency = await this.currenciesRepository.create({ id, name, rate });
    
    return currency;
  }
}

export { CreateCurrencyUseCase }
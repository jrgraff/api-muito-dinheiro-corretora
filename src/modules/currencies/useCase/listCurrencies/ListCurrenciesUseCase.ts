import { inject, injectable } from "tsyringe";

import { ICurrenciesRepository } from "../../repositories/ICurrenciesRepository";
import { Currency } from "../../typeorm/entities/Currency";

@injectable()
class ListCurrenciesUseCase {
  constructor(
    @inject("CurrenciesRepository")
    private currenciesRepository: ICurrenciesRepository
  ) {}

  async execute(): Promise<Currency[]> {
    const categories = await this.currenciesRepository.list();

    return categories;
  }
}

export { ListCurrenciesUseCase };
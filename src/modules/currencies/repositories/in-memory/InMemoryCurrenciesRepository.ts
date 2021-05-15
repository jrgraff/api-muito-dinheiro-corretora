import { ICreateCurrencyDTO } from "../../dtos";
import { Currency } from "../../typeorm/entities/Currency";
import { ICurrenciesRepository } from "../ICurrenciesRepository";

export class InMemoryCurrenciesRepository implements ICurrenciesRepository {
  currencies: Currency[] = [];
  
  async create (data: ICreateCurrencyDTO): Promise<Currency> {
    const currency = new Currency();

    Object.assign(currency, {
      ...data,
    })

    this.currencies.push(currency);

    return currency;
  }

  async findById(id: string): Promise<Currency> {
    return this.currencies.find((currency) => currency.id === id);
  }

  async list(): Promise<Currency[]> {
    return this.currencies;
  }
}
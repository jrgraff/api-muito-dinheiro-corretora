import { getRepository, Repository } from 'typeorm';

import { ICreateCurrencyDTO } from '../../dtos';
import { ICurrenciesRepository } from '../../repositories/ICurrenciesRepository';
import { Currency } from '../entities/Currency';

export class CurrenciesRepository implements ICurrenciesRepository {
  private repository: Repository<Currency>;

  constructor() {
    this.repository = getRepository(Currency);
  }

  async create( data: ICreateCurrencyDTO): Promise<Currency> {
    const currency = this.repository.create(data)

    return this.repository.save(currency);
  }

  async findById(id: string): Promise<Currency> {
    const currency = await this.repository.findOne(id)

    return currency
  }
  
  async list(): Promise<Currency[]> {
    const currencies = await this.repository.find();

    return currencies;
  }
}

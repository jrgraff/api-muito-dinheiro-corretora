import { getRepository, Repository } from 'typeorm';

import { ICreateExchangeDTO } from '../../dtos';
import { IExchangesRepository } from '../../repositories/IExchangesRepository';
import { Exchange } from '../entities/Exchange';

export class ExchangesRepository implements IExchangesRepository {
  private repository: Repository<Exchange>;

  constructor() {
    this.repository = getRepository(Exchange);
  }

  async create( data: ICreateExchangeDTO): Promise<Exchange> {
    const exchange = this.repository.create(data)

    return this.repository.save(exchange);
  }
}

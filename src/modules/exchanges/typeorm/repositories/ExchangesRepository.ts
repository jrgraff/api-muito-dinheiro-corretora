import { getRepository, Repository } from 'typeorm';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { ICreateExchangeDTO } from '../../dtos';
import { IExchangesRepository } from '../../repositories/IExchangesRepository';
import { Exchange } from '../entities/Exchange';

dayjs.extend(utc);

export class ExchangesRepository implements IExchangesRepository {
  private repository: Repository<Exchange>;

  constructor() {
    this.repository = getRepository(Exchange);
  }

  async create( data: ICreateExchangeDTO): Promise<Exchange> {
    const exchange = this.repository.create(data)

    return this.repository.save(exchange);
  }

  async getReport(username: string): Promise<Exchange[]> {
    let exchanges: Exchange[];

    if (username) {
      exchanges = await this.repository.find({ where: { username } });
    } else {
      exchanges = await this.repository.find();
    }

    return exchanges;
  }
}

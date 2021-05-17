import { ExchangesProps, ICreateExchangeDTO } from "../../dtos";
import { Exchange } from "../../typeorm/entities/Exchange";
import { IExchangesRepository } from "../IExchangesRepository";

export class InMemoryExchangesRepository implements IExchangesRepository {
  exchanges: Exchange[] = []

  async create ({
      username,
      from_currency,
      to_currency,
      original_amount,
      converted_amount,
      charged_fee,
  }: ICreateExchangeDTO): Promise<Exchange> {
    const exchange = new Exchange();

    Object.assign(exchange, {
      username,
      from_currency,
      to_currency,
      original_amount,
      converted_amount,
      charged_fee,
    })

    this.exchanges.push(exchange);

    return exchange;
  }

  getReport: (username: string, initial_date: string, end_date: string) => Promise<ExchangesProps>;
}
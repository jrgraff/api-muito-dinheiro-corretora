import { getRepository, Repository } from 'typeorm';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { ExchangesProps, ICreateExchangeDTO } from '../../dtos';
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

  async getReport(
    username: string,
    initial_date: string,
    end_date: string
  ): Promise<ExchangesProps> {
    let initial_date_string: string
    let end_date_string: string

    let exchanges: ExchangesProps = {
      exchange: [null],
      totals: {
        charged_fee_total: 0, 
        exchange_total_to_brl: 0
    }};

    exchanges.exchange.pop();

    if (!initial_date) {
      initial_date_string = dayjs('2021-05-10').local().format();
    } else {
      initial_date_string = initial_date
    }

    if (!end_date) {
      end_date_string = dayjs().local().format();
    } else {
      end_date_string = end_date
    }

    let responses = await this.repository.find();

    if (username) {
      responses = await this.repository.find({ where: { username } });
    }
    responses.map((response) => {
      if((dayjs(response.created_at) >= dayjs(initial_date_string))
        && (dayjs(response.created_at) <= dayjs(end_date_string).add(1, "days"))
      ) {
        
        exchanges.exchange.push({
          username: response.username,
          from_currency: response.from_currency,
          to_currency: response.to_currency,
          original_amount: response.original_amount,
          converted_amount: response.converted_amount,
          charged_fee: response.charged_fee,
          created_at: response.created_at,
        })

        exchanges.totals.charged_fee_total += Number(response.charged_fee)
        exchanges.totals.exchange_total_to_brl += Number(response.converted_amount_to_brl)
      }
    })

    return exchanges;
  }
}

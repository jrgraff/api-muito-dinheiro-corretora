import { ExchangesProps, ICreateExchangeDTO } from '../dtos';
import { Exchange } from '../typeorm/entities/Exchange';

export interface IExchangesRepository {
  create: (data: ICreateExchangeDTO) => Promise<Exchange>;
  getReport: (
    username: string, 
    initial_date: string, 
    end_date: string
  ) => Promise<ExchangesProps>;
}

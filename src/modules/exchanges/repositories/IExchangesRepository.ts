import { ICreateExchangeDTO } from '../dtos';
import { Exchange } from '../typeorm/entities/Exchange';

export interface IExchangesRepository {
  create: (data: ICreateExchangeDTO) => Promise<Exchange>;
  getReport: (username: string) => Promise<Exchange[]>;
}

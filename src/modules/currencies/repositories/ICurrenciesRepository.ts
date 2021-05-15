import { ICreateCurrencyDTO } from '../dtos';
import { Currency } from '../typeorm/entities/Currency';

export interface ICurrenciesRepository {
  create: (data: ICreateCurrencyDTO) => Promise<Currency>;
  findById: (id: string) => Promise<Currency>
  list: () => Promise<Currency[]>
}

import { inject, injectable } from "tsyringe";

import { IExchangesRepository } from "../../repositories/IExchangesRepository";
import { Exchange } from "../../typeorm/entities/Exchange";

interface IRequest {
  username: string;
  from_currency: string;
  to_currency: string;
  original_amount: number;
}

@injectable()
class CreateExchangeUseCase {
  constructor(
    @inject("ExchangesRepository")
    private exchangesRepository: IExchangesRepository
  ) {}

  async execute(data: IRequest): Promise<Exchange> {
    const exchangeOperation = await this.exchangesRepository.create({
      ...data,
      converted_amount: 100,
      charged_fee: 10,
    });

    return exchangeOperation;
  }
}

export { CreateExchangeUseCase }
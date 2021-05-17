import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICurrenciesRepository } from "../../../currencies/repositories/ICurrenciesRepository";
import { IExchangesRepository } from "../../repositories/IExchangesRepository";
import { Exchange } from "../../typeorm/entities/Exchange";

interface IRequest {
  username: string;
  from_currency_id: string;
  to_currency_id: string;
  original_amount: number;
}

@injectable()
class CreateExchangeUseCase {
  constructor(
    @inject("ExchangesRepository")
    private exchangesRepository: IExchangesRepository,

    @inject("CurrenciesRepository")
    private currenciesRepository: ICurrenciesRepository
  ) {}

  async execute({
    username,
    from_currency_id,
    to_currency_id,
    original_amount
  }: IRequest): Promise<Exchange> {
    const from_currency = await this.currenciesRepository.findById(from_currency_id)
    if (!from_currency) {
      throw new AppError("Origin currency id does not exists")
    }
    
    const to_currency = await this.currenciesRepository.findById(to_currency_id)
    if (!to_currency) {
      throw new AppError("Target currency id does not exists")
    }

    const original_amount_to_brl = original_amount / from_currency.rate
    
    const charged_fee = original_amount_to_brl * 0.1 //10%
    const converted_amount_to_brl = original_amount_to_brl - charged_fee

    const converted_amount = original_amount_to_brl * to_currency.rate

    const exchangeOperation = await this.exchangesRepository.create({
      username,
      from_currency: from_currency.id,
      to_currency: to_currency.id,
      original_amount,
      converted_amount_to_brl,
      converted_amount,
      charged_fee,
    });

    return exchangeOperation;
  }
}

export { CreateExchangeUseCase }
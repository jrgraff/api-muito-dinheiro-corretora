import { inject, injectable } from "tsyringe";

import { ExchangesProps } from "../../dtos";
import { IExchangesRepository } from "../../repositories/IExchangesRepository";

interface IRequest {
  username: string;
  initial_date: string;
  end_date: string;
}

@injectable()
class ListExchangesUseCase {
  constructor(
    @inject("ExchangesRepository")
    private exchangesRepository: IExchangesRepository,
  ) {}

  async execute({ username, initial_date, end_date }: IRequest): Promise<ExchangesProps> {
    const exchanges = await this.exchangesRepository.getReport(
      username,
      initial_date,
      end_date
    );

    return exchanges;
  }
}

export { ListExchangesUseCase };
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateExchangeUseCase } from './CreateExchangeUseCase';

class CreateExchangeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      username,
      from_currency,
      to_currency,
      original_amount
    } = request.body;

    const createExchange = container.resolve(CreateExchangeUseCase);

    const exchange = await createExchange.execute({
      username,
      from_currency_id: from_currency,
      to_currency_id: to_currency,
      original_amount
    });

    return response.status(201).json(exchange);
  }
}

export { CreateExchangeController }
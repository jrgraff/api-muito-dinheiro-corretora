import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCurrencyUseCase } from './CreateCurrencyUseCase';

class CreateCurrencyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      name,
      rate,
    } = request.body;

    const createCurrency = container.resolve(CreateCurrencyUseCase);

    const currency = await createCurrency.execute({
      id: id.toUpperCase(),
      name,
      rate,
    });

    return response.status(201).json(currency);
  }
}

export { CreateCurrencyController }
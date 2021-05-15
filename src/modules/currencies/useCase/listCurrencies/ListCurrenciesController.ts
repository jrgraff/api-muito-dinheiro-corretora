import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCurrenciesUseCase } from "./ListCurrenciesUseCase";

class ListCurrenciesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCurrenciesUseCase = container.resolve(ListCurrenciesUseCase)

    const allCurrencies = await listCurrenciesUseCase.execute();

    return response.json(allCurrencies)
  }
}

export { ListCurrenciesController }
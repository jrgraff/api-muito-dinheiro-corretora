import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListExchangesUseCase } from "./ListExchangesUseCase";

class ListExchangesController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { username, initial_date, end_date } = request.query

    const listExchangesUseCase = container.resolve(ListExchangesUseCase)

    const cars = await listExchangesUseCase.execute({
      username: username as string,
      initial_date: initial_date as string,
      end_date: end_date as string,
    });

    return response.json(cars);
  }
}

export { ListExchangesController }
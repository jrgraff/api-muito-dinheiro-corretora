import 'reflect-metadata';

import express from "express";

import { AppError } from "./shared/errors/AppErrors";
import { router } from "./shared/routes";
import './database';
import './shared/container'

const app = express();

app.use(express.json());

app.use('/', router);

app.use(
  (err: Error, request: express.Request, response: express.Response, _next: express.NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message} `,
    });
  }
);

export { app };
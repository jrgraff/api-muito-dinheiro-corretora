export interface ICreateExchangeDTO {
  username: string;
  from_currency: string;
  to_currency: string;
  original_amount: number;
  converted_amount: number;
  charged_fee: number;
}


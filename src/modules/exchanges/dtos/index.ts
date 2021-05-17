export interface ICreateExchangeDTO {
  username: string;
  from_currency: string;
  to_currency: string;
  original_amount: number;
  converted_amount_to_brl: number;
  converted_amount: number;
  charged_fee: number;
}

export interface ExchangesProps {
  exchange: [{
    username: string,
    from_currency: string,
    to_currency: string,
    original_amount: number,
    converted_amount: number,
    charged_fee: number,
    created_at: Date,
  }],
  totals: {
    charged_fee_total: number,
    exchange_total_to_brl: number,
  }
}
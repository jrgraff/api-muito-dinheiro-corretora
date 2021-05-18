import dayjs from "dayjs";
import { ExchangesProps } from "../../dtos";

export function listExchangesMapper(initial_date, end_date, exchanges) {
    let initial_date_string: string
    let end_date_string: string

    let report: ExchangesProps = {
      exchange: [null],
      totals: {
        charged_fee_total: null,
        exchange_total_to_brl: null
      }
    };
    report.exchange.pop();

    let charged_fee_total = 0
    let exchange_total_to_brl = 0

    if (!initial_date) {
      initial_date_string = dayjs('2021-05-10').local().format();
    } else {
      initial_date_string = initial_date
    }

    if (!end_date) {
      end_date_string = dayjs().local().format();
    } else {
      end_date_string = end_date
    }

    exchanges.map((exchange) => {
      if ((dayjs(exchange.created_at) >= dayjs(initial_date_string))
        && (dayjs(exchange.created_at) <= dayjs(end_date_string).add(1, "days"))
      ) {
        

        report.exchange.push({
          username: exchange.username,
          from_currency: exchange.from_currency,
          to_currency: exchange.to_currency,
          original_amount: exchange.original_amount,
          converted_amount: exchange.converted_amount,
          charged_fee: exchange.charged_fee,
          created_at: exchange.created_at,
        })

        charged_fee_total += Number(exchange.charged_fee)
        exchange_total_to_brl += Number(exchange.converted_amount_to_brl)
      }
    })

    report.totals.charged_fee_total = charged_fee_total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    report.totals.exchange_total_to_brl = exchange_total_to_brl.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return report;
  }

import { v4 as uuid } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Currency } from '../../../currencies/typeorm/entities/Currency';

@Entity('exchanges')
export class Exchange {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  from_currency: string;

  @ManyToOne(() => Currency, currency => currency.id, {
    cascade: true
  })
  @JoinColumn({ name: 'from_currency' })

  @Column()
  to_currency: string;

  @ManyToOne(() => Currency, currency => currency.id, {
    cascade: true
  })
  @JoinColumn({ name: 'to_currency' })

  @Column('decimal', { precision: 12, scale: 2 })
  original_amount: number;

  @Column('decimal', { precision: 12, scale: 2 })
  converted_amount_to_brl: number;

  @Column('decimal', { precision: 12, scale: 2 })
  converted_amount: number;

  @Column('decimal', { precision: 12, scale: 2 })
  charged_fee: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

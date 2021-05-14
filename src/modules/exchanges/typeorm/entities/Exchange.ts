import { v4 as uuid } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@Entity('exchanges')
export class Exchange {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  from_currency: string;

  @Column()
  to_currency: string;

  @Column('decimal', { precision: 5, scale: 2 })
  original_amount: number;

  @Column('decimal', { precision: 5, scale: 2 })
  converted_amount: number;

  @Column('decimal', { precision: 5, scale: 2 })
  charged_fee: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

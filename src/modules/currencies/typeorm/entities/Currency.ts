import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@Entity('currencies')
export class Currency {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column('decimal', { precision: 5, scale: 2 })
  rate: number;

  @CreateDateColumn()
  created_at: Date;
}

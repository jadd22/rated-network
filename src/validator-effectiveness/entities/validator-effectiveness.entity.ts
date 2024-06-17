import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class ValidatorEffectiveness {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  granularity: string;

  @Column()
  day: string;

  @Column('decimal', { precision: 6, scale: 2 })
  uptime: number;

  @Column()
  sumAllRewards: number;

  @Column('decimal', { precision: 6, scale: 2 })
  attesterEffectiveness: number;
}

import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class ValidatorEffectiveness {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  day: string;

  @Column('decimal', { precision: 6, scale: 2 })
  uptime: number;

  @Column()
  sumAllRewards: number;

  @Column('decimal', { precision: 30, scale: 2 })
  attesterEffectiveness: number;
  @Column()
  startEpoch: number;
  @Column()
  endEpoch: number;
  @Column('decimal', { precision: 30, scale: 2 })
  earnings: number;
  @Column('decimal', { precision: 30, scale: 2 })
  validatorEffectiveness: number;
  @Column('decimal', { precision: 30, scale: 2 })
  sumAttestationRewards: number;
  @Column('decimal', { precision: 30, scale: 2 })
  sumLateSourcePenalties: number;
  @Column()
  validatorIndex: number;
}

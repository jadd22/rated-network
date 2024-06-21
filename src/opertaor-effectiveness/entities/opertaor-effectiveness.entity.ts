import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class OpertaorEffectiveness {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  day: string;

  @Column()
  operatorId: string;

  @Column('decimal', { precision: 6, scale: 2 })
  avgUptime: number;

  @Column()
  validatorCount: number;

  @Column('decimal', { precision: 30, scale: 2 })
  avgValidatorEffectiveness: number;
  @Column()
  startEpoch: number;
  @Column()
  endEpoch: number;
  @Column('decimal', { precision: 30, scale: 2 })
  totalUniqueAttestations: number;
  @Column('decimal', { precision: 30, scale: 2 })
  sumMissedAttestationRewards: number;
  @Column('decimal', { precision: 30, scale: 2 })
  sumAttestationRewards: number;
  @Column('decimal', { precision: 30, scale: 2 })
  networkPenetration: number;
  @Column({ type: 'bigint' })
  sumAllRewards: string;
}

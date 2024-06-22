import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import {
  FILTER_TYPE,
  GET_DATE,
  GRANULARITY_TYPE,
  VALIDATOR_ID,
} from 'src/shared/common';
import { ValidatorEffectivenessDto } from 'src/validator-effectiveness/dto/validator-effectiveness.dto';
import { ValidatorEffectivenessService } from 'src/validator-effectiveness/validator-effectiveness.service';

@Injectable()
export class JobService {
  private pastDay: number;
  constructor(
    private readonly validatorEffectiveness: ValidatorEffectivenessService,
  ) {
    this.pastDay = 29;
  }
  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    try {
      if (this.pastDay) {
        console.log(
          'Fetching Validator Effectiveness Every 10 seconds for past 30 days',
          this.pastDay,
        );
        let validator = new ValidatorEffectivenessDto();
        validator.validatorId = VALIDATOR_ID.ONE;
        validator.filterType = FILTER_TYPE.datetime;
        validator.granularity = GRANULARITY_TYPE.day;
        validator.from = GET_DATE(this.pastDay);
        validator.to = GET_DATE(this.pastDay);
        validator.size = 1;
        this.pastDay -= 1;
        this.validatorEffectiveness
          .getValidtorEffectiveness(validator)
          .subscribe((res) => {
            return res.data;
          });
      } else {
        console.log(
          `Fetch completed for Validator Effectiveness for past 30 days`,
        );
      }
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  }
}

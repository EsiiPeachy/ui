import { BaseDto } from './base.dto';
import { MatchDetailDto } from './match-detail.dto';

export interface MatchOverviewDto extends BaseDto {
  date: Date;
  detail: MatchDetailDto[];
}

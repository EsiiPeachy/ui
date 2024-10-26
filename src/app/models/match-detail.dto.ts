import * as internal from 'stream';
import { BaseDto } from './base.dto';
import { BeybladeDto } from './beyblade.dto';
import { PlayerDto } from './player.dto';

export interface MatchDetailDto extends BaseDto {
  player: PlayerDto[];
  score: number;
}

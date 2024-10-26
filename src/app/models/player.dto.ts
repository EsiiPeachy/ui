import { BaseDto } from './base.dto';
import { BeybladeDto } from './beyblade.dto';

export interface PlayerDto extends BaseDto {
  alias: string;
  beys: BeybladeDto[];
}

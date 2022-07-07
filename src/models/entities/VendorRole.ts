import { Entity } from './entity';
import { VendorTypeEnum } from '../enums/VendorType.enum';

export interface VendorRole extends Entity {
  user_id: number;
  vendor_type: VendorTypeEnum;
  created_at: string;
  updated_at: string;
}

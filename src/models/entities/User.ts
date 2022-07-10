import { Entity } from './entity';
import { VendorRole } from './VendorRole';

export interface User extends Entity {
  first_name: string;
  last_name?: string;
  email: string;
  description?: string;
  pic_thumb_url?: string;
  pic_original_url?: string;
  secondary_email?: string;
  phone_number?: string;
  secondary_phone_number?: string;
  is_active?: boolean;
  // added for assignee response
  password_last_updated_at?: string;
  password_update_alert_last_sent_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface UserContact extends User {
  vendor_role: VendorRole;
}

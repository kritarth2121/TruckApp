import {Entity} from "./entity";
import {VendorRole} from "./VendorRole";

export enum UserRole {
    ADMIN = "admin",
    MANAGER = "manager",
    EMPLOYEE = "employee",
    DRIVER = "driver",
    user = "user",
}

export interface User extends Entity {
    name: string;
    email: string;
    description?: string;
    pic_thumb_url?: string;
    pic_original_url?: string;
    secondary_email?: string;
    mobile_number?: string;
    role?: UserRole;
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

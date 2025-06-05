import { ColumnType, Generated, Insertable, Selectable } from 'kysely';

interface BabyTable {
  id: Generated<number>; // Primary Key
  baby_name: string;
  birth_date: ColumnType<Date, string | undefined, never>;
  user_id: number; // Foreign Key
  gender: 'MALE' | 'FEMALE'; // Enum
}

export type Baby = Selectable<BabyTable>;

interface BabyStatesTable {
  id: Generated<number>; // Primary Key
  baby_id: number; // Foreign Key
  state_type: 'FALL' | 'CRY' | 'CHOKING'; // Enum
  state_details: string | null; // Optional column
  detected_at: ColumnType<Date, string | undefined, never>;
}

export type BabyStates = Selectable<BabyStatesTable>;

interface BabyStatisticsTable {
  id: Generated<number>; // Primary Key
  baby_id: number; // Foreign Key
  start_date: ColumnType<Date, string | undefined, never>;
  end_date: ColumnType<Date, string | undefined, never>;
  fall_count: number; // Non-negative integer
  cry_count: number; // Non-negative integer
  choking_count: number; // Non-negative integer
}

export type BabyStatistics = Selectable<BabyStatisticsTable>;
export type NewBabyStatistics = Insertable<BabyStatisticsTable>;

interface NotificationTable {
  id: Generated<number>; // Primary Key
  baby_id: number; // Foreign Key
  state_id: number | null; // Foreign Key (optional)
  contact_id: number; // Foreign Key
  notification_type: 'SMS' | 'CALL' | 'PUSH'; // Enum
  sent_at: ColumnType<Date, string | undefined, never>;
  status: 'PENDING' | 'SENT' | 'FAILED'; // Enum
}

export type Notification = Selectable<NotificationTable>;
export type NewNotification = Insertable<NotificationTable>;

interface ParentContactsTable {
  id: Generated<number>; // Primary Key
  mom_phone_number: string;
  dad_phone_number: string;
  user_id: number | null; // Foreign Key
}

interface UserTable {
  id: Generated<number>; // Primary Key
  email: string;
  password: string; // 암호화된 상태로 저장
  name: string;
  created_at: ColumnType<Date, string | undefined, never>;
}

export type User = Selectable<UserTable>;

export interface Database {
  babies: BabyTable;
  baby_states: BabyStatesTable;
  baby_statistics: BabyStatisticsTable;
  notifications: NotificationTable;
  parent_contacts: ParentContactsTable;
  users: UserTable;
}

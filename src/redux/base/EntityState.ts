import { Entity } from '../../models/entities/entity';

export interface EntityState<T extends Entity = Entity> {
  entities: { [_id: number]: T };
  loadingList?: boolean;
  loadingOne?: boolean;
  error?: string;
  currentId?: number;
}

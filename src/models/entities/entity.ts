export interface Entity {
  _id: string;
}

export interface EntityMap<T extends Entity> {
  [key: number]: T;
}

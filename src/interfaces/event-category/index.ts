import { GetQueryInterface } from 'interfaces';

export interface EventCategoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EventCategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}

import { GetQueryInterface } from 'interfaces';

export interface EventMediaInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EventMediaGetQueryInterface extends GetQueryInterface {
  id?: string;
}

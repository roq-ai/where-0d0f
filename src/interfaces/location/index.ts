import { GetQueryInterface } from 'interfaces';

export interface LocationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface LocationGetQueryInterface extends GetQueryInterface {
  id?: string;
}

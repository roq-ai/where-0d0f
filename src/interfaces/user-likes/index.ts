import { GetQueryInterface } from 'interfaces';

export interface UserLikesInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserLikesGetQueryInterface extends GetQueryInterface {
  id?: string;
}

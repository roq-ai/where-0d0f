import { GetQueryInterface } from 'interfaces';

export interface UserFollowersInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserFollowersGetQueryInterface extends GetQueryInterface {
  id?: string;
}

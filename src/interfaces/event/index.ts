import { PostInterface } from 'interfaces/post';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  name: string;
  description?: string;
  location: string;
  start_time: any;
  end_time: any;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  post?: PostInterface[];
  organization?: OrganizationInterface;
  _count?: {
    post?: number;
  };
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  location?: string;
  organization_id?: string;
}

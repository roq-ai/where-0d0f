import { CommentInterface } from 'interfaces/comment';
import { LikeInterface } from 'interfaces/like';
import { UserInterface } from 'interfaces/user';
import { EventInterface } from 'interfaces/event';
import { GetQueryInterface } from 'interfaces';

export interface PostInterface {
  id?: string;
  title: string;
  content: string;
  user_id: string;
  event_id: string;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  like?: LikeInterface[];
  user?: UserInterface;
  event?: EventInterface;
  _count?: {
    comment?: number;
    like?: number;
  };
}

export interface PostGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  user_id?: string;
  event_id?: string;
}

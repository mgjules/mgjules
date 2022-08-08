import { ID } from '@directus/sdk';

export type Link = {
  id: ID;
  name: string;
  url: string;
  icon: string;
  alternate_url?: string;
  new_window?: boolean;
  status: string;
}

export type Introduction = {
  id: ID;
  introduction: string;
  avatar: string;
}

export type Tag = {
  id: ID;
  name: string;
}

export type User = {
  first_name?: string;
  last_name?: string;
  avatar?: string;
}

export type Post = {
  id: ID;
  title: string;
  slug: string;
  summary: string;
  date_created: string;
  cover_image: string;
  content: string;
  status: string;
  tags: {
    id: ID;
    tags_id: Tag;
  }[];
  user_created: User;
}

export type MySpace = {
  links: Link;
  posts: Post;
  introduction: Introduction;
  tags: Tag;
}
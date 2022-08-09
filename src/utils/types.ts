import { ID } from '@directus/sdk'

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

export type Section = {
  id: ID;
  name: string;
  icon: string;
}

export type Meta = {
  id: ID;
  base_url: string;
  lang: string;
  description: string;
  first_name: string;
  last_name: string;
  keywords: string[];
  github: string;
  username: string;
  gender: string;
  avatar: string;
}

export type Technologie = {
  id: ID;
  name: string;
  icon: string;
}

export type Task = {
  task: string;
}

export type Experience = {
  id: ID;
  company: string;
  position: string;
  from: string;
  to: string;
  technologies: {
    id: ID;
    technologies: Technologie;
  }[];
  tasks: Task[];
  status: string;
}

export type MySpace = {
  links: Link;
  posts: Post;
  introduction: Introduction;
  tags: Tag;
  sections: Section;
  meta: Meta;
  technologies: Technologie;
  experiences: Experience;

  directus_users: User;
}
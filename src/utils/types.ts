import { ID } from '@directus/sdk'

export type Link = {
  id: string
  name: string
  url: string
  icon: string
  alternate_url?: string
  new_window?: boolean
}

export type Introduction = {
  id: string
  introduction: string
  avatar: string
}

export type Tag = {
  id: ID
  name: string
}

export type User = {
  first_name?: string
  last_name?: string
  avatar?: string
}

export type Post = {
  id: ID
  title: string
  slug: string
  summary: string
  date_created: string
  cover_image: string
  content: string
  tags: {
    id: ID
    tags_id: Tag
  }[]
  user_created: User
}

export type Section = {
  id: string
  name: string
  icon: string
}

export type Meta = {
  id: string
  base_url: string
  lang: string
  description: string
  first_name: string
  last_name: string
  keywords: string[]
  github: string
  username: string
  gender: string
  avatar: string
}

export type Technology = {
  id: string
  name: string
}

export type Task = {
  task: string
}

export type Experience = {
  id: ID
  company: string
  position: string
  from: string
  to: string
  formattedFrom?: string
  formattedTo?: string
  link: string
  technologies: Technology[]
  tasks: string[]
}

export type Project = {
  id: ID
  name: string
  link: string
  description: string
  technologies: Technology[]
}

export type Contribution = {
  id: ID
  event: string
  title: string
  from: string
  to: string
  link: string
  formattedFrom?: string
  formattedTo?: string
  role: string
}

export type Award = {
  id: ID
  event: string
  description: string
  date: string
  formattedDate?: string
  link: string
  result: string
  icon: string
}

export type Interest = {
  id: ID
  name: string
  image: string
}

export type Language = {
  id: ID
  name: string
  icon: string
  level: string
}

export type MySpace = {
  links: Link
  posts: Post
  introduction: Introduction
  tags: Tag
  sections: Section
  meta: Meta
  technologies: Technology
  experiences: Experience
  projects: Project
  contributions: Contribution
  awards: Award
  interests: Interest
  languages: Language

  directus_users: User
}

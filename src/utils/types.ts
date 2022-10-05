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
  id: string
  name: string
  slug: string
}

export type User = {
  first_name?: string
  last_name?: string
  avatar?: string
}

export type Post = {
  id: string
  title: string
  slug: string
  summary: string
  cover_image: string
  content: string
  tags: Tag[]
  created_at: Date
  created_by: User
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
  id: string
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
  id: string
  name: string
  link: string
  description: string
  technologies: Technology[]
}

export type Contribution = {
  id: string
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
  id: string
  event: string
  description: string
  date: string
  formattedDate?: string
  link: string
  result: string
  icon: string
}

export type Interest = {
  id: string
  name: string
  image: string
}

export type Language = {
  id: string
  name: string
  icon: string
  level: string
}

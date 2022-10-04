import client from '../utils/api-client'
import directus from '../utils/directus-client'
import { PartialItem } from '@directus/sdk'
import {
  Introduction,
  Post,
  Link,
  Meta,
  Section,
  Experience,
  Project,
  Contribution,
  Award,
  Interest,
  Language
} from '../utils/types'

export async function getLinks(): Promise<Link[] | null | undefined> {
  const result: Link[] | null = await client.query(`
    select SiteLink {
      id,
      name,
      url,
      alternate_url,
      new_window,
      icon
    } order by .sort
  `)

  return result
}

export async function getIntroduction(): Promise<
  PartialItem<Introduction> | undefined | null
> {
  const result: Introduction | null = await client.querySingle(`
    select Introduction {
      id,
      introduction,
      avatar
    } filter .id = <uuid>$id
  `, { id: 'a4296eac-441b-11ed-924c-830c8fd1144c' })

  return result
}

export async function getPosts(): Promise<Post[] | null | undefined> {
  const posts = await directus.items('posts').readByQuery({
    fields: [
      'id',
      'title',
      'slug',
      'summary',
      'date_created',
      'cover_image',
      'content',
      'tags.*.name',
      'status'
    ],
    sort: ['-date_created'] as never,
    limit: -1
  })

  return posts.data
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await directus.items('posts').readByQuery({
    fields: [
      'id',
      'title',
      'slug',
      'summary',
      'date_created',
      'cover_image',
      'content',
      'tags.*.name',
      'user_created.*',
      'status'
    ],
    sort: ['-date_created'] as never,
    filter: {
      slug: {
        _eq: slug
      },
      status: {
        _eq: 'published'
      }
    },
    limit: 1
  })

  if (posts.data && posts.data.length > 0) {
    return posts.data[0] as Post
  }

  return null
}

export async function getSections(): Promise<Section[] | null | undefined> {
  const result: Section[] | null = await client.query(`
    select CVSection {
      id,
      name,
      icon,
    } order by .sort
  `)

  return result
}

export async function getMeta(): Promise<Meta | null | undefined> {
  const result: Meta | null = await client.querySingle(`
    select Meta {
      id,
      base_url,
      lang,
      first_name,
      last_name,
      gender,
      description,
      keywords,
      github,
      username,
      avatar
    } filter .id = <uuid>$id
  `, { id: 'bd99e066-440b-11ed-924c-9fd15527df84' })

  return result
}

export async function getExperiences(): Promise<
  Experience[] | null | undefined
> {
  const result: Experience[] | null = await client.query(`
    select CVExperience {
      id,
      company,
      position,
      from,
      to,
      link,
      tasks,
      technologies: {
        name
      } order by @sort
    } order by .from desc
  `)

  return result
}

export async function getProjects(): Promise<Project[] | null | undefined> {
  const result: Project[] | null = await client.query(`
    select CVProject {
      id,
      name,
      link,
      description,
      technologies: {
        name
      }
    } order by .sort
  `)

  return result
}

export async function getContributions(): Promise<
  Contribution[] | null | undefined
> {
  const result: Contribution[] | null = await client.query(`
    select CVContribution {
      id,
      event,
      title,
      role,
      from,
      to,
      link
    } order by .from desc
  `)

  return result
}

export async function getAwards(): Promise<Award[] | null | undefined> {
  const result: Award[] | null = await client.query(`
    select CVAward {
      id,
      event,
      description,
      result,
      date,
      link,
      icon
    } order by .date desc
  `)
  console.log(result)
  return result
}

export async function getInterests(): Promise<Interest[] | null | undefined> {
  const interests = await directus.items('interests').readByQuery({
    fields: ['id', 'name', 'image', 'status'],
    sort: ['-sort'] as never,
    limit: -1
  })

  return interests.data
}

export async function getLanguages(): Promise<Language[] | null | undefined> {
  const languages = await directus.items('languages').readByQuery({
    fields: ['id', 'name', 'icon', 'level', 'status'],
    sort: ['-sort'] as never,
    limit: -1
  })

  return languages.data
}

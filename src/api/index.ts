import client from '../utils/api-client'
import directus from '../utils/directus-client'
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

export async function getLinks(): Promise<Link[] | null> {
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
  Introduction | null
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

export async function getPosts(): Promise<Post[] | null> {
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

export async function getSections(): Promise<Section[] | null> {
  const result: Section[] | null = await client.query(`
    select CVSection {
      id,
      name,
      icon,
    } order by .sort
  `)

  return result
}

export async function getMeta(): Promise<Meta | null> {
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
  Experience[] | null
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

export async function getProjects(): Promise<Project[] | null> {
  const result: Project[] | null = await client.query(`
    select CVProject {
      id,
      name,
      link,
      description,
      technologies: {
        name
      } order by @sort
    } order by .sort
  `)

  return result
}

export async function getContributions(): Promise<
  Contribution[] | null
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

export async function getAwards(): Promise<Award[] | null> {
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

  return result
}

export async function getInterests(): Promise<Interest[] | null> {
  const result: Interest[] | null = await client.query(`
    select CVInterest {
      id,
      name,
      image
    } order by .sort
  `)

  return result
}

export async function getLanguages(): Promise<Language[] | null> {
  const result: Language[] | null = await client.query(`
    select CVLanguage {
      id,
      name,
      icon,
      level
    } order by .sort
  `)

  return result
}

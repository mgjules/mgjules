import directus from '../utils/directus-client'
import { PartialItem } from '@directus/sdk'
import { Introduction, Post, Link, Meta, Section, Experience, Project, Contribution, Award } from '../utils/types'

export async function getLinks(): Promise<Link[] | null | undefined> {
  const links = await directus.items('links').readByQuery({
    fields: ['id', 'name', 'url', 'icon', 'alternate_url', 'new_window', 'status'],
    sort: ['sort'] as never,
    filter: {
      status: {
        _eq: 'published'
      }
    },
    limit: -1,
  });

  return links.data
}

export async function getIntroduction(): Promise<PartialItem<Introduction> | undefined | null> {
  return await directus.items('introduction').readOne('01a48809-19e1-4e23-9f91-d6182ddc28bf')
}

export async function getPosts(): Promise<Post[] | null | undefined> {
  const posts = await directus.items('posts').readByQuery({
    fields: ['id', 'title', 'slug', 'summary', 'date_created', 'cover_image', 'content', 'tags.*.name', 'status'],
    sort: ['-date_created'] as never,
    filter: {
      status: {
        _eq: 'published'
      }
    },
    limit: -1,
  });

  return posts.data
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await directus.items('posts').readByQuery({
    fields: ['id', 'title', 'slug', 'summary', 'date_created', 'cover_image', 'content', 'tags.*.name', 'user_created.*', 'status'],
    sort: ['-date_created'] as never,
    filter: {
      slug: {
        _eq: slug
      },
      status: {
        _eq: 'published'
      }
    },
    limit: 1,
  });

  if (posts.data && posts.data.length > 0) {
    return posts.data[0] as Post
  }

  return null
}

export async function getSections(): Promise<Section[] | null | undefined> {
  const sections = await directus.items('sections').readByQuery({
    fields: ['id', 'name', 'icon'],
    sort: ['sort'] as never,
    limit: -1,
  });

  return sections.data
}

export async function getMeta(): Promise<PartialItem<Meta> | null | undefined> {
  return await directus.items('meta').readOne('7b0504e8-58d0-4bf3-9d70-514f486ca962')
}

export async function getExperiences(): Promise<Experience[] | null | undefined> {
  const experiences = await directus.items('experiences').readByQuery({
    fields: ['id', 'company', 'position', 'from', 'to', 'link', 'technologies.*.name', 'technologies.*.icon', 'technologies.*.saturate', 'tasks', 'status'],
    sort: ['-from'] as never,
    filter: {
      status: {
        _eq: 'published'
      }
    },
    limit: -1,
  });

  return experiences.data
}

export async function getProjects(): Promise<Project[] | null | undefined> {
  const projects = await directus.items('projects').readByQuery({
    fields: ['id', 'name', 'description', 'link', 'technologies.*.name', 'technologies.*.icon', 'technologies.*.saturate', 'status'],
    sort: ['sort'] as never,
    filter: {
      status: {
        _eq: 'published'
      }
    },
    limit: -1,
  });

  return projects.data
}

export async function getContributions(): Promise<Contribution[] | null | undefined> {
  const contributions = await directus.items('contributions').readByQuery({
    fields: ['id', 'event', 'title', 'from', 'to', 'link', 'role', 'status'],
    sort: ['-from'] as never,
    filter: {
      status: {
        _eq: 'published'
      }
    },
    limit: -1,
  });

  return contributions.data
}

export async function getAwards(): Promise<Award[] | null | undefined> {
  const awards = await directus.items('awards').readByQuery({
    fields: ['id', 'event', 'description', 'date', 'link', 'result', 'icon', 'status'],
    sort: ['-date'] as never,
    filter: {
      status: {
        _eq: 'published'
      }
    },
    limit: -1,
  });

  return awards.data
}
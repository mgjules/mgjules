import directus from "../utils/directus-client"
import { Post } from "../utils/types"

export async function getLinks() {
  const links = await directus.items('links').readByQuery({
    sort: ['sort'] as never,
    filter: {
      status: {
        _eq: "published"
      }
    },
    limit: -1,
  });

  return links.data
}

export async function getIntroduction() {
  return await directus.items('introduction').readOne("01a48809-19e1-4e23-9f91-d6182ddc28bf")
}

export async function getPosts() {
  const posts = await directus.items('posts').readByQuery({
    fields: ['id', 'title', 'slug', 'summary', 'date_created', 'cover_image', 'content', 'status', 'tags.*.name'],
    sort: ['date_created'] as never,
    filter: {
      status: {
        _eq: "published"
      }
    },
    limit: -1,
  });

  return posts.data
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await directus.items('posts').readByQuery({
    fields: ['id', 'title', 'slug', 'summary', 'date_created', 'cover_image', 'content', 'status', 'tags.*.name', 'user_created.*'],
    sort: ['date_created'] as never,
    filter: {
      slug: {
        _eq: slug
      },
      status: {
        _eq: "published"
      }
    },
    limit: 1,
  });

  if (posts.data && posts.data.length > 0) {
    return posts.data[0]
  }

  return null
}

export async function getSections() {
  const sections = await directus.items('sections').readByQuery({
    sort: ['sort'] as never,
    limit: -1,
  });

  return sections.data
}
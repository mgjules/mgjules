import directus from "../utils/directus-client"

export async function getLinks() {
  const raw = await directus.items('links').readByQuery({
    sort: ['sort'] as never,
    filter: {
      status: {
        _eq: "published"
      }
    },
    limit: -1,
  });

  return raw.data
}

export async function getIntroduction() {
  return await directus.items('introduction').readOne("01a48809-19e1-4e23-9f91-d6182ddc28bf")
}

export async function getPosts() {
  const raw = await directus.items('posts').readByQuery({
    fields: ['id', 'title', 'slug', 'summary', 'date_created', 'cover_image', 'content', 'status', 'tags.*.name'],
    sort: ['date_created'] as never,
    filter: {
      status: {
        _eq: "published"
      }
    },
    limit: -1,
  });

  return raw.data
}
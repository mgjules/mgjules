import directus from "../utils/directus-client"
import { Link, Introduction } from "../utils/types"

export async function getLinks(): Promise<Link[]> {
  const raw = await directus.items('links').readByQuery({
    sort: ['sort'] as never,
    filter: {
      status: {
        _eq: "published"
      }
    },
    limit: -1,
  });

  return raw.data as Link[] || []
}

export async function getIntroduction(): Promise<Introduction> {
  return await directus.items('introduction').readOne("01a48809-19e1-4e23-9f91-d6182ddc28bf") as Introduction
}

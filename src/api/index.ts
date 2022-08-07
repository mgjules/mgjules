import directus from "../utils/directus-client"
import { Link } from "../utils/types"

export async function getLinks(): Link[] {
  const raw = await directus.items('links').readByQuery({
    sort: ['sort'],
    filter: {
      status: {
        _eq: "published"
      }
    },
    limit: -1,
  });

  return raw.data as Link[] || []
}
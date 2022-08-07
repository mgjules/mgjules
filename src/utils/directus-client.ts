import { Directus } from '@directus/sdk';

export default new Directus(import.meta.env.DIRECTUS_URL, {
  auth: {
    staticToken: import.meta.env.DIRECTUS_STATIC_TOKEN
  }
});
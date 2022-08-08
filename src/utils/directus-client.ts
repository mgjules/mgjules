import { Directus } from '@directus/sdk';
import { MySpace } from './types';

export default new Directus<MySpace>(import.meta.env.DIRECTUS_URL, {
  auth: {
    staticToken: import.meta.env.DIRECTUS_STATIC_TOKEN
  }
});
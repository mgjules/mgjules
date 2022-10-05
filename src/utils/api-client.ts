import { createClient } from "edgedb";

export default createClient({
  dsn: import.meta.env.EDGEDB_DSN
});

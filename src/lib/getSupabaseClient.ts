import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

export const client = createClient<Database>(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
);
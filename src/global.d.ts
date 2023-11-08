import type { Database as DB } from "@/lib/database.types";

declare global {
  type Database = DB;
  type Products = DB["public"]["Tables"]["products"]["Row"];
}

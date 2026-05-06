import { Pool } from "pg";

let pool: Pool | null = null;

function formatSql(sql: string, params?: any[]) {
  if (!params || params.length === 0) {
    return { text: sql, values: [] };
  }

  let index = 1;
  const text = sql.replace(/\?/g, () => `$${index++}`);
  return { text, values: params };
}

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 5432,
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "PostGree14!",
      database: process.env.DB_NAME || "administrasi_server",
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });
  }
  return pool;
}

export async function query<T = unknown>(
  sql: string,
  params?: any[]
): Promise<T[]> {
  const db = getPool();
  const { text, values } = formatSql(sql, params);
  const result = await db.query(text, values);
  return result.rows as T[];
}

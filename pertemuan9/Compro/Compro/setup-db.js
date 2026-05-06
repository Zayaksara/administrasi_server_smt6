import { query } from "./src/lib/db.js";

async function setupDatabase() {
  try {
    console.log("Setting up database tables...");

    // Create users table
    await query(`
      CREATE TABLE IF NOT EXISTS users (
        id         SERIAL PRIMARY KEY,
        username   VARCHAR(100) NOT NULL UNIQUE,
        password   VARCHAR(255) NOT NULL,
        role       VARCHAR(50)  NOT NULL DEFAULT 'user',
        created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("Users table created successfully!");

    // Create layanan table
    await query(`
      CREATE TABLE IF NOT EXISTS layanan (
        id         SERIAL PRIMARY KEY,
        nama       VARCHAR(120)  NOT NULL,
        icon       VARCHAR(60)   NOT NULL DEFAULT 'code',
        deskripsi  TEXT          NOT NULL,
        urutan     SMALLINT      NOT NULL DEFAULT 0,
        created_at TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("Layanan table created successfully!");

    // Create berita table
    await query(`
      CREATE TABLE IF NOT EXISTS berita (
        id           SERIAL PRIMARY KEY,
        judul        VARCHAR(255)  NOT NULL,
        slug         VARCHAR(280)  NOT NULL UNIQUE,
        excerpt      VARCHAR(400)  NOT NULL,
        konten       TEXT          NOT NULL,
        image        VARCHAR(512)  NULL,
        is_published BOOLEAN       NOT NULL DEFAULT true,
        created_at   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("Berita table created successfully!");

    // Create kontak table
    await query(`
      CREATE TABLE IF NOT EXISTS kontak (
        id         SERIAL PRIMARY KEY,
        nama       VARCHAR(120) NOT NULL,
        email      VARCHAR(200) NOT NULL,
        subjek     VARCHAR(200) NOT NULL DEFAULT '',
        pesan      TEXT         NOT NULL,
        is_read    BOOLEAN      NOT NULL DEFAULT false,
        created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("Kontak table created successfully!");

    console.log("Database setup completed!");

  } catch (error) {
    console.error("Error setting up database:", error);
  } finally {
    process.exit(0);
  }
}

setupDatabase();
import bcrypt from "bcryptjs";
import { query } from "./src/lib/db.js";

async function createAdminUser() {
  try {
    const username = "admin";
    const password = "admin123";
    const role = "admin";

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Check if user already exists
    const existingUsers = await query(
      "SELECT id FROM users WHERE username = $1",
      [username]
    );

    if (existingUsers.length > 0) {
      console.log("User 'admin' already exists!");
      return;
    }

    // Insert new user
    await query(
      "INSERT INTO users (username, password, role) VALUES ($1, $2, $3)",
      [username, hashedPassword, role]
    );

    console.log("Admin user created successfully!");
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Role: ${role}`);

  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    process.exit(0);
  }
}

createAdminUser();
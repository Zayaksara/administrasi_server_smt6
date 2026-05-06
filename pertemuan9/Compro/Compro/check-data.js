import { query } from "./src/lib/db.js";

async function checkData() {
  try {
    console.log("Checking database data...\n");

    // Check berita count
    const beritaCount = await query("SELECT COUNT(*) as count FROM berita");
    console.log(`📄 Berita: ${beritaCount[0].count} artikel`);

    // Check layanan count
    const layananCount = await query("SELECT COUNT(*) as count FROM layanan");
    console.log(`🛠️  Layanan: ${layananCount[0].count} layanan`);

    // Check users coun
    const usersCount = await query("SELECT COUNT(*) as count FROM users");
    console.log(`👤 Users: ${usersCount[0].count} user`);

    // Check kontak count
    const kontakCount = await query("SELECT COUNT(*) as count FROM kontak");
    console.log(`📬 Kontak: ${kontakCount[0].count} pesan`);

    console.log("\n✅ Database check completed!");

  } catch (error) {
    console.error("Error checking data:", error);
  } finally {
    process.exit(0);
  }
}

checkData();
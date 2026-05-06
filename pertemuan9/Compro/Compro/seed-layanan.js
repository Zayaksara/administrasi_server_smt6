import { query } from "./src/lib/db.js";

async function seedLayanan() {
  try {
    console.log("Seeding layanan data...");

    // Seed layanan
    const layananData = [
      {
        nama: 'Integrasi AI',
        icon: 'brain',
        deskripsi: 'Implementasi kecerdasan buatan tingkat lanjut untuk mengotomatisasi kompleksitas dan meningkatkan efisiensi operasional bisnis Anda dengan teknologi machine learning terkini.',
        urutan: 1
      },
      {
        nama: 'Cloud Nexus',
        icon: 'cloud',
        deskripsi: 'Arsitektur cloud masa depan yang skalabel, aman, dan dirancang khusus untuk performa tinggi tanpa batas. Migrasi, optimasi, dan manajemen infrastruktur cloud enterprise.',
        urutan: 2
      },
      {
        nama: 'Cyber Fortress',
        icon: 'shield',
        deskripsi: 'Sistem keamanan siber mutakhir dengan perlindungan proaktif 24/7 yang menjaga aset digital Anda dari ancaman tercanggih menggunakan AI-driven threat intelligence.',
        urutan: 3
      },
      {
        nama: 'Custom Software',
        icon: 'layers',
        deskripsi: 'Pengembangan aplikasi web dan mobile yang disesuaikan penuh dengan kebutuhan bisnis Anda — dari ideasi hingga deployment production.',
        urutan: 4
      },
      {
        nama: 'Data Analytics',
        icon: 'bar-chart',
        deskripsi: 'Transformasi data mentah menjadi insight bisnis yang actionable melalui dashboard real-time, predictive analytics, dan laporan interaktif berbasis BI tools modern.',
        urutan: 5
      },
      {
        nama: 'DevOps & CI/CD',
        icon: 'git-merge',
        deskripsi: 'Automasi pipeline delivery, containerisasi (Docker/Kubernetes), dan kultur DevOps yang mempercepat time-to-market hingga 10x lebih cepat.',
        urutan: 6
      }
    ];

    for (const layanan of layananData) {
      try {
        await query(
          `INSERT INTO layanan (nama, icon, deskripsi, urutan)
           VALUES ($1, $2, $3, $4)
           ON CONFLICT (id) DO NOTHING`,
          [layanan.nama, layanan.icon, layanan.deskripsi, layanan.urutan]
        );
        console.log(`✓ Layanan "${layanan.nama}" berhasil di-seed`);
      } catch (error) {
        console.error(`✗ Error seeding layanan "${layanan.nama}":`, error.message);
      }
    }

    console.log("Layanan seeding completed!");

  } catch (error) {
    console.error("Error seeding layanan:", error);
  } finally {
    process.exit(0);
  }
}

seedLayanan();
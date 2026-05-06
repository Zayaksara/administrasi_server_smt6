import { query } from "./src/lib/db.js";

async function seedBerita() {
  try {
    console.log("Seeding berita data...");

    // Seed berita
    const beritaData = [
      {
        judul: 'DigiTech Raih Penghargaan Best Tech Company 2026',
        slug: 'digitech-raih-penghargaan-best-tech-company-2026',
        excerpt: 'DigiTech berhasil meraih penghargaan bergengsi sebagai Best Tech Company 2026 dari Asia Pacific Innovation Awards atas kontribusinya dalam transformasi digital di kawasan ASEAN.',
        konten: `<p>DigiTech dengan bangga mengumumkan bahwa perusahaan telah berhasil meraih penghargaan bergengsi <strong>Best Tech Company 2026</strong> dari Asia Pacific Innovation Awards. Penghargaan ini diberikan atas kontribusi luar biasa DigiTech dalam memimpin transformasi digital di kawasan ASEAN.</p><p>Dalam acara yang dihadiri lebih dari 500 pemimpin industri teknologi dari 15 negara, DigiTech diakui atas inovasi produk-produknya yang revolusioner, dampak sosial yang signifikan, dan pertumbuhan bisnis yang konsisten selama tiga tahun berturut-turut.</p><p>"Penghargaan ini bukan hanya milik tim DigiTech, tapi juga milik seluruh klien dan mitra yang telah mempercayai kami," ujar CEO DigiTech, Moh Firdaus.</p>`,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
      },
      {
        judul: 'Peluncuran Platform AI Generatif DigiMind v2.0',
        slug: 'peluncuran-platform-ai-generatif-digimind-v2',
        excerpt: 'DigiTech memperkenalkan DigiMind v2.0, platform AI generatif berbahasa Indonesia pertama yang mampu memahami konteks bisnis lokal dan menghasilkan konten berkualitas tinggi secara otomatis.',
        konten: `<p>Setelah 18 bulan riset dan pengembangan, DigiTech secara resmi meluncurkan <strong>DigiMind v2.0</strong> — platform kecerdasan buatan generatif yang dirancang khusus untuk ekosistem bisnis Indonesia.</p><p>DigiMind v2.0 hadir dengan kemampuan pemahaman bahasa Indonesia yang jauh lebih akurat, dukungan untuk lebih dari 20 dialek regional, dan integrasi langsung dengan sistem ERP, CRM, serta e-commerce platform populer di Indonesia.</p><p>Platform ini telah diuji coba oleh 50+ perusahaan selama fase beta, dengan rata-rata peningkatan produktivitas sebesar <strong>340%</strong> dalam pengelolaan dokumen dan komunikasi bisnis.</p>`,
        image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80'
      },
      {
        judul: 'Kemitraan Strategis dengan AWS untuk Solusi Cloud Enterprise',
        slug: 'kemitraan-strategis-aws-cloud-enterprise',
        excerpt: 'DigiTech menandatangani perjanjian kemitraan strategis dengan Amazon Web Services (AWS) untuk menghadirkan solusi cloud enterprise kelas dunia bagi bisnis skala menengah dan besar di Indonesia.',
        konten: `<p>DigiTech dan <strong>Amazon Web Services (AWS)</strong> resmi menandatangani perjanjian kemitraan strategis yang akan memperkuat layanan cloud computing DigiTech di seluruh Indonesia.</p><p>Melalui kemitraan ini, DigiTech menjadi <em>AWS Advanced Consulting Partner</em> pertama yang berbasis di Indonesia Timur, membuka akses ke teknologi cloud AWS terdepan termasuk layanan AI/ML, IoT, dan keamanan siber untuk klien-klien enterprise.</p><p>Program kemitraan ini juga mencakup pelatihan sertifikasi AWS untuk 200 engineer DigiTech sepanjang tahun 2026, memastikan standar layanan tertinggi bagi seluruh klien.</p>`,
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
      },
      {
        judul: 'Workshop DevOps & Kubernetes Gratis untuk Startup Indonesia',
        slug: 'workshop-devops-kubernetes-gratis-startup-indonesia',
        excerpt: 'DigiTech membuka program workshop DevOps & Kubernetes gratis untuk 100 startup Indonesia terpilih sebagai bentuk komitmen mendukung ekosistem teknologi nasional.',
        konten: `<p>Sebagai bagian dari program <strong>DigiTech for Startups</strong>, kami dengan bangga mengumumkan program workshop DevOps & Kubernetes gratis untuk 100 startup Indonesia terpilih.</p><p>Workshop 3 hari intensif ini akan mencakup materi containerisasi dengan Docker, orkestrasi dengan Kubernetes, implementasi CI/CD pipeline, monitoring & observability, serta best practices keamanan cloud-native.</p><p>Peserta terpilih akan mendapatkan akses ke platform cloud DigiTech senilai Rp 5 juta selama 3 bulan, mentoring langsung dari senior engineer DigiTech, dan sertifikasi resmi yang diakui industri.</p>`,
        image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80'
      },
      {
        judul: 'Laporan Riset: Tren Keamanan Siber Indonesia 2026',
        slug: 'laporan-riset-tren-keamanan-siber-indonesia-2026',
        excerpt: 'Tim riset DigiTech menerbitkan laporan komprehensif tentang lanskap keamanan siber Indonesia 2026, mengungkap tren ancaman terbaru dan rekomendasi mitigasi untuk perusahaan Indonesia.',
        konten: `<p>Tim riset DigiTech Cyber Intelligence merilis laporan tahunan <strong>"Indonesia Cybersecurity Landscape 2026"</strong> yang menjadi referensi utama bagi lebih dari 500 CISO dan pemimpin keamanan siber di Indonesia.</p><p>Laporan setebal 120 halaman ini menganalisis lebih dari 2 juta insiden keamanan yang terjadi sepanjang 2025, mengidentifikasi pola serangan baru, dan memberikan rekomendasi praktis untuk memperkuat postur keamanan organisasi di era AI.</p><p>Temuan kunci: serangan ransomware meningkat 280% YoY, phishing via AI-generated content menjadi ancaman terbesar, dan 73% perusahaan Indonesia belum memiliki incident response plan yang memadai.</p>`,
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
      }
    ];

    for (const berita of beritaData) {
      try {
        await query(
          `INSERT INTO berita (judul, slug, excerpt, konten, image, is_published)
           VALUES ($1, $2, $3, $4, $5, $6)
           ON CONFLICT (slug) DO NOTHING`,
          [berita.judul, berita.slug, berita.excerpt, berita.konten, berita.image, true]
        );
        console.log(`✓ Berita "${berita.judul}" berhasil di-seed`);
      } catch (error) {
        console.error(`✗ Error seeding berita "${berita.judul}":`, error.message);
      }
    }

    console.log("Berita seeding completed!");

  } catch (error) {
    console.error("Error seeding berita:", error);
  } finally {
    process.exit(0);
  }
}

seedBerita();
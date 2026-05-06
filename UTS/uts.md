# Spesifikasi
1. Region: Wajib menggunakan region Singapore (ap-southeast-1).
2. Compute: * Amazon EC2 Instance dengan OS Ubuntu 22.04 LTS atau 24.04 LTS.
3. Tipe Instance wajib t2.micro atau t3.micro (Free Tier Eligible).
4. Storage: 8 GB General Purpose SSD (gp2/gp3).
5. Security & Access:
6. Wajib menggunakan Key Pair (Tidak boleh menggunakan password/EIC).
7. Security Group: Hanya buka Port 80 (HTTP) dari Anywhere (0.0.0.0/0) dan Port 22 (SSH) hanya dari IP Publik Anda sendiri (My IP).
8. Web Server: Menggunakan Nginx (Bukan Apache).
9. Monitoring: Wajib mengaktifkan Detailed CloudWatch Monitoring dan membuat 1 buah Alarm jika penggunaan CPU menyentuh >80%.



## Tahap 1: Provisioning & Security (30 Poin)
- Buat instance EC2 sesuai spesifikasi di atas.
- Buat Elastic IP (EIP) dan Attach (hubungkan) EIP tersebut ke instance EC2 Anda secara permanen.
- Konfigurasi Security Group dengan ketat sesuai aturan di atas.

## Tahap 2: Konfigurasi Web Server (30 Poin)
- Lakukan remote login (SSH) ke dalam server Anda menggunakan PuTTY atau Terminal.
- Lakukan instalasi web server Nginx.
- Pastikan service Nginx berstatus running dan enabled.

## Tahap 3: Deployment Aplikasi Web CV (40 Poin)
- Siapkan source code Web CV / Portofolio Pribadi Anda (berbasis HTML/CSS/JS). Anda diizinkan menggunakan template gratis dari internet, namun wajib dimodifikasi dengan Data Diri Asli Anda (Foto, Riwayat Pendidikan, Skill, dll).
- Gunakan aplikasi SFTP (seperti FileZilla atau WinSCP) untuk memindahkan source code Web CV tersebut dari laptop Anda ke dalam server.
- Pindahkan source code tersebut ke Document Root Nginx/Apache (biasanya di /var/www/html).
- PENTING: Atur Ownership dan Permissions (chown & chmod) pada folder website tersebut secara benar agar Nginx (www-data) bisa membacanya tanpa terkena Error 403 Forbidden.
- Validasi Ujian: Pastikan di bagian paling bawah website CV Anda (footer) terdapat tulisan tebal: "Dideploy oleh: [Nama Lengkap Anda] - [NIM Anda]"
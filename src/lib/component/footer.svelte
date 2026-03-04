<script>
  import { viewport } from "$lib/utils.js";
</script>

<footer class="sunrise-footer-light" id="contact" use:viewport>
  
  <div class="soft-glow-bottom"></div>

  <div class="ticker-tape">
    <div class="ticker-scroll">
      <div class="ticker-track">
        <span>🚀 MASA DEPAN PESANTREN</span> <span class="dot">•</span>
        <span>SISTEM TERINTEGRASI</span> <span class="dot">•</span>
        <span>EKOSISTEM DIGITAL</span> <span class="dot">•</span>
        <span>LISENSI SEUMUR HIDUP</span> <span class="dot">•</span>
        <span>🚀 MASA DEPAN PESANTREN</span> <span class="dot">•</span>
        <span>SISTEM TERINTEGRASI</span> <span class="dot">•</span>
        <span>EKOSISTEM DIGITAL</span> <span class="dot">•</span>
        <span>LISENSI SEUMUR HIDUP</span> <span class="dot">•</span>
      </div>
    </div>
  </div>

  <div class="container relative z-10">
    
    <div class="footer-cta stagger-item">
      <h2 class="hero-title">Waktunya Pesantren <br><span class="text-gradient">Naik Kelas.</span></h2>
      <p class="subtitle">Bergabung dengan ekosistem digital terbesar untuk lembaga pendidikan Islam. Efisiensi, transparansi, dan kemandirian teknologi dimulai dari sini.</p>
      
      <a href="https://wa.me/6281282251136" class="btn-action-dark">
        Mulai Konsultasi Gratis 
        <svg class="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </a>
    </div>

    <div class="footer-links-row stagger-item">
      
      <div class="brand-info">
        <img src="/logo-khwarizmi.jpg" alt="Logo Al-Khwarizmi" class="footer-logo">
        <p class="address-text">
          Dramaga, Bogor<br>
          Jawa Barat, Indonesia<br><br>
          <span class="highlight-contact">0812 8225 1136</span><br>
          hello@alkhwarizmi.id
        </p>
      </div>

      <div class="link-group">
        <h4>Ekosistem Produk</h4>
        <a href="#">Sistem Akademik</a>
        <a href="#">Sistem Keuangan</a>
        <a href="#">Aplikasi Kesantrian</a>
        <a href="#">Portal Wali Santri</a>
      </div>

      <div class="link-group">
        <h4>Perusahaan</h4>
        <a href="#">Tentang Kami</a>
        <a href="#">Kisah Sukses</a>
        <a href="#">Blog & Edukasi</a>
        <a href="#">Peluang Karir</a>
      </div>

      <div class="link-group">
        <h4>Sosial Media</h4>
        <a href="https://www.instagram.com/alkhwarizmi.id/?hl=id" target="_blank" class="social-link">Instagram ↗</a>
        <a href="https://khwarizmi.co.id/cgi-sys/suspendedpage.cgi" target="_blank" class="social-link">Website Utama ↗</a>
        <a href="https://www.youtube.com/@sekolahimpianku" target="_blank" class="social-link">YouTube ↗</a>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© {new Date().getFullYear()} PT. Khwarizmi Kreatif. All rights reserved.</p>
      <div class="legal-links">
        <a href="#">Kebijakan Privasi</a>
        <span class="divider">|</span>
        <a href="#">Syarat & Ketentuan</a>
      </div>
    </div>

  </div>

  <div class="giant-bg-text">AL-KHWARIZMI</div>

</footer>

<style>
  /* --- FONDASI TEMA TERANG --- */
  .sunrise-footer-light {
    background-color: #FAFBFC; /* Putih bersih keabu-abuan / Off-white */
    color: #0F172A; /* Teks utama Deep Slate */
    font-family: 'Inter', sans-serif;
    position: relative;
    overflow: hidden;
    padding-bottom: 30px;
    margin-top: 120px;
  }

  .container { max-width: 1200px; width: 100%; margin: 0 auto; padding: 0 20px; position: relative; z-index: 10; }

  /* --- EFEK GLOW LEMBUT --- */
  .soft-glow-bottom {
    position: absolute;
    bottom: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: 80vw;
    height: 50vw;
    /* Gradien oranye sangat transparan untuk kesan hangat */
    background: radial-gradient(ellipse at bottom, rgba(249, 115, 22, 0.08) 0%, transparent 70%);
    filter: blur(60px);
    z-index: 0;
    pointer-events: none;
  }

  /* --- PITA BERJALAN (TICKER TAPE) --- */
  .ticker-tape {
    background: linear-gradient(90deg, #EA580C, #F97316, #EA580C); 
    background-size: 200% auto;
    color: white;
    padding: 16px 0;
    transform: rotate(-2deg) scale(1.05);
    position: relative;
    top: -20px;
    z-index: 20;
    overflow: hidden;
    box-shadow: 0 10px 30px -5px rgba(234, 88, 12, 0.3);
  }

  .ticker-scroll { width: 100%; overflow: hidden; white-space: nowrap; }
  
  .ticker-track {
    display: inline-block;
    white-space: nowrap;
    animation: scrollTicker 35s linear infinite;
    font-weight: 800;
    font-size: 1.1rem;
    letter-spacing: 2px;
  }
  
  .ticker-track span { margin: 0 10px; }
  .dot { opacity: 0.6; margin: 0 20px !important; }

  @keyframes scrollTicker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); } 
  }

  /* --- CTA RAKSASA --- */
  .footer-cta {
    text-align: center;
    padding: 100px 0;
    position: relative;
    z-index: 2;
  }

  .hero-title {
    font-size: 4.8rem;
    font-weight: 900;
    line-height: 1.05;
    margin: 0 0 25px;
    letter-spacing: -2px;
    color: #022C22; /* Hijau sangat gelap kehitaman */
  }

  .text-gradient {
    background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #64748B;
    max-width: 650px;
    margin: 0 auto 50px;
    line-height: 1.6;
    font-weight: 500;
  }

  /* Tombol Aksi Gelap yang Elegan */
  .btn-action-dark {
    background: #0F172A; /* Hitam elegan */
    color: #FFFFFF;
    padding: 20px 45px;
    border-radius: 100px;
    font-size: 1.15rem;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 15px 30px -10px rgba(15, 23, 42, 0.3);
  }

  .btn-action-dark:hover {
    background: #EA580C; /* Berubah oranye saat dihover */
    color: #FFFFFF;
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -10px rgba(234, 88, 12, 0.5);
  }

  .btn-action-dark .arrow { transition: transform 0.3s ease; }
  .btn-action-dark:hover .arrow { transform: translate(5px, -5px); }

  /* --- AREA LINK BAWAH --- */
  .footer-links-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    padding-top: 60px;
    border-top: 1px solid rgba(15, 23, 42, 0.06); /* Garis pembatas halus */
    margin-bottom: 60px;
  }

  .footer-logo { width: 70px; border-radius: 12px; margin-bottom: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
  .address-text { color: #64748B; line-height: 1.7; font-size: 1rem; }
  .highlight-contact { color: #0F172A; font-weight: 800; font-size: 1.1rem; }

  .link-group h4 { color: #0F172A; font-size: 1.1rem; font-weight: 800; margin-bottom: 25px; letter-spacing: 0.5px; }
  .link-group a { 
    display: block; color: #64748B; text-decoration: none; font-size: 0.95rem; margin-bottom: 16px; font-weight: 600;
    transition: all 0.3s ease;
  }
  .link-group a:hover { color: #EA580C; transform: translateX(5px); }
  
  .social-link { 
    display: flex; justify-content: space-between; align-items: center; 
    border-bottom: 1px solid rgba(15, 23, 42, 0.08); padding-bottom: 10px; 
  }
  .social-link:hover { border-bottom-color: #EA580C; color: #EA580C; }

  /* --- GARIS BAWAH --- */
  .footer-bottom {
    display: flex; justify-content: space-between; align-items: center;
    color: #94A3B8; font-size: 0.9rem; font-weight: 600;
  }
  .legal-links { display: flex; gap: 15px; align-items: center; }
  .legal-links a { color: #94A3B8; text-decoration: none; transition: 0.3s; }
  .legal-links a:hover { color: #0F172A; }
  .divider { opacity: 0.4; }

  /* --- TEKS BACKGROUND RAKSASA --- */
  .giant-bg-text {
    font-size: 16vw; 
    font-weight: 900;
    line-height: 0.7; 
    color: rgba(15, 23, 42, 0.03); /* Sangat samar, warna abu-abu gelap */
    text-align: center;
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    z-index: 1;
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
    letter-spacing: -5px;
  }

  /* --- RESPONSIVE MOBILE --- */
  @media (max-width: 1024px) {
    .hero-title { font-size: 4rem; }
    .footer-links-row { grid-template-columns: 1fr 1fr; gap: 50px; }
    .brand-info { grid-column: span 2; }
  }

  @media (max-width: 640px) {
    .sunrise-footer-light { margin-top: 80px; }
    .hero-title { font-size: 2.8rem; }
    .subtitle { font-size: 1.05rem; padding: 0 10px; }
    .btn-action-dark { width: 100%; justify-content: center; }
    .footer-links-row { grid-template-columns: 1fr; gap: 40px; }
    .brand-info { grid-column: span 1; text-align: center; }
    .footer-logo { margin: 0 auto 20px; }
    .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
    .giant-bg-text { font-size: 18vw; bottom: 0; }
  }
</style>
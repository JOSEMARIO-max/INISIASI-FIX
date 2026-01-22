<script>
  import { onMount } from "svelte";
  import { fade, fly, scale, slide } from "svelte/transition";
  import { cubicOut, elasticOut, backOut, quadInOut } from "svelte/easing";

  let loading = true;
  let scrollY = 0;
  let isMenuOpen = false;

  // --- ACTION: VIEWPORT OBSERVER ---
  function viewport(element) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          const children = entry.target.querySelectorAll('.stagger-item');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('is-visible');
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(element);
    return { destroy() { observer.disconnect(); } };
  }

  // --- DATA: FITUR ---
  const features = [
    { id: 1, icon: "👥", shortName: "HRD", title: "HRD & Kepegawaian", desc: "Kelola data asatidz dan karyawan dalam satu pintu. Hitung gaji otomatis.", points: ["Absensi GPS", "Slip Gaji WA"], image: "/HRD.png" },
    { id: 2, icon: "🎓", shortName: "Akademik", title: "Manajemen Akademik", desc: "Digitalisasi kurikulum pesantren. Rapor otomatis.", points: ["Jadwal Live", "Rekap Nilai"], image: "/MENU AKADEMIK.png" },
    { id: 3, icon: "📖", shortName: "Tahfidz", title: "Monitoring Tahfidz", desc: "Orang tua bisa melihat hafalan anak detik ini juga.", points: ["Grafik Hafalan", "Notifikasi Wali"], image: "/Home (TQ).png" },
    { id: 4, icon: "💳", shortName: "Keuangan", title: "Keuangan & SPP", desc: "Sistem pembayaran terpusat. Virtual Account.", points: ["Cek Tunggakan", "Cashless"], image: "/Keuangan santri.png" },
    { id: 5, icon: "📹", shortName: "CCTV", title: "Akses CCTV Wali", desc: "Akses kamera di area publik pesantren.", points: ["Streaming", "Privasi"], image: "/cctv.jpg" },
    { id: 6, icon: "📝", shortName: "PPDB", title: "PPDB Online", desc: "Pendaftaran santri baru dari rumah.", points: ["Form Custom", "Ujian Online"], image: "/PPDB.jpg" },
    { id: 7, icon: "📱", shortName: "Sosmed", title: "Sosmed Internal", desc: "Feed kegiatan khusus wali santri.", points: ["Foto/Video", "Aman"], image: "/Home.png" },
    { id: 8, icon: "🛍️", shortName: "Market", title: "Marketplace Santri", desc: "Belanja kebutuhan anak lewat aplikasi.", points: ["Topup Saldo", "Belanja Jarak Jauh"], image: "/Marketplace.jpg" },
    { id: 9, icon: "❤️", shortName: "Donasi", title: "Galang Donasi", desc: "Fundraising wakaf tunai di aplikasi.", points: ["Campaign", "Transparansi"], image: "/Donasi Online.jpg" }
  ];
  let activeFeature = features[2]; 

  // --- DATA: WHY US ---
  const whyUsData = [
    { icon: "🧩", title: "True Integration", subtitle: "Not Just Collection", desc: "Satu aplikasi ekosistem efisiensi maksimal, dari akademik hingga finance." },
    { icon: "🕌", title: "Built for Pondok", subtitle: "Not Generic School", desc: "Dirancang dari nol dengan deep understanding kebutuhan unik pesantren." },
    { icon: "🛡️", title: "Amanah & Partnership", subtitle: "Long-term Commitment", desc: "Komitmen menjaga keamanan data dan pendampingan jangka panjang." }
  ];

  // --- DATA: ADDONS ---
  const addonsData = [
    { icon: "🏥", title: "E-Klinik", desc: "Rekam medis digital." },
    { icon: "🧺", title: "E-Laundry", desc: "Tracking cucian barcode." },
    { icon: "🍛", title: "Kantin Cashless", desc: "Jajan pakai kartu/QR." },
    { icon: "📚", title: "Perpustakaan", desc: "Sirkulasi buku otomatis." },
    { icon: "📢", title: "WA Blast", desc: "Tagihan SPP 1x klik." },
    { icon: "🚌", title: "Inventaris", desc: "Tracking aset pondok." }
  ];

  onMount(() => {
    setTimeout(() => { loading = false; }, 2200);
  });

  function toggleMenu() { isMenuOpen = !isMenuOpen; }
  
  function scrollToProblem() {
    const el = document.getElementById('problem');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<svelte:window bind:scrollY={scrollY} />

{#if loading}
  <div class="preloader" out:fade={{ duration: 1000, easing: quadInOut }}>
    <div class="loader-content">
      <div class="logo-box"><img src="/logo-khwarizmi.jpg" alt="Logo" class="loader-logo" /></div>
      <div class="text-content"><h1 class="brand-name">AL-KHWARIZMI</h1><p class="brand-tag">DIGITAL ECOSYSTEM</p></div>
      <div class="loading-line-wrapper"><div class="loading-line-track"><div class="loading-line-bar"></div></div></div>
    </div>
  </div>
{:else}

  <main in:fade={{ duration: 1000, delay: 200 }}>
    
    <nav class:scrolled={scrollY > 20} in:fly={{ y: -100, duration: 1000, delay: 400, easing: backOut }}>
      <div class="container nav-content">
        <div class="logo"><img src="/logo-khwarizmi.jpg" alt="Logo" class="nav-logo-img" /><div class="logo-text"></div></div>
        <div class="desktop-links">
          <a href="#features">Fitur</a>
          <a href="#why">Keunggulan</a>
          <a href="#pricing">Harga</a>
          <a href="#contact">Kontak</a>
        </div>
        <div class="nav-actions">
          <button class="btn-primary small"><a href="https://wa.me/6281234567890" style="text-decoration: none; color: white">Jadwalkan Demo</a></button>
          <button class="hamburger" on:click={toggleMenu}>
            <span class="bar" class:open={isMenuOpen}></span><span class="bar" class:open={isMenuOpen}></span><span class="bar" class:open={isMenuOpen}></span>
          </button>
        </div>
      </div>
      {#if isMenuOpen}
        <div class="mobile-menu" transition:slide>
          <a href="#features" on:click={toggleMenu}>Fitur</a><a href="#why" on:click={toggleMenu}>Keunggulan</a><a href="#pricing" on:click={toggleMenu}>Harga</a><a href="#contact" on:click={toggleMenu}>Kontak</a>
        </div>
      {/if}
    </nav>

    <section class="hero">
      <div class="bg-gradient-mesh"></div><div class="grid-lines"></div>
      <div class="container hero-grid">
        <div class="hero-text" style="transform: translateY({scrollY * 0.4}px); opacity: {1 - scrollY / 500};">
          <div in:scale={{ duration: 800, delay: 600, start: 0.8, easing: elasticOut }}><span class="badge shimmer">✨ Sistem Manajemen Pesantren Terlengkap</span></div>
          <h1 in:fly={{ y: 50, duration: 1000, delay: 800, easing: cubicOut }}>Transformasi Digital <span class="gradient-text-anim d-block">Pesantren Masa Depan</span></h1>
          <p in:fly={{ y: 30, duration: 1000, delay: 1000, easing: cubicOut }}>Manajemen Akademik, Tahfidz, Keuangan, hingga pemantauan orang tua dalam satu ekosistem terpadu.</p>
          <div class="cta-group" in:fly={{ y: 30, duration: 1000, delay: 1200, easing: cubicOut }}>
            <button class="btn-primary big pulse-effect">Coba Sekarang</button>
          </div>
        </div>
        <div class="hero-visual" style="transform: translateY({scrollY * 0.15}px);">
          <div class="hologram-deck">
            <div class="holo-element item-main-center" in:fly={{ y: 100, opacity: 0, duration: 1200, delay: 1200 }}>
              <div class="glow-border"></div><img src="/Home (TQ).png" alt="Dashboard App" /><div class="success-badge"><span class="check-icon">✓</span>Target Tercapai</div>
            </div>
            <div class="float-card c1" in:fly={{ x: -50, opacity: 0, delay: 1400 }}><img src="/MENU AKADEMIK.png" alt="Mini 1"></div>
            <div class="float-card c2" in:fly={{ x: 50, opacity: 0, delay: 1600 }}><img src="/Keuangan santri.png" alt="Mini 2"></div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator" on:click={scrollToProblem} style="opacity: {1 - scrollY / 300};"><div class="mouse"><div class="wheel"></div></div><span>Scroll</span></div>
    </section>

    <section class="problem-section-white" id="problem" use:viewport>
      <div class="bg-pattern-dots"></div>
      <div class="container relative z-10">
        <div class="section-header stagger-item">
          <span class="section-badge-outline">Realita Lapangan</span>
          <h2>Kendala Sistem <span class="highlight-underline">Pengelolaan Manual</span></h2>
          <p>Ketika metode lama justru menjadi penghambat kemajuan pesantren di era digital.</p>
        </div>
        <div class="problem-grid-clean">
          <div class="clean-card stagger-item"><div class="card-number">01</div><div class="icon-clean icon-orange"><span class="emoji">👁️</span></div><div class="card-text"><h3>Blind Spot Wali Santri</h3><p>Orang tua sering cemas karena tidak memiliki akses pantauan hafalan atau aktivitas anak secara <em>real-time</em>.</p></div></div>
          <div class="clean-card stagger-item"><div class="card-number">02</div><div class="icon-clean icon-red"><span class="emoji">📉</span></div><div class="card-text"><h3>Risiko Human Error</h3><p>Pencatatan hafalan & keuangan di kertas rawan hilang, rusak, atau salah input. Laporan menjadi tidak valid.</p></div></div>
          <div class="clean-card stagger-item"><div class="card-number">03</div><div class="icon-clean icon-blue"><span class="emoji">📂</span></div><div class="card-text"><h3>Silo Data (Terpisah)</h3><p>Data Keuangan, Akademik, dan Asrama tidak sinkron. Pimpinan pesantren sulit mengambil keputusan strategis.</p></div></div>
        </div>
      </div>
    </section>

    <section class="solution-section" id="features" use:viewport>
      <div class="tech-grid-bg"></div><div class="vignette-overlay"></div>
      <div class="container relative z-10">
        <div class="section-header-left stagger-item">
          <div class="label-wrapper"><span class="pulsing-dot"></span><span class="label-text">ECOSYSTEM OVERVIEW</span></div>
          <h2>Solusi Lengkap, <br><span class="text-highlight">Informasi Jelas.</span></h2>
          <p>Pilih modul di bawah untuk melihat detail bagaimana sistem bekerja.</p>
        </div>
        <div class="dashboard-layout">
          <div class="feature-accordion stagger-item">
            {#each features as feature}
              <div class="accordion-item {activeFeature.id === feature.id ? 'active' : ''}" on:click={() => activeFeature = feature} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && (activeFeature = feature)}>
                <div class="acc-head">
                  <div class="icon-box">{feature.icon}</div>
                  <div class="head-info"><h4>{feature.title}</h4>{#if activeFeature.id !== feature.id}<span class="short-desc-preview">Klik untuk detail</span>{/if}</div>
                  {#if activeFeature.id === feature.id}<div class="active-indicator"></div>{/if}
                </div>
                {#if activeFeature.id === feature.id}
                  <div class="acc-body" transition:slide={{ duration: 300 }}>
                    <p class="main-desc">{feature.desc}</p>
                    <div class="tags-container">{#each feature.points as point}<span class="feature-tag">✨ {point}</span>{/each}</div>
                    <button class="btn-learn-more">Pelajari Modul Ini →</button>
                  </div>
                {/if}
                {#if activeFeature.id === feature.id}<div class="progress-line"></div>{/if}
              </div>
            {/each}
          </div>
          <div class="visual-stage stagger-item">
            <div class="device-showcase">
              <div class="device-glow"></div>
              <div class="phone-frame-modern"><div class=""></div><div class="screen-display">{#key activeFeature}<img src={activeFeature.image} alt={activeFeature.title} in:fade={{ duration: 400 }} />{/key}<div class="screen-overlay"></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why-section-light" id="why" use:viewport>
        <div class="container relative z-10">
          <div class="why-header-light stagger-item">
            <span class="section-badge-outline">Value Proposition</span>
            <h2>Mengapa Al-Khwarizmi Berbeda?</h2>
            <p>Pendekatan kami melampaui sekadar solusi teknis, kami membangun fondasi masa depan.</p>
          </div>
          <div class="modern-light-grid">
            {#each whyUsData as item}
                <div class="light-feature-card stagger-item">
                    <div class="light-icon-box">{item.icon}</div>
                    <div class="light-card-content">
                        <h3>{item.title}<span class="card-subtitle d-block">{item.subtitle}</span></h3>
                        <p>{item.desc}</p>
                    </div>
                </div>
            {/each}
          </div>
        </div>
    </section>

    <section class="addons-section" use:viewport>
        <div class="addons-pattern"></div>
        <div class="container relative z-10">
          <div class="addons-header stagger-item">
            <span class="badge-gradient">✨ Ekosistem Lengkap</span>
            <h2>Lengkapi Fitur <span class="text-highlight" style="color: #F97316;">Sesuai Kebutuhan</span></h2>
            <p>Aktifkan modul tambahan secara terpisah. Sistem langsung menyesuaikan diri.</p>
          </div>
          <div class="apps-carousel">
            {#each addonsData as addon}
                <div class="app-card stagger-item">
                    <div class="card-top-action"><div class="toggle-track"><div class="toggle-circle"></div></div></div>
                    <div class="app-icon-wrapper">{addon.icon}</div>
                    <h4>{addon.title}</h4>
                    <p>{addon.desc}</p>
                    <div class="app-card-footer">
                        <span class="status-pill">Ready to Active</span><span class="action-arrow">→</span>
                    </div>
                </div>
            {/each}
          </div>
        </div>
    </section>

    <section class="pricing-section-light" id="pricing" use:viewport>
      <div class="bg-grid-slate"></div>

      <div class="container relative z-10">
        <div class="pricing-header-light stagger-item">
          <span class="badge-pill-orange">Biaya Investasi</span>
          <h2>Pilihan Paket Fleksibel</h2>
          <p>Transparan, tanpa biaya tersembunyi. Sesuaikan dengan kondisi kas pesantren.</p>
        </div>
        
        <div class="pricing-grid-equal stagger-item">
          
          <div class="pricing-card-clean">
            <div class="card-body">
              <div class="plan-top">
                <div class="icon-circle gray">⚡</div>
                <div class="plan-name">
                  <h3>Monthly</h3>
                  <span class="plan-tag">Pay as you go</span>
                </div>
              </div>
              
              <div class="price-area">
                <span class="curr">Rp</span>
                <span class="val">50</span>
                <div class="period">
                  <span class="u">Juta</span>
                  <span class="p">/ Bulan</span>
                </div>
              </div>

              <p class="plan-desc-clean">Cocok untuk tahap awal transisi digital tanpa komitmen jangka panjang.</p>
              
              <div class="divider-dashed"></div>

              <ul class="check-list-clean">
                <li><span class="chk">✓</span> Akses Full 9 Modul Utama</li>
                <li><span class="chk">✓</span> Unlimited Data Santri</li>
                <li><span class="chk">✓</span> Private Cloud Server</li>
                <li><span class="chk">✓</span> White-Label Apps</li>
                <li class="muted"><span class="cross">✕</span> Jalur Implementasi VIP</li>
              </ul>
            </div>
            
            <div class="card-footer">
            </div>
          </div>

          <div class="pricing-card-clean premium-border">
            <div class="best-value-ribbon">🏆 REKOMENDASI</div>
            
            <div class="card-body">
              <div class="plan-top">
                <div class="icon-circle orange">💎</div>
                <div class="plan-name">
                  <h3>Annual VIP</h3>
                  <span class="plan-tag orange-bg">Hemat & Prioritas</span>
                </div>
              </div>

              <div class="price-area">
                <span class="curr">Rp</span>
                <span class="val">600</span>
                <div class="period">
                  <span class="u">Juta</span>
                  <span class="p">/ Tahun</span>
                </div>
              </div>

              <p class="plan-desc-clean">Solusi bebas ribet. Sekali bayar untuk ketenangan pikiran satu tahun penuh.</p>

              <div class="benefit-box">
                <span>🔥 Free Layanan Prioritas 24/7</span>
              </div>

              <div class="divider-dashed"></div>

              <ul class="check-list-clean">
                <li><span class="chk-orange">✦</span> <strong>SEMUA Fitur Paket Bulanan</strong></li>
                <li><span class="chk-orange">✦</span> Jalur Implementasi VIP (Fast)</li>
                <li><span class="chk-orange">✦</span> Dedicated Account Manager</li>
                <li><span class="chk-orange">✦</span> Gratis Kunjungan Tim Teknis</li>
                <li><span class="chk-orange">✦</span> Kontrak SLA (Jaminan Uptime)</li>
              </ul>
            </div>

            <div class="card-footer">
            </div>
          </div>

        </div>
      </div>
    </section>

    <footer id="contact" class="footer-ultra" use:viewport>
      <div class="container relative z-10">
        <div class="cta-floating stagger-item">
          <div class="cta-text">
            <h2>Siap Digitalisasi?</h2>
            <p>Bergabung dengan 500+ pesantren modern lainnya hari ini.</p>
          </div>
          <div class="cta-btn-wrapper">
            <a href="https://wa.me/6281282251136" class="btn-whatsapp-pulse"><span class="wa-icon">💬</span> Chat WhatsApp</a>
          </div>
        </div>
      </div>
      <div class="footer-content container relative z-10">
        <div class="footer-top">
          <div class="f-col brand-col stagger-item">
            <img src="/logo-khwarizmi.jpg" alt="Logo" class="f-logo-img" />
            <p>Mitra teknologi terpercaya untuk lembaga pendidikan Islam. Membantu pesantren naik kelas di era digital.</p>
          </div>
          <div class="f-col links-col stagger-item"><h4>Produk</h4><a href="#">Akademik</a><a href="#">Keuangan</a><a href="#">Kesantrian</a><a href="#">Apps Wali</a></div>
          <div class="f-col links-col stagger-item"><h4>Perusahaan</h4><a href="#">Tentang Kami</a><a href="#">Karir</a><a href="#">Blog</a><a href="#">Kebijakan Privasi</a></div>
          <div class="f-col contact-col stagger-item"><h4>Hubungi Kami</h4><p>📍 Bogor, Jawa Barat</p><p>📞 0812 8225 1136</p><p>📧 hello@alkhwarizmi.id</p></div>
        </div>
        <div class="footer-divider"></div>
        <div class="footer-bottom"><p>&copy; 2025 PT. khwarizmi Kreatif. All Rights Reserved.</p><div class="socials"><a href="https://www.instagram.com/alkhwarizmi.id/?hl=id">Instagram</a><a href="https://khwarizmi.co.id/cgi-sys/suspendedpage.cgi">Website</a><a href="https://www.youtube.com/@sekolahimpianku">Youtube</a></div></div>
        <div class="big-bg-text">AL-KHWARIZMI</div>
      </div>
    </footer>

  </main>
{/if}

<style>
  /* --- GLOBAL VARIABLES --- */
  :global(:root) { --primary: #F97316; --primary-dark: #C2410C; --accent: #2DD4BF; --dark: #1E293B; --text: #475569; --bg-gradient-top: linear-gradient(180deg, #FFFFFF 0%, #FFF7ED 100%); }
  :global(body) { font-family: 'Inter', sans-serif; margin: 0; overflow-x: hidden; background: #ffffff; color: var(--text); }
  :global(html) { scroll-behavior: smooth; overflow-x: hidden; }
  .relative { position: relative; } .z-10 { z-index: 10; } .container { max-width: 1150px; margin: 0 auto; padding: 0 24px; } .text-center { text-align: center; }

  /* --- ANIMATION --- */
  .stagger-item { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
  :global(.stagger-item.is-visible) { opacity: 1; transform: translateY(0); }

  /* --- PRELOADER & NAV & HERO & PROBLEM & FEATURES --- */
  .preloader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #ffffff; z-index: 9999; display: flex; justify-content: center; align-items: center; }
  .loader-content { text-align: center; display: flex; flex-direction: column; align-items: center; } .logo-box { margin-bottom: 25px; } .loader-logo { width: 60px; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); animation: breathing 3s ease-in-out infinite; } @keyframes breathing { 0%, 100% { transform: scale(1); filter: brightness(100%); } 50% { transform: scale(1.05); filter: brightness(105%); } } .text-content { margin-bottom: 40px; } .brand-name { font-size: 1.5rem; font-weight: 800; letter-spacing: 0.3em; color: var(--dark); margin: 0; background: linear-gradient(90deg, #1E293B, #475569); -webkit-background-clip: text; -webkit-text-fill-color: transparent; } .brand-tag { font-size: 0.7rem; color: #94A3B8; letter-spacing: 0.5em; margin-top: 8px; text-transform: uppercase; } .loading-line-wrapper { width: 150px; display: flex; justify-content: center; } .loading-line-track { width: 100%; height: 2px; background: #F1F5F9; border-radius: 2px; overflow: hidden; position: relative; } .loading-line-bar { position: absolute; left: 0; top: 0; height: 100%; width: 30%; background: var(--primary); border-radius: 2px; animation: elegantMove 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; } @keyframes elegantMove { 0% { left: -30%; width: 30%; } 50% { width: 60%; } 100% { left: 100%; width: 30%; } }
  nav { position: fixed; width: 100%; top: 0; z-index: 1000; padding: 20px 0; transition: 0.3s; } nav.scrolled { background: rgba(255,255,255,0.9); backdrop-filter: blur(12px); box-shadow: 0 4px 30px rgba(0,0,0,0.05); padding: 15px 0; } .nav-content { display: flex; justify-content: space-between; align-items: center; } .logo { display: flex; align-items: center; gap: 10px; font-weight: 800; } .nav-logo-img { width: 32px; border-radius: 6px; } .desktop-links { display: flex; gap: 30px; } .desktop-links a { text-decoration: none; color: var(--dark); font-weight: 500; font-size: 0.95rem; transition: 0.3s; } .desktop-links a:hover { color: var(--primary); } .nav-actions { display: flex; gap: 15px; align-items: center; } .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; } .bar { width: 24px; height: 2px; background: var(--dark); transition: 0.3s; } .bar.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); } .bar.open:nth-child(2) { opacity: 0; } .bar.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); } .mobile-menu { position: absolute; top: 100%; width: 100%; background: white; padding: 20px; display: flex; flex-direction: column; gap: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
  .hero { min-height: 100vh; padding-top: 100px; padding-bottom: 100px; position: relative; display: flex; align-items: center; overflow: hidden; background: var(--bg-gradient-top); } .bg-gradient-mesh { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 10% 20%, rgba(249, 115, 22, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(45, 212, 191, 0.05) 0%, transparent 40%); z-index: 0; } .grid-lines { position: absolute; width: 100%; height: 100%; top:0; left:0; z-index: 0; background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px); background-size: 50px 50px; } 
  
  /* HERO GRID FIXED */
  .hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 100px; align-items: center; width: 100%; z-index: 1; margin-top: -120px; } 
  .hero-text { max-width: 600px; } h1 { font-size: 3.5rem; font-weight: 800; color: var(--dark); line-height: 1.15; margin-bottom: 24px; letter-spacing: -1.5px; } .d-block { display: block; margin-top: 5px; } .gradient-text-anim { background: linear-gradient(90deg, var(--primary), #fbbf24); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 3.6rem; } p { font-size: 1.125rem; line-height: 1.6; margin-bottom: 35px; color: var(--text); max-width: 90%; } .badge { background: #FFF7ED; color: var(--primary-dark); padding: 8px 16px; border-radius: 50px; font-weight: 600; font-size: 0.85rem; margin-bottom: 20px; display: inline-flex; align-items: center; border: 1px solid rgba(249, 115, 22, 0.2); box-shadow: 0 4px 6px -1px rgba(249, 115, 22, 0.1); } .btn-primary { background: var(--primary); color: white; border: none; padding: 14px 30px; border-radius: 50px; font-weight: 700; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.4); text-decoration: none; display: inline-flex; align-items: center; justify-content: center; } .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 15px 30px -5px rgba(249, 115, 22, 0.5); } .btn-secondary { background: white; border: 2px solid #E2E8F0; padding: 14px 30px; border-radius: 50px; font-weight: 600; color: var(--dark); cursor: pointer; display: flex; align-items: center; gap: 8px; transition: 0.3s; } .btn-secondary:hover { border-color: var(--dark); } .cta-group { display: flex; gap: 15px; align-items: center; } .btn-primary.big { padding: 16px 36px; font-size: 1rem; } .hero-visual { position: relative; width: 100%; display: flex; justify-content: center; align-items: center; } .hologram-deck { position: relative; width: 100%; height: 500px; display: flex; justify-content: center; align-items: center; perspective: 1000px; } .item-main-center { width: 280px; z-index: 10; border-radius: 40px; overflow: hidden; box-shadow: 0 40px 80px -20px rgba(0,0,0,0.15), 0 0 0 8px rgba(255,255,255,0.6); position: relative; background: #000; } .item-main-center img { width: 100%; display: block; } .float-card { position: absolute; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); padding: 10px; border-radius: 18px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); width: 150px; z-index: 5; border: 1px solid rgba(255,255,255,0.5); } .float-card img { width: 100%; border-radius: 12px; } .c1 { top: 10%; left: 0%; transform: rotate(-5deg); animation: float 6s infinite ease-in-out; } .c2 { bottom: 15%; right: -5%; transform: rotate(5deg); animation: float 5s infinite ease-in-out reverse; } .success-badge { position: absolute; bottom: 25px; left: 50%; transform: translateX(-50%); background: white; padding: 10px 20px; border-radius: 30px; font-weight: 700; font-size: 0.85rem; box-shadow: 0 10px 20px rgba(0,0,0,0.15); display: flex; align-items: center; gap: 8px; white-space: nowrap; } .check-icon { background: #22C55E; color: white; border-radius: 50%; width: 20px; height: 20px; display: grid; place-items: center; font-size: 0.75rem; } @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } } .scroll-indicator { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 10px; cursor: pointer; z-index: 5; } .mouse { width: 26px; height: 42px; border: 2px solid var(--dark); border-radius: 20px; position: relative; } .wheel { width: 4px; height: 4px; background: var(--dark); border-radius: 50%; position: absolute; top: 8px; left: 50%; transform: translateX(-50%); animation: scrollMouse 1.5s infinite; } .scroll-indicator span { font-size: 0.75rem; font-weight: 600; color: var(--dark); text-transform: uppercase; letter-spacing: 1px; } @keyframes scrollMouse { 0% { opacity: 1; top: 8px; } 100% { opacity: 0; top: 20px; } }
  .problem-section-white { padding: 120px 20px; background: #ffffff; position: relative; overflow: hidden; margin-top: -80px; border-radius: 60px 60px 0 0; z-index: 10; box-shadow: 0 -20px 60px rgba(0,0,0,0.03); } .bg-pattern-dots { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: radial-gradient(#E2E8F0 1.5px, transparent 1.5px); background-size: 30px 30px; opacity: 0.5; z-index: 0; mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent); -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent); } .section-header { text-align: center; max-width: 700px; margin: 0 auto 60px; display: flex; flex-direction: column; align-items: center; justify-content: center; } .section-badge-outline { border: 1px solid var(--primary); color: var(--primary); padding: 6px 18px; border-radius: 50px; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; display: inline-block; margin-bottom: 20px; background: rgba(249, 115, 22, 0.05); } .section-header h2 { font-size: 2.5rem; margin-bottom: 15px; color: var(--dark); line-height: 1.2; width: 100%; text-align: center; } .highlight-underline { position: relative; z-index: 1; display: inline-block; } .highlight-underline::after { content: ''; position: absolute; bottom: 5px; left: 0; width: 100%; height: 8px; background: #FED7AA; z-index: -1; opacity: 0.6; border-radius: 4px; } .problem-grid-clean { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; margin-top: 20px; } .clean-card { background: #ffffff; border: 1px solid #E2E8F0; border-radius: 24px; padding: 40px 30px; position: relative; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); display: flex; flex-direction: column; align-items: flex-start; gap: 25px; } .clean-card:hover { transform: translateY(-10px); border-color: var(--primary); box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.15); } .card-number { position: absolute; top: 20px; right: 20px; font-size: 3rem; font-weight: 900; color: #F1F5F9; line-height: 1; user-select: none; transition: 0.3s; } .clean-card:hover .card-number { color: #FFF7ED; } .icon-clean { width: 60px; height: 60px; border-radius: 16px; display: grid; place-items: center; font-size: 1.8rem; transition: 0.3s; } .icon-orange { background: #FFF7ED; color: #F97316; } .icon-red { background: #FEF2F2; color: #EF4444; } .icon-blue { background: #EFF6FF; color: #3B82F6; } .clean-card:hover .icon-clean { transform: scale(1.1) rotate(5deg); } .card-text h3 { font-size: 1.35rem; font-weight: 700; color: var(--dark); margin: 0 0 12px 0; } .card-text p { font-size: 0.95rem; color: #64748B; line-height: 1.6; margin: 0; }
  .solution-section { background-color: #0B1120; padding: 100px 0 140px; position: relative; overflow: hidden; color: white; } .tech-grid-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 50px 50px; opacity: 0.4; z-index: 0; } .vignette-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, transparent 0%, #0B1120 90%); z-index: 1; pointer-events: none; } .section-header-left { margin-bottom: 50px; position: relative; z-index: 2; } .label-wrapper { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 15px; background: rgba(255,255,255,0.05); padding: 6px 12px; border-radius: 30px; border: 1px solid rgba(255,255,255,0.1); } .pulsing-dot { width: 8px; height: 8px; background: #22C55E; border-radius: 50%; box-shadow: 0 0 10px #22C55E; animation: blink 2s infinite; } .label-text { font-size: 0.75rem; font-weight: 700; color: #94A3B8; letter-spacing: 1px; } .section-header-left h2 { font-size: 3rem; margin: 0 0 15px 0; line-height: 1.1; } .text-highlight { color: var(--primary); } .section-header-left p { color: #94A3B8; font-size: 1.1rem; max-width: 500px; } .dashboard-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; position: relative; z-index: 5; } .feature-accordion { display: flex; flex-direction: column; gap: 16px; max-height: 600px; overflow-y: auto; padding: 20px 12px 20px 0; -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 40px, black calc(100% - 40px), transparent 100%); mask-image: linear-gradient(to bottom, transparent 0%, black 40px, black calc(100% - 40px), transparent 100%); } .feature-accordion::-webkit-scrollbar { width: 4px; } .feature-accordion::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); border-radius: 10px; margin: 20px 0; } .feature-accordion::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; } .feature-accordion::-webkit-scrollbar-thumb:hover { background: var(--primary); } .accordion-item { background: rgba(30, 41, 59, 0.4); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; overflow: hidden; cursor: pointer; transition: all 0.3s ease; position: relative; flex-shrink: 0; } .accordion-item:hover { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.1); } .accordion-item.active { background: #1E293B; border-color: var(--primary); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5); } .acc-head { display: flex; align-items: center; gap: 15px; padding: 18px 24px; } .icon-box { width: 40px; height: 40px; background: rgba(255,255,255,0.05); border-radius: 10px; display: grid; place-items: center; font-size: 1.2rem; transition: 0.3s; } .accordion-item.active .icon-box { background: var(--primary); color: white; transform: scale(1.1); } .head-info h4 { margin: 0; font-size: 1.1rem; font-weight: 600; color: #E2E8F0; } .short-desc-preview { font-size: 0.8rem; color: #64748B; } .active-indicator { margin-left: auto; width: 10px; height: 10px; background: var(--primary); border-radius: 50%; box-shadow: 0 0 10px var(--primary); } .acc-body { padding: 0 24px 24px 79px; } .main-desc { color: #CBD5E1; font-size: 0.95rem; line-height: 1.6; margin-bottom: 15px; } .tags-container { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; } .feature-tag { background: rgba(255,255,255,0.08); color: #38BDF8; font-size: 0.8rem; padding: 4px 10px; border-radius: 6px; font-weight: 500; } .btn-learn-more { background: transparent; border: none; color: var(--primary); font-weight: 700; font-size: 0.9rem; cursor: pointer; padding: 0; display: flex; align-items: center; gap: 5px; transition: 0.3s; } .btn-learn-more:hover { gap: 10px; } .progress-line { height: 2px; background: linear-gradient(90deg, var(--primary), transparent); width: 0%; animation: loadLine 5s linear forwards; } @keyframes loadLine { to { width: 100%; } } .visual-stage { position: sticky; top: 150px; height: fit-content; display: flex; justify-content: center; } .device-showcase { position: relative; width: 320px; height: 640px; } .device-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 120%; height: 80%; background: radial-gradient(circle, rgba(249, 115, 22, 0.15), transparent 70%); filter: blur(60px); z-index: 0; } .phone-frame-modern { position: relative; width: 100%; height: 100%; background: #000; border-radius: 48px; box-shadow: 0 0 0 4px #334155, 0 0 0 8px #1e293b, 0 30px 80px rgba(0,0,0,0.6); overflow: hidden; z-index: 5; } .camera-island { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); width: 90px; height: 24px; background: #000; border-radius: 20px; z-index: 10; } .screen-display img { width: 100%; height: 100%; object-fit: cover; opacity: 0.9; } .screen-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(0,0,0,0.1), transparent, rgba(0,0,0,0.2)); pointer-events: none; }

  /* --- WHY US (Light) --- */
  .why-section-light { padding: 120px 20px; background: #FFFFFF; position: relative; } .why-header-light { text-align: center; max-width: 700px; margin: 0 auto 60px; display: flex; flex-direction: column; align-items: center; } .why-header-light h2 { font-size: 2.5rem; font-weight: 800; color: var(--dark); margin-bottom: 15px; line-height: 1.2; } .why-header-light p { font-size: 1.1rem; color: #64748B; } .modern-light-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-top: 60px; } .light-feature-card { background: #F8FAFC; padding: 40px 30px; border-radius: 24px; border: 1px solid #E2E8F0; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); display: flex; flex-direction: column; gap: 25px; position: relative; overflow: hidden; } .light-feature-card:hover { background: #FFFFFF; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08); transform: translateY(-5px); border-color: var(--primary); } .light-icon-box { width: 70px; height: 70px; background: #FFF7ED; color: var(--primary); border-radius: 20px; font-size: 2rem; display: grid; place-items: center; transition: 0.3s; } .light-feature-card:hover .light-icon-box { transform: scale(1.1) rotate(5deg); } .light-card-content h3 { font-size: 1.4rem; font-weight: 800; color: var(--dark); margin: 0 0 15px; line-height: 1.3; } .card-subtitle { font-size: 0.9rem; color: #94A3B8; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px; } .light-card-content p { font-size: 1rem; color: #64748B; line-height: 1.6; margin: 0; }

  /* --- ADDONS --- */
  .addons-section { padding: 120px 0; background: #FFFFFF; position: relative; } .addons-pattern { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: radial-gradient(circle, #E2E8F0 1px, transparent 1px); background-size: 40px 40px; opacity: 0.5; } .addons-header { text-align: center; margin-bottom: 60px; position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; } .badge-gradient { background: linear-gradient(135deg, #F97316, #DC2626); color: white; padding: 8px 20px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; display: inline-block; margin-bottom: 20px; box-shadow: 0 10px 20px -5px rgba(249, 115, 22, 0.4); } .addons-header h2 { font-size: 3rem; color: #0F172A; font-weight: 900; margin-bottom: 15px; width: 100%; text-align: center; } .addons-header p { color: #64748B; font-size: 1.1rem; max-width: 600px; text-align: center; } .apps-carousel { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; position: relative; z-index: 10; } .app-card { background: white; border-radius: 20px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border: 1px solid #E2E8F0; transition: all 0.4s; position: relative; overflow: hidden; display: flex; flex-direction: column; } .app-card:hover { transform: translateY(-8px); border-color: var(--primary); box-shadow: 0 15px 30px -5px rgba(249, 115, 22, 0.15); } .card-top-action { position: absolute; top: 20px; right: 20px; } .toggle-track { width: 36px; height: 20px; background: #E2E8F0; border-radius: 20px; position: relative; transition: 0.3s; } .toggle-circle { width: 16px; height: 16px; background: white; border-radius: 50%; position: absolute; top: 2px; left: 2px; transition: 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.1); } .app-card:hover .toggle-track { background: #F97316; } .app-card:hover .toggle-circle { left: 18px; } .app-icon-wrapper { width: 60px; height: 60px; background: linear-gradient(135deg, #FFF7ED, #FEE2E2); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin-bottom: 20px; transition: 0.4s; } .app-card:hover .app-icon-wrapper { transform: rotate(-5deg) scale(1.1); } .app-card h4 { font-size: 1.25rem; font-weight: 800; color: #0F172A; margin: 0 0 10px; } .app-card p { color: #64748B; line-height: 1.5; margin-bottom: 25px; font-size: 0.95rem; flex-grow: 1; } .app-card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #F1F5F9; padding-top: 20px; margin-top: auto; } .status-pill { font-size: 0.75rem; font-weight: 700; color: #10B981; background: #ECFDF5; padding: 4px 10px; border-radius: 6px; } .action-arrow { font-size: 1.2rem; color: #CBD5E1; transition: 0.3s; } .app-card:hover .action-arrow { color: var(--primary); transform: translateX(5px); }

  /* --- PRICING SECTION CLEAN (LIGHT MODE & FIXED SPACING) --- */
  .pricing-section-light {
    padding: 80px 20px 280px 20px; /* REVISI: Top dikurangi, Bottom ditambah biar ga mepet footer */
    background: #F8FAFC; 
    position: relative;
    color: #1E293B;
  }

  .bg-grid-slate {
    position: absolute; inset: 0;
    background-image: radial-gradient(#CBD5E1 1px, transparent 1px);
    background-size: 30px 30px;
    opacity: 0.5;
  }

  .pricing-header-light { text-align: center; margin-bottom: 60px; display: flex; flex-direction: column; align-items: center; position: relative; z-index: 5; }
  .badge-pill-orange { background: #FFF7ED; color: #EA580C; border: 1px solid #FED7AA; padding: 6px 16px; border-radius: 30px; font-size: 0.75rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px; }
  .pricing-header-light h2 { font-size: 2.5rem; margin: 0 0 15px; font-weight: 800; color: #0F172A; }
  .pricing-header-light p { font-size: 1.1rem; color: #64748B; max-width: 500px; }

  /* --- GRID EQUAL HEIGHT --- */
  .pricing-grid-equal {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    max-width: 900px;
    margin: 0 auto;
    align-items: stretch;
  }

  /* --- CARD COMPONENT --- */
  .pricing-card-clean {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    padding: 0;
    position: relative;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  /* REVISI ANIMASI STANDARD CARD */
  .pricing-card-clean:hover {
    transform: translateY(-8px); /* Naik lebih tinggi */
    box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15); /* Shadow lebih mewah */
    border-color: #94A3B8; /* Border lebih gelap dikit */
  }
  
  .icon-circle { width: 48px; height: 48px; border-radius: 12px; display: grid; place-items: center; font-size: 1.4rem; transition: 0.3s; }
  
  /* Icon Standard berubah warna pas hover */
  .pricing-card-clean:hover .icon-circle.gray {
    background: #E2E8F0;
    color: #0F172A;
  }

  /* Premium Distinction */
  .premium-border {
    border: 2px solid #F97316;
    box-shadow: 0 10px 30px -5px rgba(249, 115, 22, 0.15);
  }
  .premium-border:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px rgba(249, 115, 22, 0.25);
  }
  
  .best-value-ribbon {
    position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
    background: #EA580C; color: white;
    font-size: 0.75rem; font-weight: 800; padding: 4px 16px;
    border-radius: 20px; letter-spacing: 0.5px;
    box-shadow: 0 4px 10px rgba(234, 88, 12, 0.3);
    z-index: 10;
  }

  .card-body { padding: 40px 40px 0 40px; flex-grow: 1; }
  .card-footer { padding: 30px 40px 40px 40px; margin-top: auto; }

  .plan-top { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
  .icon-circle.gray { background: #F1F5F9; }
  .icon-circle.orange { background: #FFF7ED; }
  
  .plan-name h3 { margin: 0; font-size: 1.4rem; font-weight: 800; color: #0F172A; }
  .plan-tag { font-size: 0.8rem; font-weight: 600; color: #94A3B8; }
  .plan-tag.orange-bg { color: #EA580C; background: #FFF7ED; padding: 2px 8px; border-radius: 4px; }

  .price-area { display: flex; align-items: flex-start; gap: 4px; margin-bottom: 20px; }
  .curr { font-size: 1.2rem; font-weight: 600; margin-top: 8px; color: #64748B; }
  .val { font-size: 3.5rem; font-weight: 800; line-height: 1; color: #0F172A; letter-spacing: -1px; }
  .period { display: flex; flex-direction: column; justify-content: center; margin-left: 5px; }
  .u { font-size: 1.1rem; font-weight: 700; line-height: 1; color: #334155; }
  .p { font-size: 0.85rem; color: #94A3B8; }

  .plan-desc-clean { color: #64748B; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px; min-height: 46px; }

  .benefit-box {
    background: #FFF7ED; border: 1px dashed #FDBA74;
    color: #C2410C; font-size: 0.85rem; font-weight: 700;
    text-align: center; padding: 8px; border-radius: 8px;
    margin-bottom: 20px;
  }

  .divider-dashed { width: 100%; height: 1px; border-top: 1px dashed #E2E8F0; margin-bottom: 25px; }

  .check-list-clean { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
  .check-list-clean li { display: flex; align-items: flex-start; gap: 12px; font-size: 0.95rem; color: #334155; line-height: 1.4; }
  .chk { color: #10B981; font-weight: 800; min-width: 18px; }
  .chk-orange { color: #F97316; font-weight: 800; min-width: 18px; }
  .cross { color: #CBD5E1; font-weight: 800; min-width: 18px; }
  .muted { color: #94A3B8; text-decoration: line-through; }

  .btn-clean-outline {
    width: 100%; padding: 16px; border-radius: 12px;
    border: 2px solid #E2E8F0; background: white;
    color: #0F172A; font-weight: 700; cursor: pointer;
    transition: 0.3s;
  }
  .btn-clean-outline:hover { border-color: #0F172A; background: #0F172A; color: white; }

  .btn-clean-solid {
    width: 100%; padding: 16px; border-radius: 12px;
    border: none; background: #F97316;
    color: white; font-weight: 700; cursor: pointer;
    transition: 0.3s; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4);
  }
  .btn-clean-solid:hover { background: #EA580C; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(249, 115, 22, 0.5); }

  /* --- FOOTER --- */
  .footer-ultra { background: #0F172A; color: white; padding-top: 150px; padding-bottom: 0; position: relative; overflow: hidden; margin-top: -100px; }
  .cta-floating { background: linear-gradient(110deg, #1E293B, #334155); border: 1px solid rgba(255,255,255,0.1); padding: 50px; border-radius: 30px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 30px 60px -10px rgba(0,0,0,0.5); margin-bottom: 80px; position: relative; z-index: 20; }
  .cta-text h2 { font-size: 2.2rem; margin: 0 0 10px 0; color: white; } .cta-text p { color: #94A3B8; font-size: 1.1rem; margin: 0; }
  .btn-whatsapp-pulse { background: #22C55E; color: white; padding: 16px 32px; border-radius: 50px; font-weight: 700; text-decoration: none; display: flex; align-items: center; gap: 10px; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); animation: pulseGreen 2s infinite; transition: 0.3s; } .btn-whatsapp-pulse:hover { transform: translateY(-3px); background: #16A34A; }
  @keyframes pulseGreen { 0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); } 70% { box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); } 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); } }
  .footer-top { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.2fr; gap: 40px; padding-bottom: 60px; } .f-logo-img { width: 48px; border-radius: 8px; margin-bottom: 20px; } .brand-col p { color: #94A3B8; line-height: 1.6; } .links-col h4, .contact-col h4 { color: white; margin-bottom: 25px; font-size: 1.1rem; } .links-col a { display: block; color: #94A3B8; text-decoration: none; margin-bottom: 12px; transition: 0.3s; position: relative; width: fit-content; } .links-col a::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0%; height: 1px; background: var(--primary); transition: 0.3s; } .links-col a:hover { color: white; } .links-col a:hover::after { width: 100%; } .contact-col p { color: #94A3B8; margin-bottom: 12px; }
  .footer-divider { width: 100%; height: 1px; background: rgba(255,255,255,0.1); }
  .footer-bottom { padding: 30px 0; display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 5; } .footer-bottom p { color: #64748B; font-size: 0.9rem; margin: 0; } .socials { display: flex; gap: 20px; } .socials a { color: #94A3B8; text-decoration: none; transition: 0.3s; } .socials a:hover { color: var(--primary); }
  .big-bg-text { position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); font-size: 12vw; font-weight: 900; color: rgba(255,255,255,0.02); white-space: nowrap; pointer-events: none; user-select: none; z-index: 0; letter-spacing: -5px; line-height: 1; }

  /* --- RESPONSIVE RESET --- */
 /* --- RESPONSIVE RESET --- */
  @media (max-width: 968px) {
    .desktop-links { display: none; } 
    .hamburger { display: flex; }
    
    /* Modifikasi Hero agar text centered dan Visual Hilang */
    .hero { padding-top: 100px; padding-bottom: 60px; text-align: center; } 
    .hero-grid { grid-template-columns: 1fr; gap: 0; margin-top: -200px; } /* Gap diubah jadi 0 */
    .hero-text { margin: 0 auto; display: flex; flex-direction: column; align-items: center; } 
    
    /* --- BAGIAN INI YANG MENYEMBUNYIKAN HOLOGRAM --- */
    .hero-visual { display: none; } 
    /* ----------------------------------------------- */

    h1 { font-size: 2rem; } 
    .gradient-text-anim { font-size: 2.4rem; } 
    p { font-size: 1rem; } 
    .d-block { display: inline; } 
    .cta-group { justify-content: center; }
    
    .problem-section-white { margin-top: -50px; border-radius: 40px 40px 0 0; padding-top: 80px; }
    .clean-card { align-items: center; text-align: center; } 
    .highlight-underline::after { bottom: 2px; height: 6px; }
    
    .dashboard-layout { grid-template-columns: 1fr; gap: 50px; } 
    .feature-accordion { order: 2; max-height: none; overflow: visible; padding: 0; mask-image: none; -webkit-mask-image: none; } 
    .visual-stage { order: 1; position: relative; top: 0; margin-bottom: 20px; } 
    .phone-frame-modern { height: 450px; } 
    .device-showcase { width: 240px; height: 450px; margin: 0 auto; }
    
    .cta-floating { flex-direction: column; text-align: center; gap: 20px; padding: 30px; }
    
    .footer-top { grid-template-columns: 1fr; text-align: center; gap: 40px; } 
    .links-col a { margin: 0 auto 12px; } 
    .footer-bottom { flex-direction: column; gap: 20px; padding-bottom: 80px; } 
    .f-logo-img { margin: 0 auto 20px; }
    
    .apps-carousel { grid-template-columns: 1fr; }
    
    /* Responsive Pricing */
    .pricing-grid-equal { grid-template-columns: 1fr; }
    .plan-desc-clean { min-height: auto; }
    
    .section-header h2, .addons-header h2 { font-size: 2rem; }
    .modern-light-grid { grid-template-columns: 1fr; }
  }
</style>
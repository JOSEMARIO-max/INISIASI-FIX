<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicOut, quintOut } from "svelte/easing";
  
  // Data Features (Tetap sama)
  const features = [
    { id: 1, icon: "👥", shortName: "HRD", title: "Sistem HRD & Kepegawaian", desc: "Lupakan rekap manual yang melelahkan. Sistem ini mencatat kehadiran asatidz melalui GPS & Biometrik, menghitung jam lembur secara otomatis, hingga mengelola perizinan cuti dalam satu dashboard terpusat.", points: ["Absensi GPS Presisi", "Slip Gaji via WhatsApp", "Manajemen Cuti Digital"], image: "/HRD.png" },
    { id: 2, icon: "🎓", shortName: "Akademik", title: "Manajemen Akademik Digital", desc: "Digitalisasi kurikulum pesantren dari hulu ke hilir. Mulai dari penyusunan jadwal pelajaran, input nilai harian, hingga pencetakan rapor UTS/UAS secara otomatis. Wali santri dapat memantau perkembangan akademik anak secara real-time.", points: ["Jadwal & Kalender", "Input Nilai Multi-Aspek", "Cetak Rapor Otomatis"], image: "/MENU AKADEMIK.png" },
    { id: 3, icon: "📖", shortName: "Tahfidz", title: "Monitoring Progres Tahfidz", desc: "Fitur unggulan untuk pondok tahfidz. Setiap setoran hafalan santri langsung tercatat dan ternotifikasi ke HP orang tua detik itu juga. Dilengkapi dengan grafik perkembangan untuk melihat tren hafalan santri.", points: ["Notifikasi Setoran Real-time", "Grafik Target vs Capaian", "Jurnal Harian Musyrif"], image: "/Home (TQ).png" },
    { id: 4, icon: "💳", shortName: "Keuangan", title: "Keuangan & SPP Cashless", desc: "Kelola arus kas pesantren dengan transparansi tinggi. Wali santri bisa membayar SPP melalui Virtual Account, E-Wallet, atau Minimarket. Bendahara tidak perlu lagi pusing mencatat uang tunai atau menagih manual.", points: ["Multi-Channel Payment (VA)", "Laporan Arus Kas Harian", "Pengingat Tagihan Otomatis"], image: "/Keuangan santri.png" },
    { id: 5, icon: "📹", shortName: "CCTV", title: "Akses CCTV Wali Santri", desc: "Berikan ketenangan batin bagi orang tua yang jauh. Fitur ini memungkinkan wali santri melihat aktivitas anaknya di area publik pesantren (kantin, lapangan, masjid) melalui aplikasi dengan akses terbatas.", points: ["Streaming Server Stabil", "Jadwal Akses Terbatas", "Keamanan Privasi Terjaga"], image: "/cctv.jpg" },
    { id: 6, icon: "📝", shortName: "PPDB", title: "PPDB Online & Seleksi", desc: "Jaring santri berkualitas dari seluruh penjuru negeri. Calon wali santri dapat mendaftar, mengunggah berkas, hingga melakukan ujian seleksi secara online. Panitia tinggal memantau data masuk.", points: ["Formulir Custom", "Ujian CBT Online", "Generate Kartu Ujian"], image: "/PPDB.jpg" },
    { id: 7, icon: "📱", shortName: "Sosmed", title: "Sosial Media Internal", desc: "Wadah komunikasi resmi antara pesantren dan wali santri. Admin dapat membagikan foto/video kegiatan pondok layaknya Instagram, namun di lingkungan yang aman dan tertutup khusus internal.", points: ["Feed Kegiatan Harian", "Interaksi Wali & Santri", "Lingkungan Digital Aman"], image: "/Home.png" },
    { id: 8, icon: "🛍️", shortName: "Market", title: "Marketplace & Kantin", desc: "Solusi uang saku digital. Orang tua bisa membelikan kebutuhan anak (kitab, seragam, makanan) lewat aplikasi, atau sekadar top-up saldo kartu santri agar belanja lebih terkontrol.", points: ["Belanja Jarak Jauh", "Topup Saldo Santri", "Limit Belanja Harian"], image: "/Marketplace.jpg" },
    { id: 9, icon: "❤️", shortName: "Donasi", title: "Platform Donasi & Wakaf", desc: "Bangun kemandirian ekonomi pesantren. Fitur ini memfasilitasi program wakaf tunai, donasi pembangunan, atau infaq makan santri langsung di aplikasi secara transparan dan akuntabel.", points: ["Campaign Program Donasi", "Update Progres Pembangunan", "Laporan Penyaluran"], image: "/Donasi Online.jpg" }
  ];
   
  let activeFeature = features[2];
  let sectionRef;
  let isVisible = false;

  // Logic untuk mendeteksi Scroll
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible = true;
          observer.unobserve(entry.target); // Hanya animasi sekali saat masuk
        }
      });
    }, { threshold: 0.15 }); // Animasi mulai saat 15% section terlihat

    if (sectionRef) observer.observe(sectionRef);
    return () => observer.disconnect();
  });
</script>

<section class="solution-section {isVisible ? 'is-visible' : ''}" id="features" bind:this={sectionRef}>
  
  <div class="tech-grid-bg"></div>
  
  <div class="container relative z-10">
    
    <div class="section-header text-center reveal-item delay-1">
      <h2 class="main-title">Solusi Pesantren dalam <span class="text-highlight">Satu Genggaman</span></h2>
      <p class="sub-title">Automasi menyeluruh untuk keputusan tepat, efisiensi tinggi, dan ketenangan wali santri.</p>
      
      <div class="tabs-container reveal-item delay-2">
        <div class="tabs-scroll">
          {#each features as feature}
            <button 
              class="tab-pill {activeFeature.id === feature.id ? 'active' : ''}" 
              on:click={() => activeFeature = feature}
            >
              {feature.shortName}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <div class="feature-display-grid reveal-item delay-3">
      
      <div class="visual-col">
        <div class="projector-base-glow"></div>
        <div class="hologram-stage">
          {#key activeFeature.id}
            <div 
              class="hologram-card-wrapper"
              in:fly={{ y: 20, duration: 800, easing: quintOut }} 
              out:fade={{ duration: 400, easing: cubicOut }}
            >
              <div class="hologram-card">
                <div class="scanline"></div>
                <div class="glass-shimmer"></div>
                <div class="screen-content">
                  <img src={activeFeature.image} alt={activeFeature.title} class="feature-img" />
                </div>
                <div class="corner corner-tl"></div><div class="corner corner-tr"></div>
                <div class="corner corner-bl"></div><div class="corner corner-br"></div>
              </div>
              <div class="hologram-label"><span class="pulse-dot"></span>{activeFeature.shortName} Live View</div>
            </div>
          {/key}
        </div>
      </div>

      <div class="content-col">
        <div class="text-stage">
          {#key activeFeature.id}
            <div 
              class="text-content-wrapper"
              in:fly={{ x: 20, duration: 600, delay: 100, easing: quintOut }} 
              out:fade={{ duration: 300 }}
            >
              <h3 class="feature-headline"><span class="text-highlight">{activeFeature.title}</span></h3>
              <p class="feature-desc">{activeFeature.desc}</p>
              <div class="points-list">
                {#each activeFeature.points as point}
                  <div class="point-item">
                    <div class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <span class="point-text">{point}</span>
                  </div>
                {/each}
              </div>
              <div class="action-area">
                <button class="btn-cta">Pelajari Modul {activeFeature.shortName} →</button>
              </div>
            </div>
          {/key}
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  /* --- SCROLL ANIMATION STYLES --- */
  
  /* Status Awal: Tersembunyi & Turun sedikit */
  .reveal-item {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1); /* Easing yang smooth */
    will-change: opacity, transform;
  }

  /* Status Akhir: Muncul Normal (Dipicu class .is-visible di section) */
  .solution-section.is-visible .reveal-item {
    opacity: 1;
    transform: translateY(0);
  }

  /* Delay Berurutan (Stagger) */
  .delay-1 { transition-delay: 0.1s; } /* Judul muncul duluan */
  .delay-2 { transition-delay: 0.3s; } /* Tab menu menyusul */
  .delay-3 { transition-delay: 0.5s; } /* Konten utama terakhir */

  /* ------------------------------- */

  /* --- GLOBAL CONFIG --- */
  .solution-section { 
    background-color: #FFFFFF; 
    background: linear-gradient(180deg, #FFFFFF 0%, #FFF7ED 100%); 
    padding: 80px 0 200px; /* Space bawah luas */
    position: relative; 
    overflow: hidden; 
    color: #1E293B;
    font-family: 'Inter', sans-serif;
  }
  
  .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
  .text-highlight { color: #F97316; }
  .relative { position: relative; }
  .z-10 { z-index: 10; }

  /* Background Grid */
  .tech-grid-bg { 
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
    background-image: linear-gradient(rgba(249, 115, 22, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.03) 1px, transparent 1px);
    background-size: 40px 40px; z-index: 0; 
  }

  /* --- HEADER & TABS --- */
  .section-header { text-align: center; margin-bottom: 60px; position: relative; z-index: 5; }
  .main-title { font-size: 2.5rem; font-weight: 800; margin-bottom: 12px; color: #0F172A; letter-spacing: -0.02em; }
  .sub-title { color: #64748B; max-width: 650px; margin: 0 auto 40px; font-size: 1.1rem; line-height: 1.6; }

  .tabs-container { display: flex; justify-content: center; }
  .tabs-scroll { display: flex; gap: 8px; background: white; padding: 6px; border-radius: 50px; border: 1px solid #E2E8F0; box-shadow: 0 10px 20px -5px rgba(0,0,0,0.05); overflow-x: auto; scrollbar-width: none; }
  .tabs-scroll::-webkit-scrollbar { display: none; }
  
  .tab-pill { background: transparent; border: none; color: #64748B; padding: 10px 20px; border-radius: 40px; cursor: pointer; font-weight: 600; font-size: 0.9rem; white-space: nowrap; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
  .tab-pill:hover { color: #F97316; background: #FFF7ED; }
  .tab-pill.active { background: #F97316; color: white; box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3); }

  /* --- GRID LAYOUT --- */
  .feature-display-grid { display: grid; grid-template-columns: 45% 50%; gap: 5%; align-items: center; min-height: 550px; }

  /* --- VISUAL COL --- */
  .visual-col { position: relative; height: 500px; display: flex; justify-content: center; align-items: center; }
  .hologram-stage { display: grid; width: 320px; height: 100%; align-items: center; justify-items: center; }
  .hologram-card-wrapper { grid-area: 1 / 1; width: 100%; display: flex; flex-direction: column; align-items: center; z-index: 2; }

  .projector-base-glow { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); width: 200px; height: 40px; background: radial-gradient(ellipse at center, rgba(249, 115, 22, 0.4) 0%, transparent 70%); filter: blur(15px); z-index: 1; animation: pulseGlow 3s infinite alternate; }
  @keyframes pulseGlow { from { opacity: 0.5; transform: translateX(-50%) scale(0.8); } to { opacity: 1; transform: translateX(-50%) scale(1.1); } }

  .hologram-card { position: relative; width: 100%; aspect-ratio: 9/18; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.8); border-radius: 24px; box-shadow: 0 20px 50px -10px rgba(249, 115, 22, 0.15), 0 0 0 1px rgba(249, 115, 22, 0.1); overflow: hidden; transform: perspective(1000px) rotateY(-2deg); transition: transform 0.5s; }
  .hologram-card:hover { transform: perspective(1000px) rotateY(0deg) translateY(-5px); }

  .screen-content { width: 100%; height: 100%; padding: 8px; }
  .feature-img { width: 100%; height: 100%; object-fit: cover; border-radius: 18px; }

  .scanline { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, transparent 50%, rgba(249, 115, 22, 0.03) 50%); background-size: 100% 4px; pointer-events: none; z-index: 5; }
  .glass-shimmer { position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent); transform: skewX(-20deg); animation: shimmer 4s infinite; pointer-events: none; z-index: 6; }
  @keyframes shimmer { 0% { left: -100%; } 20% { left: 200%; } 100% { left: 200%; } }

  .corner { position: absolute; width: 20px; height: 20px; border: 2px solid #F97316; opacity: 0.5; z-index: 10; }
  .corner-tl { top: 10px; left: 10px; border-right: none; border-bottom: none; border-radius: 6px 0 0 0; }
  .corner-tr { top: 10px; right: 10px; border-left: none; border-bottom: none; border-radius: 0 6px 0 0; }
  .corner-bl { bottom: 10px; left: 10px; border-right: none; border-top: none; border-radius: 0 0 0 6px; }
  .corner-br { bottom: 10px; right: 10px; border-left: none; border-top: none; border-radius: 0 0 6px 0; }

  .hologram-label { margin-top: 20px; background: rgba(249, 115, 22, 0.08); color: #EA580C; padding: 6px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; display: flex; align-items: center; gap: 8px; border: 1px solid rgba(249, 115, 22, 0.2); }
  .pulse-dot { width: 6px; height: 6px; background: #F97316; border-radius: 50%; animation: blink 1.5s infinite; }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

  /* --- CONTENT COL --- */
  .content-col { padding-left: 20px; }
  .text-stage { display: grid; }
  .text-content-wrapper { grid-area: 1 / 1; }
  .feature-headline { font-size: 2rem; line-height: 1.25; margin-bottom: 20px; font-weight: 800; color: #1E293B; }
  .feature-desc { color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 30px; }
  
  .points-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; }
  .point-item { display: flex; align-items: center; gap: 16px; padding: 12px; background: white; border-radius: 12px; border: 1px solid #F1F5F9; box-shadow: 0 2px 5px rgba(0,0,0,0.02); transition: transform 0.2s; }
  .point-item:hover { transform: translateX(5px); border-color: #FED7AA; }
  .check-icon { width: 24px; height: 24px; color: #F97316; flex-shrink: 0; }
  .point-text { font-weight: 600; color: #334155; font-size: 1rem; }

  .btn-cta { background: #F97316; color: white; border: none; padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 10px 20px -5px rgba(249, 115, 22, 0.3); }
  .btn-cta:hover { background: #EA580C; transform: translateY(-2px); box-shadow: 0 15px 25px -5px rgba(249, 115, 22, 0.4); }

  /* --- RESPONSIVE --- */
  @media (max-width: 968px) {
    .feature-display-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
    .content-col { padding-left: 0; order: 2; }
    .visual-col { order: 1; margin-bottom: 20px; height: 450px; }
    .hologram-stage { width: 280px; }
    .points-list { align-items: flex-start; text-align: left; }
    .main-title { font-size: 2rem; }
    .tabs-scroll { justify-content: flex-start; }
    .corner { display: none; }
    .solution-section { padding-bottom: 120px; }
  }
</style>
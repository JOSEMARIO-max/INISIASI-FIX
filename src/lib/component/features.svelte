<script>
  import { onMount } from "svelte";
  // Menambahkan 'scale' untuk animasi pop-up yang lebih hidup
  import { fade, fly, scale } from "svelte/transition";
  import { cubicOut, quintOut, backOut, quartIn } from "svelte/easing";
  
  // --- 1. DATA FITUR DENGAN DETAIL LENGKAP ---
  const features = [
    { 
      id: 1,  
      shortName: "HRD", 
      title: "HRD & Staff Management", 
      desc: "Tingkatkan efisiensi tata kelola Sumber Daya Manusia (SDM) pesantren melalui sistem digital terintegrasi. Mulai dari pemantauan absensi asatidz secara real-time, perhitungan mukafaah (gaji) otomatis yang presisi, hingga manajemen cuti dan penilaian kinerja yang transparan.", 
      points: ["Database Karyawan", "Absensi Geotagging", "Payroll Otomatis"], 
      details: [
        "Database Terpusat: Simpan data biodata, riwayat pendidikan, dan berkas asatidz dalam satu cloud aman.",
        "Absensi Pintar: Validasi kehadiran menggunakan GPS (Radius) dan Face Recognition untuk mencegah kecurangan.",
        "Payroll System: Hitung gaji pokok, tunjangan, potongan kasbon, dan lembur secara otomatis lalu generate slip gaji PDF.",
        "Manajemen Cuti: Pengajuan dan persetujuan cuti dilakukan via aplikasi tanpa kertas."
      ],
      image: "/HRD.png" 
    },
    { 
      id: 2,  
      shortName: "Academic", 
      title: "Academic Management", 
      desc: "Transformasi total tata kelola pendidikan pesantren. Mulai dari penyusunan kurikulum yang fleksibel, penjadwalan otomatis anti-bentrok, hingga rekapitulasi nilai dan pencetakan rapor digital. Semuanya terintegrasi untuk memudahkan pemantauan KBM (Kegiatan Belajar Mengajar) secara real-time.", 
      points: ["Jadwal & Kalender", "Input Nilai Multi-Aspek", "Cetak Rapor Otomatis"], 
      details: [
        "Kurikulum Kustom: Dukungan untuk kurikulum K13, Merdeka, atau Kurikulum Khas Pesantren (Salaf).",
        "Rapor Otomatis: Guru hanya input nilai, sistem yang mengkalkulasi rata-rata, ranking, dan generate PDF rapor.",
        "Presensi Kelas: Monitoring kehadiran santri di setiap mata pelajaran secara real-time.",
        "Jadwal Anti-Bentrok: Algoritma pintar untuk menyusun jadwal pelajaran agar tidak ada guru yang bentrok."
      ],
      image: "/MENU AKADEMIK.png" 
    },
    { 
      id: 3,  
      shortName: "Tahfidz", 
      title: "Tahfidz Management", 
      desc: "Digitalisasi jurnal setoran hafalan (ziyadah & murajaah). Musyrif cukup input via HP, dan sistem otomatis merekap capaian target serta mengirim laporan perkembangan langsung ke tangan wali santri tanpa jeda.", 
      points: ["Notifikasi Real-time", "Grafik Hafalan", "Jurnal Musyrif"], 
      details: [
        "Notifikasi WhatsApp: Orang tua menerima pesan otomatis setiap kali anak menyetorkan hafalan.",
        "Target vs Realisasi: Grafik visual untuk melihat apakah santri mencapai target hafalan bulanan.",
        "Riwayat Mutqin: Mencatat kualitas hafalan (lancar/tidak) dan riwayat pengulangan (murajaah).",
        "Digital Qur'an Tracker: Tracking surat dan ayat terakhir yang dihafal secara presisi."
      ],
      image: "/Home (TQ).png" 
    },
    { 
      id: 4,  
      shortName: "Keuangan", 
      title: "Finance & Payment System", 
      desc: "Modernisasi tata kelola keuangan dengan sistem pembayaran terintegrasi. Nikmati kemudahan transaksi multi-channel (Virtual Account, E-Wallet, Retail) yang terverifikasi otomatis, menciptakan arus kas yang transparan, akuntabel, dan real-time.", 
      points: ["Multi-Channel Payment", "Laporan Arus Kas", "Tagihan Otomatis"], 
      details: [
        "Virtual Account: Setiap santri memiliki nomor VA unik (BRI, BNI, Mandiri, BSI, dll) untuk pembayaran otomatis.",
        "Notifikasi Tagihan: Pengingat pembayaran SPP dikirim otomatis ke WA wali santri sebelum jatuh tempo.",
        "Laporan Real-time: Bendahara bisa melihat uang masuk detik ini juga tanpa rekap manual.",
        "Cashless Santri: Kartu santri berfungsi sebagai e-money untuk jajan di kantin (opsional)."
      ],
      image: "/Keuangan santri.png" 
    },
    { 
      id: 5,  
      shortName: "CCTV", 
      title: "CCTV for Parent", 
      desc: "Hadirkan ketenangan batin bagi orang tua yang jauh. Fitur ini memungkinkan wali santri memantau aktivitas positif ananda di area publik pesantren secara real-time melalui aplikasi, menjembatani rindu dan memastikan keamanan lingkungan belajar.", 
      points: ["Streaming Stabil", "Jadwal Terbatas", "Privasi Terjaga"], 
      details: [
        "Akses Terjadwal: CCTV hanya bisa diakses pada jam tertentu (misal: jam istirahat) untuk menjaga privasi.",
        "Zona Publik Saja: Kamera hanya menyorot area umum seperti lapangan, masjid, atau kantin (bukan asrama/toilet).",
        "Server Ringan: Teknologi kompresi video agar hemat kuota data bagi wali santri.",
        "Log Akses: Pesantren bisa memantau siapa saja wali yang sedang mengakses CCTV."
      ],
      image: "/cctv.jpg" 
    },
    { 
      id: 6,  
      shortName: "PPDB", 
      title: "PPDB Online & Seleksi", 
      desc: "Perluas jangkauan dakwah dan rekrutmen santri tanpa batas wilayah. Sistem PPDB digital yang memudahkan calon wali santri mendaftar, melengkapi berkas, hingga mengikuti ujian seleksi dari rumah masing-masing.", 
      points: ["Formulir Custom", "Ujian CBT Online", "Generate Kartu Ujian"], 
      details: [
        "Paperless: Upload berkas KK, Akta, dan Ijazah langsung di sistem tanpa fotokopi fisik.",
        "Computer Based Test (CBT): Ujian seleksi masuk bisa dikerjakan dari rumah calon santri.",
        "Pengumuman Online: Status kelulusan diumumkan via website dan notifikasi WA.",
        "Payment Gateway: Pembayaran biaya pendaftaran terverifikasi otomatis."
      ],
      image: "/PPDB.jpg" 
    },
    { 
      id: 7,  
      shortName: "Sosmed", 
      title: "Sosial Media Ekslusif Pondok", 
      desc: "Alternatif media sosial yang aman dan penuh berkah. Ruang ekspresi santri dan silaturahmi wali yang mengedepankan adab, menyajikan konten edukatif serta inspirasi dakwah bagi masyarakat luas", 
      points: ["Feed Kegiatan", "Interaksi Wali", "Lingkungan Aman"], 
      details: [
        "Private Feed: Hanya wali santri terdaftar yang bisa melihat foto/video kegiatan.",
        "Moderasi Konten: Semua postingan harus melalui persetujuan admin pondok.",
        "Komentar Positif: Fitur komentar untuk wali saling mendoakan dan menyemangati santri.",
        "Album Digital: Arsip foto kegiatan santri yang tersimpan rapi selamanya."
      ],
      image: "/Home.png" 
    },
    { 
      id: 8,  
      shortName: "Market", 
      title: "Marketplace Civitas Pondok", 
      desc: "ikhtiar memudahkan penggunaka untuk maenemukan serta membeli berbagai produk dari civitas pondok, mitra marketplace , dan maca-macam kebutuhan santri.", 
      points: ["Belanja Jarak Jauh", "Topup Saldo", "Limit Belanja"], 
      details: [
        "E-Kantin: Santri belanja menggunakan kartu/fingerprint, saldo terpotong otomatis.",
        "Belanja Wali: Orang tua bisa membelikan kitab/seragam dari rumah, barang diantar ke asrama.",
        "Limit Harian: Orang tua bisa mengatur batas jajan harian anak (misal: max Rp 20.000/hari).",
        "Laporan Jajan: Orang tua bisa melihat detil apa saja yang dibeli anak."
      ],
      image: "/Marketplace.jpg" 
    },
    { 
      id: 9,  
      shortName: "Donasi", 
      title: "Online Donation Sytem", 
      desc: "Salurkan kebaikan tanpa batas. Dukung kemajuan pesantren melalui fitur donasi dan wakaf tunai yang amanah, lengkap dengan laporan penyaluran dana pesantren & umat yang dapat dipantau secara real-time.", 
      points: ["Campaign Donasi", "Update Progres", "Laporan Penyaluran"], 
      details: [
        "Crowdfunding: Buat program donasi (misal: Pembangunan Masjid) dengan target dana.",
        "Wakaf Tunai: Memudahkan wali berwakaf mulai dari nominal kecil via e-wallet.",
        "Update Kabar: Donatur mendapat notifikasi perkembangan program yang didanai.",
        "Sertifikat Digital: Bukti donasi/wakaf dikirim otomatis ke email/WA donatur."
      ],
      image: "/Donasi Online.jpg" 
    }
  ];
   
  let activeFeature = features[2]; // Default start
  let sectionRef;
  let isVisible = false;

  // --- 2. LOGIC MODAL ---
  let showModal = false;
  let modalData = null;

  function openModal(feature) {
    modalData = feature;
    showModal = true;
    document.body.style.overflow = 'hidden'; // Stop scroll background
  }

  function closeModal() {
    showModal = false;
    document.body.style.overflow = 'auto'; // Restore scroll
  }

  // Handle ESC key to close modal
  function handleKeydown(e) {
    if (e.key === 'Escape' && showModal) closeModal();
  }

  // Logic Scroll Animation Section
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    if (sectionRef) observer.observe(sectionRef);
    return () => observer.disconnect();
  });
</script>

<svelte:window on:keydown={handleKeydown}/>

<section class="solution-section {isVisible ? 'is-visible' : ''}" id="features" bind:this={sectionRef}>
  
  <div class="tech-grid-bg"></div>
  
  <div class="container relative z-10">
    
    <div class="section-header text-center reveal-item delay-1">
      <h2 class="main-title">EKOSISTEM <span class="text-highlight">PESANTREN DIGITAL</span></h2>
      <p class="sub-title"><span class="brand-gradient">INISIASI</span> hadir dengan 9 fitur utama yang saling terhubung untuk menciptakan ekosistem pondok pesantren yang lebih transparan, efektif dan efisien.</p>
      
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
              <div class="hologram-card" on:click={() => openModal(activeFeature)}>
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
                <button class="btn-cta" on:click={() => openModal(activeFeature)}>
                  Pelajari Modul {activeFeature.shortName} →
                </button>
              </div>
            </div>
          {/key}
        </div>
      </div>

    </div>
  </div>

  {#if showModal && modalData}
    <div 
      class="modal-backdrop" 
      on:click={closeModal} 
      transition:fade={{ duration: 300 }}
    >
      <div 
        class="modal-container" 
        on:click|stopPropagation 
        in:scale={{ start: 0.9, duration: 400, easing: backOut }}
        out:scale={{ start: 0.95, duration: 250, easing: quartIn, opacity: 0 }}
      >
        <button class="modal-close-btn" on:click={closeModal}>&times;</button>
        
        <div class="modal-layout">
          <div class="modal-visual-side">
            <div class="modal-hologram-box">
               <div class="scanline"></div>
               <div class="glass-shimmer"></div>
               <img src={modalData.image} alt={modalData.title} class="modal-img" />
               <div class="corner corner-tl"></div><div class="corner corner-tr"></div>
               <div class="corner corner-bl"></div><div class="corner corner-br"></div>
            </div>
          </div>

          <div class="modal-content-side">
            <span class="modal-subtitle">Detail Fitur</span>
            <h2 class="modal-title">{modalData.title}</h2>
            <p class="modal-desc-main">{modalData.desc}</p>
            
            <div class="modal-divider"></div>
            
            <h4 class="modal-poin-title">Keunggulan Utama:</h4>
            <ul class="modal-detail-list">
              {#each modalData.details as detail}
                <li>
                  <span class="bullet"></span>
                  {detail}
                </li>
              {/each}
            </ul>

            <button class="btn-modal-action" on:click={() => window.open('https://wa.me/628123456789', '_blank')}>
              Konsultasi Fitur Ini via WA
            </button>
          </div>
        </div>
      </div>
    </div>
  {/if}

</section>

<style>
  /* --- SCROLL ANIMATION --- */
  .reveal-item { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1); will-change: opacity, transform; }
  .solution-section.is-visible .reveal-item { opacity: 1; transform: translateY(0); }
  .delay-1 { transition-delay: 0.1s; } .delay-2 { transition-delay: 0.3s; } .delay-3 { transition-delay: 0.5s; }

  /* --- GLOBAL CONFIG --- */
  .solution-section { background-color: #FFFFFF; background: linear-gradient(180deg, #FFFFFF 0%, #FFF7ED 100%); padding: 80px 0 200px; position: relative; overflow: hidden; color: #1E293B; font-family: 'Inter', sans-serif; }
  .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
  .text-highlight { color: #F97316; }
  .relative { position: relative; }
  .z-10 { z-index: 10; }
  .brand-gradient { font-weight: bold; background: linear-gradient(to right, #F97316, #FBBF24); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; padding-bottom: 2px; }
  .tech-grid-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: linear-gradient(rgba(249, 115, 22, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.03) 1px, transparent 1px); background-size: 40px 40px; z-index: 0; }

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
  .hologram-card { position: relative; width: 100%; aspect-ratio: 9/18; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.8); border-radius: 24px; box-shadow: 0 20px 50px -10px rgba(249, 115, 22, 0.15), 0 0 0 1px rgba(249, 115, 22, 0.1); overflow: hidden; transform: perspective(1000px) rotateY(-2deg); transition: transform 0.5s; cursor: pointer; }
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

  /* ========================================= */
  /* --- MODAL STYLES (NEW) --- */
  /* ========================================= */
   
  .modal-backdrop {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex; justify-content: center; align-items: center;
    padding: 20px;
  }

  .modal-container {
    background: #FFFFFF;
    width: 100%; max-width: 900px;
    border-radius: 24px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    position: relative;
    overflow: hidden;
    max-height: 90vh;
    display: flex; flex-direction: column;
  }

  .modal-close-btn {
    position: absolute; top: 15px; right: 20px;
    background: transparent; border: none; font-size: 2rem;
    color: #64748B; cursor: pointer; z-index: 10;
    transition: 0.2s; line-height: 1;
  }
  .modal-close-btn:hover { color: #EF4444; transform: scale(1.1); }

  .modal-layout {
    display: grid; grid-template-columns: 40% 60%;
    height: 100%; overflow: auto;
  }

  /* Modal Left Side (Visual) */
  .modal-visual-side {
    background: #F8FAFC;
    padding: 40px;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    border-right: 1px solid #E2E8F0;
    position: relative;
  }

  .modal-hologram-box {
    width: 100%; aspect-ratio: 8/18;
    max-width: 240px;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 40px -5px rgba(249, 115, 22, 0.2);
    border: 1px solid rgba(249, 115, 22, 0.1);
  }
  .modal-img { width: 100%; height: 100%; object-fit: cover; }

  .modal-icon-badge {
    margin-top: 25px;
    font-size: 2.5rem;
    width: 70px; height: 70px;
    background: white; border-radius: 50%;
    display: grid; place-items: center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    border: 1px solid #F1F5F9;
  }

  /* Modal Right Side (Content) */
  .modal-content-side {
    padding: 40px 50px;
    display: flex; flex-direction: column;
    overflow-y: auto;
  }

  .modal-subtitle { color: #F97316; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
  .modal-title { font-size: 2rem; font-weight: 800; color: #0F172A; margin: 0 0 15px 0; line-height: 1.2; }
  .modal-desc-main { color: #475569; font-size: 1.05rem; line-height: 1.6; margin-bottom: 25px; }
   
  .modal-divider { height: 1px; background: #E2E8F0; width: 100%; margin-bottom: 25px; }

  .modal-poin-title { font-size: 1.1rem; color: #1E293B; margin-bottom: 15px; font-weight: 700; }

  .modal-detail-list { list-style: none; padding: 0; margin: 0 0 30px 0; display: flex; flex-direction: column; gap: 12px; }
  .modal-detail-list li { display: flex; align-items: flex-start; gap: 10px; color: #334155; font-size: 0.95rem; line-height: 1.5; }
  .bullet { width: 6px; height: 6px; background: #F97316; border-radius: 50%; margin-top: 8px; flex-shrink: 0; }

  .btn-modal-action {
    margin-top: auto;
    background: #0F172A; color: white;
    border: none; padding: 15px; width: 100%;
    border-radius: 10px; font-weight: 600; cursor: pointer;
    transition: 0.2s;
  }
  .btn-modal-action:hover { background: #334155; }

  /* Responsive Modal */
  @media (max-width: 968px) {
    .modal-layout { grid-template-columns: 1fr; }
    .modal-visual-side { padding: 30px; border-right: none; border-bottom: 1px solid #E2E8F0; }
    .modal-hologram-box { max-width: 180px; }
    .modal-content-side { padding: 30px; }
    .modal-title { font-size: 1.5rem; }
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
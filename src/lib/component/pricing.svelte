<script>
  // PENTING: Gunakan utilitas viewport yang kamu punya
  import { viewport } from "$lib/utils.js";

  // Data distruktur ulang agar cocok dengan layout Bento Grid
  const features = [
    { title: "HRD & Staff", desc: "Manajemen SDM", icon: "👥", span: "col-span-1 row-span-1" },
    { title: "Academic", desc: "Sistem Belajar", icon: "📚", span: "col-span-1 row-span-1" },
    { title: "Tahfidz", desc: "Monitoring Hafalan", icon: "📖", span: "col-span-1 row-span-1" },
    { title: "Social Media", desc: "Eksklusif Pondok", icon: "📱", span: "col-span-1 row-span-1" },
    { title: "CCTV For Parents", desc: "Akses Real-time", icon: "🎥", span: "col-span-2 row-span-1" },
    { title: "Finance Gateway", desc: "Sistem Pembayaran", icon: "💳", span: "col-span-2 row-span-1" },
    { title: "Marketplace", desc: "Ekonomi Pesantren", icon: "🛒", span: "col-span-1 row-span-1" },
    { title: "Donation", desc: "Galang Dana", icon: "🤝", span: "col-span-1 row-span-1" },
    { title: "PPDB", desc: "Penerimaan Santri", icon: "📝", span: "col-span-2 row-span-1" }
  ];
</script>

<section class="bento-universe-light" id="pricing" use:viewport>
  <div class="container relative z-10">
    
    <div class="header-section fade-in-section">
      <h2 class="cinematic-title">Evolusi <br><span class="highlight-text">Ekosistem Digital</span></h2>
      <p>Bukan sekadar aplikasi, ini adalah infrastruktur masa depan pesantren Anda.</p>
    </div>

    <div class="bento-grid">
      
      <div class="bento-item main-price-card col-span-2 row-span-2 anim-reveal" style="--i: 0">
        <div class="hover-glow"></div>
        
        <div class="content-wrapper">
          <div class="badge-status">LISENSI SEUMUR HIDUP</div>
          <h3>Full Package</h3>
          <div class="price-typography">
            <span class="curr">Rp</span>
            <span class="amount">50</span>
            <span class="unit">JUTA</span>
          </div>
          <p class="desc">Beli putus. Bebas biaya langganan bulanan. Kuasai semua fitur utama tanpa batasan waktu.</p>
          
          <button class="bento-btn">
            <span>Inisiasi Transformasi</span>
            <div class="btn-flare"></div>
          </button>
        </div>
      </div>

      {#each features as feat, i}
        <div class="bento-item feature-card {feat.span} anim-reveal" style="--i: {i + 1}">
          <div class="feat-icon">{feat.icon}</div>
          <div class="feat-text">
            <h4>{feat.title}</h4>
            <span>{feat.desc}</span>
          </div>
          <div class="hover-border"></div>
        </div>
      {/each}

    </div>
  </div>
</section>

<style>
  /* --- Canvas & Setup --- */
  .bento-universe-light {
    /* Padding bawah lebar agar lega di bagian bawah */
    padding: 100px 20px 200px 20px; 
    background-color: #FAFBFC; /* Latar cerah OFF-WHITE yang bersih */
    color: #1E293B; /* Slate 800 (Warna teks utama cerah) */
    font-family: 'Inter', sans-serif;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  .container { max-width: 1100px; width: 100%; }

  /* --- Cinematic Header --- */
  .header-section { margin-bottom: 70px; }
  .cinematic-title { font-size: 3.8rem; font-weight: 900; line-height: 1.1; margin: 0 0 20px; letter-spacing: -2px; text-transform: uppercase; color: #0F172A; }
  .highlight-text {
    /* Gradien Hijau-Oranye cerah */
    background: linear-gradient(135deg, #10B981 0%, #F97316 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .header-section p { font-size: 1.25rem; color: #64748B; max-width: 500px; line-height: 1.6; border-left: 3px solid #10B981; padding-left: 20px; font-weight: 500;}

  /* --- BENTO GRID SYSTEM --- */
  .bento-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 150px; /* Tinggi dasar setiap kotak */
    gap: 25px;
  }

  /* Utilitas Spanning */
  .col-span-1 { grid-column: span 1; }
  .col-span-2 { grid-column: span 2; }
  .row-span-1 { grid-row: span 1; }
  .row-span-2 { grid-row: span 2; }

  /* --- Base Item Style --- */
  .bento-item {
    background: #FFFFFF; /* Putih bersih total */
    /* Border sangat tipis dan halus agar tidak kaku */
    border: 1px solid rgba(15, 23, 42, 0.04); 
    border-radius: 32px; /* Radius besar ala Bento modern */
    position: relative;
    overflow: hidden;
    /* Bayangan dasar yang sangat lembut */
    box-shadow: 0 10px 20px -10px rgba(15, 23, 42, 0.03);
    
    /* Cubic-bezier Pro: percepatan di awal, perlambatan di akhir */
    transition: 
      transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
      box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
      border-color 0.3s ease;
  }

  /* Efek Hover Item */
  .bento-item:hover {
    transform: translateY(-8px) scale(1.01);
    z-index: 10;
    /* Bayangan lebih kuat saat di-hover untuk memberikan dimensi */
    box-shadow: 0 40px 80px -15px rgba(16, 185, 129, 0.12);
    border-color: rgba(16, 185, 129, 0.1); /* Border menyala halus */
  }

  /* --- Main Focal Point (Price Card) --- */
  .main-price-card {
    padding: 50px; display: flex; flex-direction: column; justify-content: space-between;
    /* Background kartu harga Putih Murni */
    background: #FFFFFF;
  }

  /* Efek Inner Glow saat kartu harga di-hover */
  .hover-glow {
    position: absolute; inset: 0;
    background: radial-gradient(circle at center, rgba(16, 185, 129, 0.05) 0%, transparent 70%);
    opacity: 0; transition: opacity 0.5s ease; pointer-events: none;
  }
  .main-price-card:hover .hover-glow { opacity: 1; }

  .badge-status { font-size: 0.8rem; font-weight: 800; color: #F97316; letter-spacing: 2px; margin-bottom: 12px; display: inline-block;}
  .main-price-card h3 { font-size: 2rem; margin: 0; font-weight: 900; color: #022C22; letter-spacing: -0.5px; }
  
  .price-typography { display: flex; align-items: flex-start; gap: 8px; margin: 15px 0 5px; line-height: 0.8; }
  .curr { font-size: 2rem; color: #10B981; font-weight: 700; margin-top: 12px; }
  .amount { font-size: 7rem; font-weight: 900; letter-spacing: -5px; color: #0F172A; text-shadow: 2px 2px 0px rgba(16, 185, 129, 0.05); }
  .unit { font-size: 2rem; color: #10B981; font-weight: 700; margin-top: auto; margin-bottom: 15px; }
  
  .main-price-card .desc { color: #475569; font-size: 1.1rem; line-height: 1.6; margin-bottom: 35px; }

  /* Tombol Utama Oranye-Gradien */
  .bento-btn {
    background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
    color: white; border: none; padding: 20px 30px; border-radius: 20px;
    font-size: 1.15rem; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 1px;
    position: relative; overflow: hidden; transition: 0.3s;
    box-shadow: 0 10px 20px -5px rgba(234, 88, 12, 0.3);
    width: max-content;
  }
  
  /* Efek Kilatan Cahaya di Tombol saat di-hover */
  .btn-flare {
    position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
    transform: skewX(-30deg); transition: 0.5s ease-in;
  }
  .bento-btn:hover .btn-flare { left: 200%; transition: 0.7s ease-out; }
  .bento-btn:hover { background: linear-gradient(135deg, #FB923C 0%, #F97316 100%); box-shadow: 0 15px 30px -10px rgba(234, 88, 12, 0.5); transform: translateY(-3px); }

  /* --- Feature Cards (Pola Warna Cerah) --- */
  .feature-card {
    display: flex; flex-direction: column; justify-content: center; padding: 30px;
  }

  .feat-icon { font-size: 3rem; margin-bottom: 15px; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  .feature-card:hover .feat-icon { transform: scale(1.15) translateY(-5px); }

  .feat-text h4 { margin: 0 0 5px; font-size: 1.1rem; color: #0F172A; font-weight: 700; }
  .feat-text span { font-size: 0.9rem; color: #64748B; font-weight: 500; }

  /* Efek border nyala saat di-hover */
  .hover-border { position: absolute; inset: 0; border-radius: 32px; border: 3px solid transparent; transition: 0.4s; pointer-events: none; }
  .feature-card:hover .hover-border { border-color: rgba(16, 185, 129, 0.3); box-shadow: inset 0 0 15px rgba(16, 185, 129, 0.1); }

  /* ========================================= */
  /* ============ ANIMASI CSS FIX ============ */
  /* ========================================= */

  /* Definisi keyframes 'Reveal' yang mulus */
  @keyframes bentoReveal {
    0% { opacity: 0; transform: translateY(30px) scale(0.95); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* Kelas dasar animasi untuk elemen bento */
  .anim-reveal {
    opacity: 0; /* Mulai dari invisible */
    animation: bentoReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  /* Memicu animasi staggered (berurutan) saat section masuk viewport */
  /* use:viewport biasanya menambahkan kelas 'intersecting' di Svelte */
  :global(.intersecting) .anim-reveal {
    /* Menghitung delay berdasarkan variabel --i yang diset di HTML */
    animation-delay: calc(var(--i) * 0.06s);
  }

  /* Animasi Header Section */
  @keyframes headerFadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-in-section {
    opacity: 0;
    animation: headerFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 0s;
  }

  /* ========================================= */
  /* --- Responsive Breakpoints (Mobile) --- */
  /* ========================================= */
  @media (max-width: 1024px) {
    .bento-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .col-span-2 { grid-column: span 2; }
    .cinematic-title { font-size: 2.8rem; }
    .main-price-card { padding: 30px; }
  }

  @media (max-width: 640px) {
    .bento-grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
    .col-span-1, .col-span-2, .row-span-1, .row-span-2 { grid-column: span 1; grid-row: span 1; }
    .amount { font-size: 5rem; }
    .cinematic-title { font-size: 2.2rem; }
    .header-section { text-align: center; }
    .header-section p { border-left: none; padding-left: 0; max-width: 100%; border-bottom: 3px solid #10B981; padding-bottom: 10px; }
  }
</style>
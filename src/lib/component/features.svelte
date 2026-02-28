<script>
  import { slide, fade } from "svelte/transition";
  // PENTING: Import dari $lib agar tidak error path
  import { viewport } from "$lib/utils.js";

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
  
  // Default active feature (Tahfidz)
  let activeFeature = features[2]; 
</script>

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

<style>
  .solution-section { background-color: #0B1120; padding: 100px 0 140px; position: relative; overflow: hidden; color: white; } 
  .tech-grid-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 50px 50px; opacity: 0.4; z-index: 0; } 
  .vignette-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, transparent 0%, #0B1120 90%); z-index: 1; pointer-events: none; } 
  .section-header-left { margin-bottom: 50px; position: relative; z-index: 2; } 
  .label-wrapper { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 15px; background: rgba(255,255,255,0.05); padding: 6px 12px; border-radius: 30px; border: 1px solid rgba(255,255,255,0.1); } 
  .pulsing-dot { width: 8px; height: 8px; background: #22C55E; border-radius: 50%; box-shadow: 0 0 10px #22C55E; animation: blink 2s infinite; } 
  .label-text { font-size: 0.75rem; font-weight: 700; color: #94A3B8; letter-spacing: 1px; } 
  .section-header-left h2 { font-size: 3rem; margin: 0 0 15px 0; line-height: 1.1; } 
  .text-highlight { color: var(--primary); } 
  .section-header-left p { color: #94A3B8; font-size: 1.1rem; max-width: 500px; } 
  .dashboard-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; position: relative; z-index: 5; } 
  .feature-accordion { display: flex; flex-direction: column; gap: 16px; max-height: 600px; overflow-y: auto; padding: 20px 12px 20px 0; -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 40px, black calc(100% - 40px), transparent 100%); mask-image: linear-gradient(to bottom, transparent 0%, black 40px, black calc(100% - 40px), transparent 100%); } 
  .feature-accordion::-webkit-scrollbar { width: 4px; } 
  .feature-accordion::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); border-radius: 10px; margin: 20px 0; } 
  .feature-accordion::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; } 
  .feature-accordion::-webkit-scrollbar-thumb:hover { background: var(--primary); } 
  .accordion-item { background: rgba(30, 41, 59, 0.4); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; overflow: hidden; cursor: pointer; transition: all 0.3s ease; position: relative; flex-shrink: 0; } 
  .accordion-item:hover { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.1); } 
  .accordion-item.active { background: #1E293B; border-color: var(--primary); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5); } 
  .acc-head { display: flex; align-items: center; gap: 15px; padding: 18px 24px; } 
  .icon-box { width: 40px; height: 40px; background: rgba(255,255,255,0.05); border-radius: 10px; display: grid; place-items: center; font-size: 1.2rem; transition: 0.3s; } 
  .accordion-item.active .icon-box { background: var(--primary); color: white; transform: scale(1.1); } 
  .head-info h4 { margin: 0; font-size: 1.1rem; font-weight: 600; color: #E2E8F0; } 
  .short-desc-preview { font-size: 0.8rem; color: #64748B; } 
  .active-indicator { margin-left: auto; width: 10px; height: 10px; background: var(--primary); border-radius: 50%; box-shadow: 0 0 10px var(--primary); } 
  .acc-body { padding: 0 24px 24px 79px; } 
  .main-desc { color: #CBD5E1; font-size: 0.95rem; line-height: 1.6; margin-bottom: 15px; } 
  .tags-container { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; } 
  .feature-tag { background: rgba(255,255,255,0.08); color: #38BDF8; font-size: 0.8rem; padding: 4px 10px; border-radius: 6px; font-weight: 500; } 
  .btn-learn-more { background: transparent; border: none; color: var(--primary); font-weight: 700; font-size: 0.9rem; cursor: pointer; padding: 0; display: flex; align-items: center; gap: 5px; transition: 0.3s; } 
  .btn-learn-more:hover { gap: 10px; } 
  .progress-line { height: 2px; background: linear-gradient(90deg, var(--primary), transparent); width: 0%; animation: loadLine 5s linear forwards; } 
  @keyframes loadLine { to { width: 100%; } } 
  .visual-stage { position: sticky; top: 150px; height: fit-content; display: flex; justify-content: center; } 
  .device-showcase { position: relative; width: 320px; height: 640px; } 
  .device-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 120%; height: 80%; background: radial-gradient(circle, rgba(249, 115, 22, 0.15), transparent 70%); filter: blur(60px); z-index: 0; } 
  .phone-frame-modern { position: relative; width: 100%; height: 100%; background: #000; border-radius: 48px; box-shadow: 0 0 0 4px #334155, 0 0 0 8px #1e293b, 0 30px 80px rgba(0,0,0,0.6); overflow: hidden; z-index: 5; } 
  .screen-display img { width: 100%; height: 100%; object-fit: cover; opacity: 0.9; } 
  .screen-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(0,0,0,0.1), transparent, rgba(0,0,0,0.2)); pointer-events: none; }
  @media (max-width: 968px) { .dashboard-layout { grid-template-columns: 1fr; gap: 50px; } .feature-accordion { order: 2; max-height: none; overflow: visible; padding: 0; mask-image: none; -webkit-mask-image: none; } .visual-stage { order: 1; position: relative; top: 0; margin-bottom: 20px; } .phone-frame-modern { height: 450px; } .device-showcase { width: 240px; height: 450px; margin: 0 auto; } }
</style>
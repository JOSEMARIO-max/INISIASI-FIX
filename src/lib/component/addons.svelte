<script>
  import { onMount } from "svelte";
  import { fly, fade, scale } from "svelte/transition";
  import { elasticOut, backOut, cubicOut } from "svelte/easing"; // Tambah cubicOut untuk animasi keluar

  // Kumpulan Ikon SVG
  const iconPayment = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`;
  const iconChecklist = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`;
  const iconAbsensi = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`;
  const iconBook = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;
  const iconPermit = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
  const iconHelpdesk = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
  const iconInventory = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;
  const iconHealthcare = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`;
  const iconFeedback = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"/></svg>`;
  const iconProductivity = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`;
  const iconTask = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;

  const waNumber = "6281234567890"; 

  const leftAddons = [
    { id: "spp", icon: iconPayment, title: "SPP Payment Gateway", desc: "Pembayaran SPP otomatis", details: "Fitur pembayaran SPP secara otomatis yang terhubung dengan payment gateway. Memudahkan wali santri membayar melalui Virtual Account, E-Wallet, atau minimarket secara real-time.", price: "Rp 10.000.000" },
    { id: "mutabaah", icon: iconChecklist, title: "Mutabaah Yaumiyyah", desc: "Checklist harian & pelanggaran", details: "Fitur checklist kegiatan harian, kebersihan, dan poin pelanggaran santri. Termasuk dengan sistem rekapitulasi pekanan dan bulanan untuk rapor karakter santri.", price: "Rp 8.000.000" },
    { id: "absensi", icon: iconAbsensi, title: "Absensi Online", desc: "Kehadiran guru & staff", details: "Sistem absensi kehadiran online berbasis lokasi (GPS) atau QR Code yang dirancang khusus untuk dewan guru dan team support lembaga.", price: "Rp 4.000.000" },
    { id: "hafalan", icon: iconBook, title: "Hafalan Hadits & Matan", desc: "Setoran hafalan santri", details: "Fitur checklist setoran hadits atau matan. Bisa dikustomisasi sesuai dengan kurikulum dan kebutuhan spesifik masing-masing pondok pesantren.", price: "Rp 20.000.000" },
    { id: "perizinan", icon: iconPermit, title: "Perizinan Santri", desc: "Approval izin via aplikasi", details: "Pengajuan izin pulang atau keluar pondok melalui akun aplikasi wali santri, yang langsung diteruskan untuk proses approval dari pihak manajemen pondok.", price: "Rp 4.000.000" },
  ];

  const rightAddons = [
    { id: "inventaris", icon: iconInventory, title: "Inventaris", desc: "Manajemen aset pondok", details: "Manajemen aset dan barang inventaris pondok secara komprehensif. Pantau siklus hidup barang dari pembelian, peminjaman, hingga status perbaikan.", price: "Rp 7.000.000" },
    { id: "healthcare", icon: iconHealthcare, title: "Healthcare Management", desc: "Monitoring kesehatan", details: "Sistem E-Klinik untuk monitoring riwayat kesehatan santri. Mencatat kunjungan, diagnosa, hingga stok obat-obatan di fasilitas kesehatan pondok.", price: "Rp 7.000.000" },
    { id: "saran", icon: iconFeedback, title: "Kotak Saran", desc: "Aspirasi & feedback", details: "Fasilitas kotak saran digital untuk menampung aspirasi, kritik, dan feedback dari wali santri maupun internal untuk manajemen yayasan.", price: "Rp 2.000.000" },
    { id: "produktifitas", icon: iconProductivity, title: "Produktifitas Guru", desc: "Monitoring KPI guru", details: "Monitoring produktivitas dan jam kerja dewan guru. Terhubung dengan absensi dan laporan mengajar harian sebagai dasar evaluasi (KPI).", price: "Rp 10.000.000" },
    { id: "tugas", icon: iconTask, title: "Tugas Liburan", desc: "Pantau amalan saat libur", details: "Monitoring penugasan dan amalan santri selama masa liburan. Santri dapat melaporkan kegiatannya dari rumah untuk direview oleh pembimbing.", price: "Rp 12.000.000" }
  ];

  let sectionRef;
  let isVisible = false;

  let showModal = false;
  let selectedData = null;

  function openModal(item) {
    selectedData = item;
    showModal = true;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    showModal = false;
    document.body.style.overflow = '';
    // Timing disesuaikan dengan durasi out-animation (300ms) agar tidak kedip
    setTimeout(() => { selectedData = null; }, 350);
  }

  function getWaLink(title) {
    const message = encodeURIComponent(`Halo, saya tertarik dan ingin konsultasi lebih lanjut mengenai fitur tambahan dari INISIASI: *${title}*. Boleh minta informasinya?`);
    return `https://wa.me/${waNumber}?text=${message}`;
  }

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef) observer.observe(sectionRef);
    return () => observer.disconnect();
  });
</script>

<section class="hub-section" bind:this={sectionRef}>
  <div class="ambient-glow glow-1"></div>
  <div class="ambient-glow glow-2"></div>
  
  <div class="container relative z-10">
    <div class="hub-header">
      {#if isVisible}
        <div in:fly={{ y: 30, duration: 800, easing: backOut }}>
          <h2 class="title">Butuh Fitur Lain? <span class="highlight">Kami Sediakan Semuanya</span></h2>
          <p class="subtitle">Kami mengerti setiap pondok pesantren memiliki cara kerja yang unik. Selain sistem inti, kami menyediakan belasan modul tambahan yang bebas Anda pilih, sesuaikan, dan aktifkan kapan saja..</p>
        </div>
      {/if}
    </div>

    <div class="hub-grid">
      <div class="center-connector-line"></div>

      <div class="side-column left-col">
        {#if isVisible}
          {#each leftAddons as item, i}
            <div 
              class="glass-card left-card clickable"
              role="button"
              on:click={() => openModal(item)}
              in:fly={{ x: -40, y: 15, duration: 800, delay: i * 80, easing: elasticOut }}
            >
              <div class="icon-box">{@html item.icon}</div>
              <div class="content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          {/each}
        {/if}
      </div>

      <div class="center-col">
        {#if isVisible}
          <div class="core-visual" in:scale={{ duration: 1000, start: 0.8, easing: elasticOut }}>
            <div class="pulse-ring ring-1"></div>
            <div class="pulse-ring ring-2"></div>
            <div class="floating-phone">
              <img src="/SNG.png" alt="App Interface" class="phone-img" />
            </div>
            <div class="platform-shadow"></div>
          </div>
        {/if}
      </div>

      <div class="side-column right-col">
        {#if isVisible}
          {#each rightAddons as item, i}
            <div 
              class="glass-card right-card clickable"
              role="button"
              on:click={() => openModal(item)}
              in:fly={{ x: 40, y: 15, duration: 800, delay: i * 80, easing: elasticOut }}
            >
              <div class="icon-box">{@html item.icon}</div>
              <div class="content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</section>

{#if showModal && selectedData}
  <div class="modal-backdrop" transition:fade={{ duration: 300 }} on:click={closeModal}>
    
    <div class="modal-content" 
      in:scale={{ duration: 500, start: 0.8, easing: backOut }} 
      out:scale={{ duration: 300, start: 0.9, opacity: 0, easing: cubicOut }} 
      on:click|stopPropagation>
      
      <button class="close-btn" on:click={closeModal}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      <div class="modal-header">
        <div class="modal-icon-large">{@html selectedData.icon}</div>
        <div>
          <span class="modal-badge">Modul Tambahan</span>
          <h3 class="modal-title">{selectedData.title}</h3>
        </div>
      </div>
      
      <div class="modal-body">
        <div class="desc-box">
          <h4>Penjelasan Fitur</h4>
          <p>{selectedData.details}</p>
        </div>
        
        <div class="price-box">
          <span class="price-label">Estimasi Harga (Add-on)</span>
          <span class="price-value">{selectedData.price}</span>
        </div>
        
        <div class="modal-actions">
          <button class="btn-outline" on:click={closeModal}>Tutup</button>
          <a href={getWaLink(selectedData.title)} target="_blank" rel="noopener noreferrer" class="btn-wa">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            Konsultasi Sekarang
          </a>
        </div>
      </div>
      
    </div>
  </div>
{/if}

<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

  :global(:root) {
    --primary: #F97316;
    --dark: #0F172A;
    --glass-bg: rgba(255, 255, 255, 0.75);
    --glass-border: rgba(255, 255, 255, 0.9);
    --font-main: 'Plus Jakarta Sans', sans-serif;
  }

  .hub-section {
    padding: 100px 20px;
    background: #F8FAFC;
    position: relative;
    overflow: hidden;
    font-family: var(--font-main);
  }

  .container { max-width: 1280px; margin: 0 auto; position: relative; }

  .ambient-glow { position: absolute; border-radius: 50%; filter: blur(100px); z-index: 0; opacity: 0.5; animation: moveGlow 10s infinite alternate; }
  .glow-1 { width: 600px; height: 600px; background: rgba(249, 115, 22, 0.08); top: -100px; left: -200px; }
  .glow-2 { width: 500px; height: 500px; background: rgba(59, 130, 246, 0.08); bottom: -100px; right: -100px; animation-delay: -5s; }

  @keyframes moveGlow { 0% { transform: translate(0, 0); } 100% { transform: translate(50px, 50px); } }

  .hub-header { text-align: center; margin-bottom: 60px; position: relative; z-index: 2; }
  
  .badge {
    display: inline-block; padding: 6px 16px; background: rgba(249, 115, 22, 0.1);
    color: var(--primary); border-radius: 20px; font-size: 0.85rem; font-weight: 700; margin-bottom: 15px;
  }

  .title { font-size: 3rem; font-weight: 800; color: var(--dark); letter-spacing: -0.04em; line-height: 1.1; margin-bottom: 20px; }
  .highlight { background: linear-gradient(135deg, var(--primary) 0%, #EA580C 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .subtitle { font-size: 1.1rem; color: #64748B; max-width: 650px; margin: 0 auto; line-height: 1.6; }

  .hub-grid { 
    display: grid; grid-template-columns: 1fr 340px 1fr; gap: 30px; align-items: center; position: relative; 
  }

  .center-connector-line {
    position: absolute; left: 50%; top: 10%; bottom: 10%; width: 1px;
    background: linear-gradient(to bottom, transparent, rgba(203, 213, 225, 0.5), transparent);
    transform: translateX(-50%); z-index: 0;
  }

  .side-column { display: flex; flex-direction: column; gap: 16px; position: relative; z-index: 2; }

  .glass-card {
    background: var(--glass-bg); backdrop-filter: blur(10px); border: 1px solid var(--glass-border);
    padding: 16px 20px; border-radius: 20px; display: flex; gap: 16px; align-items: center;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
  }
  
  .clickable { cursor: pointer; }

  .left-card { flex-direction: row-reverse; text-align: right; }
  .right-card { flex-direction: row; text-align: left; }

  .glass-card:hover {
    transform: translateY(-4px) scale(1.02); background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(249, 115, 22, 0.2);
  }

  .icon-box {
    width: 48px; height: 48px; background: #fff; border-radius: 14px;
    display: flex; align-items: center; justify-content: center; color: var(--primary);
    box-shadow: 0 4px 10px rgba(249, 115, 22, 0.1); flex-shrink: 0; transition: 0.3s;
  }
  .glass-card:hover .icon-box { background: var(--primary); color: #fff; transform: rotate(-10deg) scale(1.05); }
  .icon-box :global(svg) { width: 22px; height: 22px; }

  .content h3 { font-size: 1.05rem; font-weight: 700; color: var(--dark); margin: 0 0 2px 0; }
  .content p { font-size: 0.8rem; color: #64748B; margin: 0; line-height: 1.3; }

  .center-col { display: flex; justify-content: center; align-items: center; position: relative; z-index: 5; height: 100%; }
  .core-visual { position: sticky; top: 120px; width: 100%; display: flex; justify-content: center; }

  .floating-phone { position: relative; width: 100%; max-width: 280px; z-index: 2; animation: float 6s ease-in-out infinite; transform-origin: center center; }
  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }

  .phone-img { width: 120%; height: auto; display: block; margin-left: -10%; transform: rotate(-2deg); -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%); mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%); }

  .pulse-ring { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 50%; border: 1px solid rgba(249, 115, 22, 0.15); z-index: 1; animation: pulse 4s infinite; }
  .ring-1 { width: 320px; height: 320px; animation-delay: 0s; }
  .ring-2 { width: 420px; height: 420px; animation-delay: 2s; opacity: 0.5; border: 1px solid rgba(59, 130, 246, 0.1); }
  @keyframes pulse { 0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.8; } 100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0; } }

  /* =========================================
     MODAL POP-UP
     ========================================= */
  .modal-backdrop {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(8px);
    z-index: 9999; display: flex; justify-content: center; align-items: center;
    padding: 20px; font-family: var(--font-main);
  }

  .modal-content {
    background: #ffffff; border-radius: 28px; padding: 40px;
    width: 100%; max-width: 600px;
    position: relative; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  .close-btn {
    position: absolute; top: 24px; right: 24px; background: #F1F5F9; border: none;
    width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    color: #64748B; cursor: pointer; transition: 0.2s;
  }
  .close-btn:hover { background: #E2E8F0; color: #0F172A; }
  .close-btn svg { width: 20px; height: 20px; }

  .modal-header { display: flex; align-items: center; gap: 20px; margin-bottom: 28px; padding-right: 40px; }

  .modal-icon-large {
    width: 72px; height: 72px; background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(249, 115, 22, 0.2) 100%);
    color: var(--primary); border-radius: 20px; display: flex; align-items: center; justify-content: center;
  }
  .modal-icon-large :global(svg) { width: 36px; height: 36px; }

  .modal-badge { font-size: 0.8rem; font-weight: 700; color: var(--primary); text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px; }
  .modal-title { font-size: 1.75rem; font-weight: 800; color: var(--dark); margin: 0; line-height: 1.2; }

  .desc-box { background: #F8FAFC; padding: 20px; border-radius: 16px; margin-bottom: 20px; border: 1px solid #E2E8F0; }
  .desc-box h4 { font-size: 0.95rem; font-weight: 700; color: var(--dark); margin: 0 0 8px 0; }
  .desc-box p { color: #475569; line-height: 1.6; font-size: 1.05rem; margin: 0; }

  .price-box {
    display: flex; justify-content: space-between; align-items: center;
    padding: 20px; background: #FFF7ED; border: 1px dashed #FDBA74;
    border-radius: 16px; margin-bottom: 30px;
  }
  .price-label { font-size: 1rem; font-weight: 600; color: #C2410C; }
  .price-value { font-size: 1.25rem; font-weight: 800; color: var(--primary); }

  .modal-actions { display: flex; justify-content: flex-end; gap: 12px; }

  .btn-outline {
    background: transparent; color: #64748B; border: 2px solid #E2E8F0;
    padding: 12px 24px; border-radius: 12px; font-size: 1rem; font-weight: 700; font-family: var(--font-main);
    cursor: pointer; transition: 0.3s;
  }
  .btn-outline:hover { background: #F1F5F9; color: var(--dark); }

  .btn-wa {
    background: #25D366; color: white; border: none; text-decoration: none;
    padding: 12px 28px; border-radius: 12px; font-size: 1rem; font-weight: 700; font-family: var(--font-main);
    cursor: pointer; transition: 0.3s; display: flex; align-items: center; gap: 10px;
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
  }
  .btn-wa:hover { background: #20BD5A; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4); }
  .btn-wa svg { width: 20px; height: 20px; }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .hub-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
    .center-col { grid-column: span 2; order: -1; margin-bottom: 40px; }
    .center-connector-line { display: none; }
    .core-visual { position: relative; top: 0; }
    .glass-card { flex-direction: row !important; text-align: left !important; }
    .ring-2 { display: none; }
  }

  @media (max-width: 640px) {
    .hub-grid { grid-template-columns: 1fr; }
    .center-col { grid-column: span 1; }
    .title { font-size: 2.2rem; }
    .pulse-ring { width: 260px; height: 260px; }
    .floating-phone { max-width: 240px; }
    .modal-content { padding: 24px; }
    .modal-actions { flex-direction: column-reverse; }
    .btn-wa { justify-content: center; }
    .price-box { flex-direction: column; align-items: flex-start; gap: 8px; }
  }
</style>
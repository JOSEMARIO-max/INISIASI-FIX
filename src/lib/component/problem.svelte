<script>
  // FUNGSI ANIMASI REPLAY (Tetap sama)
  function replayAnim(node) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
        } else {
          node.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.2 });
    observer.observe(node);
    return { destroy() { observer.disconnect(); } };
  }
</script>

<section class="problem-section-modern" id="problem" use:replayAnim>
  
  <div class="bg-grid"></div>
  <div class="bg-blur-orb"></div>
  
  <div class="floating-elements">
    <span class="float-icon f1">✕</span>
    <span class="float-icon f2">?</span>
    <span class="float-icon f3">!</span>
    <span class="float-icon f4">⚠</span>
    <svg class="bg-connector" width="100%" height="100%">
      <path d="M100,200 Q400,50 700,200" fill="none" stroke="#E2E8F0" stroke-width="2" stroke-dasharray="10,10" class="dashed-path"/>
    </svg>
  </div>

  <div class="container relative z-10">
    
    <div class="section-header stagger-item">
      <span class="pill-badge">⚠️ Realita Lapangan</span>
      <h2>
        Kendala Sistem <br>
        <span class="highlight-wrapper">
          Pengelolaan Manual
          <span class="highlighter-bg"></span>
        </span>
      </h2>
      <p>Metode konvensional yang seringkali menghambat akselerasi pesantren menuju era digital yang transparan.</p>
    </div>

    <div class="problem-grid-modern">
      
      <div class="modern-card stagger-item">
        <div class="card-top-row">
          <div class="card-icon-box orange"><span class="emoji">👁️</span></div>
          <span class="status-label warning">⚠ Needs Attention</span>
        </div>
        <div class="card-content">
          <h3>Blind Spot Wali Santri</h3>
          <p>Kecemasan orang tua akibat tidak adanya akses pantauan hafalan atau aktivitas anak secara <em>real-time</em>.</p>
        </div>
      </div>

      <div class="modern-card stagger-item">
        <div class="card-top-row">
          <div class="card-icon-box red"><span class="emoji">📉</span></div>
          <span class="status-label danger">✕ Data Corrupted</span>
        </div>
        <div class="card-content">
          <h3>Risiko Human Error</h3>
          <p>Pencatatan di kertas rawan hilang atau rusak. Validitas laporan keuangan dan nilai menjadi sulit dipertanggungjawabkan.</p>
        </div>
      </div>

      <div class="modern-card stagger-item">
        <div class="card-top-row">
          <div class="card-icon-box blue"><span class="emoji">⛓️</span></div>
          <span class="status-label info">⟳ Not Synced</span>
        </div>
        <div class="card-content">
          <h3>Silo Data Terpisah</h3>
          <p>Data Keuangan, Akademik, dan Asrama tidak sinkron. Pimpinan sulit mengambil keputusan strategis yang tepat.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  /* --- LAYOUT --- */
  .problem-section-modern { padding: 120px 20px; background-color: #FFFFFF; position: relative; overflow: hidden; color: #1E293B; }

  /* --- ANIMASI TRANSISI --- */
  :global(.problem-section-modern .stagger-item) { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
  :global(.problem-section-modern.is-visible .stagger-item) { opacity: 1; transform: translateY(0); }
  :global(.problem-section-modern.is-visible .stagger-item:nth-child(1)) { transition-delay: 0.1s; }
  :global(.problem-section-modern.is-visible .stagger-item:nth-child(2)) { transition-delay: 0.2s; }
  :global(.problem-section-modern.is-visible .stagger-item:nth-child(3)) { transition-delay: 0.3s; }

  /* --- BACKGROUND DECOR (BARU) --- */
  .bg-grid { position: absolute; inset: 0; background-image: radial-gradient(#E2E8F0 1.5px, transparent 1.5px); background-size: 30px 30px; opacity: 0.7; z-index: 0; }
  .bg-blur-orb { position: absolute; top: -150px; right: -100px; width: 600px; height: 600px; background: radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none; }
  
  .floating-elements { position: absolute; inset: 0; pointer-events: none; z-index: 1; overflow: hidden; }
  .float-icon { position: absolute; font-size: 2rem; font-weight: 900; color: #CBD5E1; opacity: 0.4; animation: floatAnim 6s infinite ease-in-out; }
  .f1 { top: 20%; left: 10%; animation-delay: 0s; color: #FECACA; } /* Merah pudar */
  .f2 { top: 15%; right: 15%; animation-delay: 1.5s; color: #FED7AA; } /* Orange pudar */
  .f3 { bottom: 30%; left: 5%; animation-delay: 3s; font-size: 3rem; }
  .f4 { bottom: 20%; right: 5%; animation-delay: 4.5s; font-size: 2.5rem; color: #FCA5A5; }

  @keyframes floatAnim { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(10deg); } }

  .bg-connector { position: absolute; top: 0; left: 0; opacity: 0.6; }
  .dashed-path { stroke-dasharray: 10; animation: dashMove 30s linear infinite; }
  @keyframes dashMove { to { stroke-dashoffset: 1000; } }

  /* --- HEADER --- */
  .section-header { text-align: center; max-width: 650px; margin: 0 auto 70px; position: relative; z-index: 2; }
  .pill-badge { background: #FFF7ED; color: #C2410C; border: 1px solid #FFEDD5; padding: 6px 16px; border-radius: 50px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; display: inline-block; margin-bottom: 20px; }
  .section-header h2 { font-size: 3rem; font-weight: 800; line-height: 1.2; color: #0F172A; margin-bottom: 20px; }
  .section-header p { font-size: 1.1rem; color: #64748B; line-height: 1.6; }

  /* --- ANIMASI MARKAWAY --- */
  .highlight-wrapper { position: relative; display: inline-block; z-index: 1; padding: 0 5px; }
  .highlighter-bg { position: absolute; bottom: 5px; left: 0; width: 0%; height: 35%; background-color: #FDBA74; z-index: -1; opacity: 0.6; border-radius: 4px; transition: width 1s cubic-bezier(0.22, 1, 0.36, 1); }
  :global(.problem-section-modern.is-visible) .highlighter-bg { width: 100%; transition-delay: 0.6s; }

  /* --- GRID CARDS --- */
  .problem-grid-modern { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; position: relative; z-index: 2; }

  /* CARD DESIGN BARU (LEBIH PADAT) */
  .modern-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 20px; padding: 30px; position: relative; transition: all 0.4s ease; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02); display: flex; flex-direction: column; gap: 20px; }
  .modern-card:hover { transform: translateY(-8px) !important; box-shadow: 0 20px 30px -5px rgba(0, 0, 0, 0.08); border-color: #F97316; }

  .card-top-row { display: flex; justify-content: space-between; align-items: flex-start; }
  
  /* Status Label (Bikin lebih Techy) */
  .status-label { font-size: 0.7rem; font-weight: 700; padding: 4px 10px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; }
  .status-label.warning { background: #FEF3C7; color: #D97706; }
  .status-label.danger { background: #FEE2E2; color: #DC2626; }
  .status-label.info { background: #E0F2FE; color: #0284C7; }

  .card-icon-box { width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; transition: 0.3s; }
  .card-icon-box.orange { background: #FFF7ED; color: #F97316; }
  .card-icon-box.red { background: #FEF2F2; color: #EF4444; }
  .card-icon-box.blue { background: #EFF6FF; color: #3B82F6; }

  .modern-card:hover .card-icon-box { transform: scale(1.1) rotate(5deg); }

  .card-content h3 { font-size: 1.25rem; font-weight: 700; color: #0F172A; margin: 0 0 10px 0; }
  .card-content p { font-size: 0.95rem; color: #64748B; line-height: 1.6; margin: 0; }

  @media (max-width: 968px) { .section-header h2 { font-size: 2.2rem; } .bg-blur-orb { display: none; } }
</style>
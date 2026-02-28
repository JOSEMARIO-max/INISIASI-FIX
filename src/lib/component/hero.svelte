<script>
  import { fly, scale, fade } from "svelte/transition";
  import { cubicOut, elasticOut } from "svelte/easing";

  let scrollY = 0;

  function scrollToProblem() {
    const el = document.getElementById('problem');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // --- PENGATURAN LOGO PARTNER ---
  // Pastikan file gambar ini ada di dalam folder "static" kamu.
  const partners = [
    { src: "/SINT.png", alt: "Kemenag" },       // Ganti dengan nama file aslimu
    { src: "/logo-khwarizmi.jpg", alt: "NU" },                 // Ganti dengan nama file aslimu
    { src: "/SINT.png", alt: "BSI" },               // Ganti dengan nama file aslimu
    { src: "/muhammadiyah.png", alt: "Muhammadiyah" } // Ganti dengan nama file aslimu
  ];
</script>

<svelte:window bind:scrollY={scrollY} />

<section class="hero">
  <div class="bg-gradient-mesh"></div><div class="grid-lines"></div>
  
  <div class="container hero-grid">
    <div class="hero-text" style="transform: translateY({scrollY * 0.4}px); opacity: {1 - scrollY / 500};">
      
      <div class="badge-wrapper" in:fly={{ y: 20, duration: 800, delay: 200 }}>
        <span class="modern-badge">
          Digital Ecosystem Islamic Education
        </span>
      </div>

      <h1 in:fly={{ y: 30, duration: 1000, delay: 400, easing: cubicOut }}>
        Transformasi Digital <br>
        <span class="gradient-text-anim">Pesantren Masa Depan.</span>
      </h1>

      <p in:fly={{ y: 30, duration: 1000, delay: 600, easing: cubicOut }}>
        Infrastruktur digital terpadu untuk pengelolaan <strong>Akademik, Keuangan, & Tahfidz</strong> secara presisi. Wujudkan transparansi data <em>real-time</em> demi pondok yang lebih amanah.
      </p>

      <div class="cta-group" in:fly={{ y: 30, duration: 1000, delay: 800, easing: cubicOut }}>
        <button class="btn-primary big pulse-effect">Jadwalkan Demo</button>
        <button class="btn-secondary">Pelajari Fitur</button>
      </div>

      <div class="trusted-section" in:fade={{ duration: 1000, delay: 1000 }}>
        <span class="trusted-label">Dipercaya oleh:</span>
        <div class="logo-grid">
          {#each partners as partner}
            <div class="logo-item">
              <img src={partner.src} alt={partner.alt} class="partner-logo-img" />
            </div>
          {/each}
        </div>
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

<style>
  /* --- LAYOUT UTAMA --- */
  .hero { min-height: 100vh; padding-top: 100px; padding-bottom: 100px; position: relative; display: flex; align-items: center; overflow: hidden; background: var(--bg-gradient-top); } 
  .bg-gradient-mesh { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 10% 20%, rgba(249, 115, 22, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(45, 212, 191, 0.05) 0%, transparent 40%); z-index: 0; } 
  .grid-lines { position: absolute; width: 100%; height: 100%; top:0; left:0; z-index: 0; background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px); background-size: 50px 50px; } 
  .hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 80px; align-items: center; width: 100%; z-index: 1; margin-top: -60px; } 
  
  /* --- STYLE TEXT KIRI --- */
  .hero-text { max-width: 650px; display: flex; flex-direction: column; align-items: flex-start; } 
  
  /* Badge Style */
  .badge-wrapper { margin-bottom: 25px; }
  .modern-badge { display: inline-flex; align-items: center; gap: 10px; padding: 8px 16px; background: rgba(255, 247, 237, 0.8); border: 1px solid rgba(249, 115, 22, 0.2); border-radius: 100px; font-size: 0.8rem; font-weight: 700; color: #C2410C; backdrop-filter: blur(5px); text-transform: uppercase; letter-spacing: 0.5px; }
  .pulsing-dot { width: 8px; height: 8px; background: #22C55E; border-radius: 50%; box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.3); animation: pulse 2s infinite; }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); } 70% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); } 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); } }

  /* Typography */
  h1 { font-size: 3.8rem; font-weight: 800; color: #1E293B; line-height: 1.1; margin: 0 0 24px 0; letter-spacing: -1.5px; } 
  .gradient-text-anim { background: linear-gradient(to right, #F97316, #EA580C); -webkit-background-clip: text; -webkit-text-fill-color: transparent; } 
  p { font-size: 1.1rem; line-height: 1.7; margin-bottom: 40px; color: #64748B; max-width: 90%; font-weight: 400; } 
  
  /* Buttons */
  .cta-group { display: flex; gap: 15px; align-items: center; margin-bottom: 60px; } 
  .btn-primary { background: var(--primary); color: white; border: none; padding: 16px 36px; border-radius: 50px; font-weight: 700; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.4); font-size: 1rem; } 
  .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 20px 35px -10px rgba(249, 115, 22, 0.5); } 
  .btn-secondary { background: transparent; color: #64748B; border: 1px solid #CBD5E1; padding: 16px 36px; border-radius: 50px; font-weight: 600; cursor: pointer; transition: 0.3s; font-size: 1rem; }
  .btn-secondary:hover { border-color: var(--primary); color: var(--primary); background: #FFF7ED; }

  /* --- LOGO PARTNER SECTION (IMG) --- */
  .trusted-section { padding-top: 25px; border-top: 1px solid rgba(0,0,0,0.05); width: 100%; }
  .trusted-label { font-size: 0.75rem; font-weight: 700; color: #94A3B8; display: block; margin-bottom: 20px; letter-spacing: 1px; text-transform: uppercase; }
  
  .logo-grid { display: flex; align-items: center; gap: 30px; flex-wrap: wrap; }
  .logo-item { display: flex; align-items: center; justify-content: center; }
  
  /* Style Gambar Logo */
  .partner-logo-img { 
    height: 35px; /* Tinggi seragam agar rapi */
    width: auto; 
    opacity: 0.5; /* Agak transparan biar tidak terlalu mencolok */
    filter: grayscale(100%); /* Hitam putih biar elegan */
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  /* Efek Hover: Logo jadi berwarna & jelas */
  .partner-logo-img:hover { 
    opacity: 1; 
    filter: grayscale(0%); 
    transform: scale(1.1); 
  }

  /* --- BAGIAN KANAN (ASLI) --- */
  .hero-visual { position: relative; width: 100%; display: flex; justify-content: center; align-items: center; } 
  .hologram-deck { position: relative; width: 100%; height: 500px; display: flex; justify-content: center; align-items: center; perspective: 1000px; } 
  .item-main-center { width: 280px; z-index: 10; border-radius: 40px; overflow: hidden; box-shadow: 0 40px 80px -20px rgba(0,0,0,0.15), 0 0 0 8px rgba(255,255,255,0.6); position: relative; background: #000; } 
  .item-main-center img { width: 100%; display: block; } 
  .float-card { position: absolute; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); padding: 10px; border-radius: 18px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); width: 150px; z-index: 5; border: 1px solid rgba(255,255,255,0.5); } 
  .float-card img { width: 100%; border-radius: 12px; } 
  .c1 { top: 10%; left: 0%; transform: rotate(-5deg); animation: float 6s infinite ease-in-out; } 
  .c2 { bottom: 15%; right: -5%; transform: rotate(5deg); animation: float 5s infinite ease-in-out reverse; } 
  .success-badge { position: absolute; bottom: 25px; left: 50%; transform: translateX(-50%); background: white; padding: 10px 20px; border-radius: 30px; font-weight: 700; font-size: 0.85rem; box-shadow: 0 10px 20px rgba(0,0,0,0.15); display: flex; align-items: center; gap: 8px; white-space: nowrap; } 
  .check-icon { background: #22C55E; color: white; border-radius: 50%; width: 20px; height: 20px; display: grid; place-items: center; font-size: 0.75rem; } 
  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } } 
  
  /* SCROLL INDICATOR */
  .scroll-indicator { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 10px; cursor: pointer; z-index: 5; } 
  .mouse { width: 26px; height: 42px; border: 2px solid var(--dark); border-radius: 20px; position: relative; } 
  .wheel { width: 4px; height: 4px; background: var(--dark); border-radius: 50%; position: absolute; top: 8px; left: 50%; transform: translateX(-50%); animation: scrollMouse 1.5s infinite; } 
  .scroll-indicator span { font-size: 0.75rem; font-weight: 600; color: var(--dark); text-transform: uppercase; letter-spacing: 1px; } 
  @keyframes scrollMouse { 0% { opacity: 1; top: 8px; } 100% { opacity: 0; top: 20px; } }

  /* RESPONSIVE */
  @media (max-width: 968px) { 
    .hero { padding-top: 100px; padding-bottom: 60px; text-align: center; } 
    .hero-grid { grid-template-columns: 1fr; gap: 0; margin-top: -120px; } 
    .hero-text { margin: 0 auto; display: flex; flex-direction: column; align-items: center; text-align: center; max-width: 100%; } 
    .trusted-section { display: flex; flex-direction: column; align-items: center; max-width: 100%; }
    .logo-grid { justify-content: center; gap: 20px; }
    .partner-logo-img { height: 28px; } 
    .hero-visual { display: none; } 
    h1 { font-size: 2.5rem; letter-spacing: -1px; } 
    .gradient-text-anim { font-size: 2.5rem; } 
    p { font-size: 1rem; max-width: 100%; } 
    .cta-group { justify-content: center; } 
  }
</style>
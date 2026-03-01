<script>
  import { fly, scale, fade } from "svelte/transition";
  import { cubicOut, elasticOut } from "svelte/easing";

  let scrollY = 0;

  function scrollToProblem() {
    const el = document.getElementById('problem');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // DATA PARTNER (Sesuai request terakhir)
  const partners = [
    { src: "/SINT.png", alt: "Kemenag" },       
    { src: "/logo-khwarizmi.jpg", alt: "NU" },                 
    { src: "/GHP.png", alt: "BSI" },               
    { src: "/SI.png", alt: "Muhammadiyah" } 
  ];
</script>

<svelte:window bind:scrollY={scrollY} />

<section class="hero">
  <div class="bg-gradient-mesh"></div>
  <div class="grid-lines"></div>
  
  <div class="container hero-grid">
    
    <div class="hero-text" style="transform: translateY({scrollY * 0.4}px); opacity: {1 - scrollY / 500};">
      
      <div class="badge-container" in:fly={{ y: 20, duration: 800, delay: 200 }}>
        <span class="modern-badge">
          Digital Ecosystem Islamic Education
        </span>
      </div>

      <h1 in:fly={{ y: 30, duration: 1000, delay: 400, easing: cubicOut }}>
        Transformasi Digital <br>
        <span class="gradient-text">Pesantren Masa Depan.</span>
      </h1>

      <p in:fly={{ y: 30, duration: 1000, delay: 600, easing: cubicOut }}>
        Infrastruktur digital terpadu untuk pengelolaan <strong>Akademik, Keuangan, & Tahfidz</strong> secara presisi. Wujudkan transparansi data <em>real-time</em> demi pondok yang lebih amanah.
      </p>

      <div class="cta-group" in:fly={{ y: 30, duration: 1000, delay: 800, easing: cubicOut }}>
        <button class="btn-primary pulse-effect">Jadwalkan Demo</button>
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
          <div class="glow-border"></div>
          <img src="/Home (TQ).png" alt="Dashboard App" />
          <div class="success-badge"><span class="check-icon">✓</span>Target Tercapai</div>
        </div>
        <div class="float-card c1" in:fly={{ x: -50, opacity: 0, delay: 1400 }}>
          <img src="/MENU AKADEMIK.png" alt="Mini 1">
        </div>
        <div class="float-card c2" in:fly={{ x: 50, opacity: 0, delay: 1600 }}>
          <img src="/Keuangan santri.png" alt="Mini 2">
        </div>
      </div>
    </div>

  </div>

  <div class="scroll-indicator" on:click={scrollToProblem} style="opacity: {1 - scrollY / 300};">
    <div class="mouse"><div class="wheel"></div></div>
    <span>Scroll</span>
  </div>
</section>

<style>
  /* --- 1. LAYOUT UTAMA (GRID SYSTEM) --- */
  .hero {
    min-height: 100vh;
    padding-top: 120px; /* Jarak dari atas aman */
    padding-bottom: 80px;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFF7ED 100%); /* Warna Background Fix */
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    width: 100%;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr; /* Pembagian kolom 55% - 45% */
    gap: 60px;
    align-items: center;
    z-index: 1;
  }

  /* --- 2. TYPOGRAPHY & TEXT --- */
  .hero-text {
    max-width: 650px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .badge-container { margin-bottom: 24px; }
  
  .modern-badge {
    display: inline-flex;
    padding: 8px 16px;
    background: rgba(255, 247, 237, 0.8);
    border: 1px solid rgba(249, 115, 22, 0.2);
    border-radius: 100px;
    color: #C2410C;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  h1 {
    font-size: 3.5rem; /* Ukuran pas, tidak terlalu besar */
    font-weight: 800;
    color: #1E293B;
    line-height: 1.1;
    margin: 0 0 24px 0;
    letter-spacing: -1.5px;
  }

  .gradient-text {
    background: linear-gradient(to right, #F97316, #EA580C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #64748B;
    margin-bottom: 40px;
    max-width: 90%;
  }

  /* --- 3. BUTTONS (FIX WARNA) --- */
  .cta-group {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 50px;
  }

  .btn-primary {
    background: #F97316; /* Fixed Orange */
    color: white;
    border: none;
    padding: 16px 32px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 10px 20px -5px rgba(249, 115, 22, 0.4);
  }

  .btn-primary:hover {
    background: #EA580C;
    transform: translateY(-3px);
  }

  .btn-secondary {
    background: transparent;
    color: #64748B;
    border: 1px solid #CBD5E1;
    padding: 16px 32px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
  }

  .btn-secondary:hover {
    border-color: #F97316;
    color: #F97316;
    background: #FFF7ED;
  }

  /* --- 4. LOGO PARTNERS --- */
  .trusted-section {
    padding-top: 25px;
    border-top: 1px solid rgba(0,0,0,0.05);
    width: 100%;
  }

  .trusted-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: #94A3B8;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 15px;
    display: block;
  }

  .logo-grid {
    display: flex;
    gap: 25px;
    align-items: center;
    flex-wrap: wrap;
  }

  .partner-logo-img {
    height: 32px;
    width: auto;
    opacity: 0.5;
    filter: grayscale(100%);
    transition: 0.3s;
    cursor: pointer;
  }

  .partner-logo-img:hover {
    opacity: 1;
    filter: grayscale(0%);
    transform: scale(1.05);
  }

  /* --- 5. VISUAL KANAN (HOLOGRAM) --- */
  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .hologram-deck {
    position: relative;
    width: 100%;
    height: 500px; /* Area gambar fix */
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
  }

  .item-main-center {
    width: 280px;
    z-index: 10;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 30px 60px -15px rgba(0,0,0,0.15), 0 0 0 6px rgba(255,255,255,0.7);
    background: #000;
    position: relative;
  }

  .item-main-center img { width: 100%; display: block; }

  .float-card {
    position: absolute;
    width: 140px;
    border-radius: 16px;
    padding: 8px;
    background: rgba(255,255,255,0.95);
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    z-index: 5;
    border: 1px solid white;
  }
  
  .float-card img { width: 100%; border-radius: 10px; }

  .c1 { top: 15%; left: 0%; transform: rotate(-6deg); animation: float 6s infinite ease-in-out; }
  .c2 { bottom: 15%; right: 0%; transform: rotate(6deg); animation: float 5s infinite ease-in-out reverse; }

  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }

  .success-badge {
    position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
    background: white; padding: 8px 16px; border-radius: 50px;
    font-weight: 700; font-size: 0.8rem; box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    display: flex; align-items: center; gap: 6px; white-space: nowrap;
  }
  .check-icon { background: #22C55E; color: white; border-radius: 50%; width: 18px; height: 18px; display: grid; place-items: center; font-size: 0.7rem; }

  /* --- 6. BACKGROUND & DECOR --- */
  .bg-gradient-mesh { position: absolute; inset: 0; background: radial-gradient(circle at 10% 20%, rgba(249, 115, 22, 0.05), transparent 40%), radial-gradient(circle at 90% 80%, rgba(45, 212, 191, 0.05), transparent 40%); z-index: 0; }
  .grid-lines { position: absolute; inset: 0; background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px); background-size: 50px 50px; z-index: 0; }

  /* SCROLL INDICATOR */
  .scroll-indicator { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer; z-index: 10; }
  .mouse { width: 24px; height: 40px; border: 2px solid #1E293B; border-radius: 20px; position: relative; }
  .wheel { width: 4px; height: 4px; background: #1E293B; border-radius: 50%; position: absolute; top: 8px; left: 50%; transform: translateX(-50%); animation: scrollMouse 1.5s infinite; }
  .scroll-indicator span { font-size: 0.7rem; font-weight: 700; color: #1E293B; letter-spacing: 1px; text-transform: uppercase; }
  @keyframes scrollMouse { 0% { opacity: 1; top: 8px; } 100% { opacity: 0; top: 20px; } }

  /* --- 7. RESPONSIVE (MOBILE) --- */
  @media (max-width: 968px) {
    .hero { padding-top: 100px; text-align: center; }
    .hero-grid { grid-template-columns: 1fr; gap: 40px; margin-top: 0; }
    
    .hero-text { align-items: center; text-align: center; margin: 0 auto; }
    h1 { font-size: 2.5rem; }
    
    .cta-group { justify-content: center; }
    .trusted-section { display: flex; flex-direction: column; align-items: center; }
    .logo-grid { justify-content: center; }
    
    .hero-visual { display: none; /* Sembunyikan gambar di HP biar rapi */ }
  }
</style>
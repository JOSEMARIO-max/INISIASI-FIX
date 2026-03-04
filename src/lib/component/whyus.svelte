<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  // DATA
  const whyUsData = [
    { 
      id: 1,
      iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", 
      title: "True Integration", 
      subtitle: "Satu Ekosistem Utuh", 
      desc: "Bukan sekadar kumpulan aplikasi terpisah. Data mengalir otomatis dari Akademik ke Keuangan hingga HRD." 
    },
    { 
      id: 2,
      iconPath: "M2 22v-8c0-1.1.9-2 2-2h4v10H2zm10-5h4v5h-4v-5zm6-5h4v10h-4V12zm-3-5a4 4 0 0 0-4-4 4 4 0 0 0-4 4h8zM12 2C6.48 2 2 6.48 2 12h20c0-5.52-4.48-10-10-10z", 
      title: "Built for Pesantren", 
      subtitle: "Khas & Spesifik", 
      desc: "Dirancang dari nol dengan pemahaman mendalam tentang kurikulum salaf/khalaf dan kultur unik pesantren." 
    },
    { 
      id: 3,
      iconPath: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z", 
      title: "Long-term Partner", 
      subtitle: "Amanah & Berkelanjutan", 
      desc: "Kami tidak hanya menyediakan software, tapi menjadi mitra strategis transformasi digital lembaga Anda." 
    }
  ];

  let sectionRef;
  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef) observer.observe(sectionRef);
    return () => observer.disconnect();
  });
</script>

<section class="why-section" bind:this={sectionRef}>
  
  <div class="ambient-glow glow-1"></div>
  <div class="ambient-glow glow-2"></div>

  <div class="container relative z-10">
    <div class="header-wrapper">
      {#if isVisible}
        <div in:fly={{ y: 50, duration: 1000, easing: quintOut }}>
          <h2 class="section-title">Mengapa harus <span class="highlight">INISIASI</span></h2>
          <p class="section-desc">
            Membangun fondasi digital yang kokoh untuk masa depan pesantren Anda.
          </p>
        </div>
      {/if}
    </div>

    <div class="cards-grid">
      {#if isVisible}
        {#each whyUsData as item, i}
          <div class="feature-card glass-panel" in:fly={{ y: 100, duration: 800, delay: 200 + (i * 200), easing: quintOut }}>
            <div class="hover-glow"></div>
            <div class="card-top">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor" class="svg-icon"><path d={item.iconPath}></path></svg>
              </div>
              <span class="step-number">0{item.id}</span>
            </div>
            <div class="card-body">
              <h3 class="card-title">{item.title}</h3>
              <span class="card-subtitle">{item.subtitle}</span>
              <div class="separator"></div>
              <p class="card-text">{item.desc}</p>
            </div>
          </div>
        {/each}
      {/if}
    </div>

    <div class="cta-wrapper">
      {#if isVisible}
        <div in:fly={{ y: 30, duration: 800, delay: 900, easing: quintOut }}>
          <a href="https://khwarizmi.co.id/#header" class="btn-main">
            <span>Info Tentang Kami</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      {/if}
    </div>

  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');

  :global(:root) {
    --primary: #F97316;       
    --primary-dark: #EA580C;
    --dark: #0F172A;          
    --grey: #64748B;
    --glass-bg: rgba(255, 255, 255, 0.65);
    --glass-border: rgba(255, 255, 255, 0.8);          
  }

  /* LAYOUT UTAMA */
  .why-section {
    padding: 60px 24px 100px 24px;
    position: relative;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: #F8FAFC; /* Background diubah mengikuti referensi */
  }

  .container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 2; }

  /* AMBIENT GLOW EFFECTS */
  .ambient-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    z-index: 0;
    opacity: 0.5;
    animation: moveGlow 10s infinite alternate;
  }
  .glow-1 {
    width: 600px; height: 600px;
    background: rgba(249, 115, 22, 0.08);
    top: -150px; left: -200px;
  }
  .glow-2 {
    width: 500px; height: 500px;
    background: rgba(59, 130, 246, 0.08);
    bottom: -100px; right: -150px;
    animation-delay: -5s;
  }

  @keyframes moveGlow {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }

  .header-wrapper { text-align: center; max-width: 760px; margin: 0 auto 60px; position: relative; z-index: 2; }
  .section-title { font-size: 2.75rem; font-weight: 800; color: var(--dark); line-height: 1.2; margin-bottom: 20px; letter-spacing: -0.03em; }
  .highlight { background: linear-gradient(120deg, var(--primary) 0%, #EA580C 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .section-desc { font-size: 1.15rem; color: var(--grey); line-height: 1.7; }
  
  .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; position: relative; z-index: 2; }
  
  /* CARD STYLE DIUBAH MENJADI GLASSMORPHISM */
  .feature-card { 
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 24px; 
    padding: 40px 32px; 
    position: relative; 
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); 
    box-shadow: 
      0 4px 6px -1px rgba(0, 0, 0, 0.02), 
      inset 0 0 20px rgba(255,255,255,0.5); /* Inner glow untuk glass effect */
    overflow: hidden; 
  }
  
  .feature-card:hover { 
    transform: translateY(-10px); 
    background: rgba(255, 255, 255, 0.85); 
    border-color: rgba(249, 115, 22, 0.3); 
    box-shadow: 
      0 20px 40px -5px rgba(249, 115, 22, 0.1),
      0 0 0 2px rgba(249, 115, 22, 0.1); 
  }
  
  .hover-glow { position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%); opacity: 0; transition: 0.5s; pointer-events: none; }
  .feature-card:hover .hover-glow { opacity: 1; }
  
  .card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; }
  
  .icon-box { width: 64px; height: 64px; background: #FFF; color: var(--primary); border-radius: 18px; display: flex; align-items: center; justify-content: center; transition: all 0.4s ease; box-shadow: 0 4px 12px rgba(249, 115, 22, 0.15); border: 1px solid rgba(0,0,0,0.02); }
  .svg-icon { width: 32px; height: 32px; }
  .feature-card:hover .icon-box { background: var(--primary); color: #FFF; transform: rotate(6deg) scale(1.1); box-shadow: 0 10px 20px rgba(249, 115, 22, 0.25); }
  
  .step-number { font-size: 3.5rem; font-weight: 800; color: #F1F5F9; font-family: monospace; line-height: 0.8; z-index: 0; transition: 0.4s ease; }
  .feature-card:hover .step-number { color: rgba(249, 115, 22, 0.15); }
  
  .card-title { font-size: 1.5rem; font-weight: 700; color: var(--dark); margin: 0 0 6px 0; }
  .card-subtitle { font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94A3B8; }
  
  .separator { width: 40px; height: 4px; background: #E2E8F0; margin: 20px 0; border-radius: 4px; transition: all 0.4s ease; }
  .feature-card:hover .separator { width: 80px; background: var(--primary); }
  
  .card-text { font-size: 1rem; line-height: 1.6; color: var(--grey); margin: 0; }
  
  .cta-wrapper { margin-top: 70px; display: flex; justify-content: center; position: relative; z-index: 2; }
  .btn-main { display: inline-flex; align-items: center; gap: 12px; background: linear-gradient(135deg, var(--primary), #EA580C); color: white; padding: 16px 42px; border-radius: 50px; font-weight: 700; font-size: 1.1rem; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 10px 20px -5px rgba(249, 115, 22, 0.3); }
  .btn-main:hover { transform: translateY(-3px); box-shadow: 0 20px 30px -5px rgba(249, 115, 22, 0.4); filter: brightness(1.1); }
  .arrow-icon { width: 20px; height: 20px; transition: transform 0.3s ease; }
  .btn-main:hover .arrow-icon { transform: translateX(5px); }
  
  @media (max-width: 768px) { .section-title { font-size: 2.2rem; } .why-section { padding: 60px 20px; } }
</style>
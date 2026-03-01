<script>
  import { fade, fly } from "svelte/transition";

  // State untuk melacak item mana yang sedang aktif
  let activeIndex = 0;

  const problems = [
    {
      id: 0,
      icon: "1",
      title: "Manajemen tahfidz tidak terukur",
      desc: "Kartu setoran manual sering hilang/rusak. Sulit memantau grafik kualitas hafalan (mutqin) dan target pencapaian santri."
    },
    {
      id: 1,
      icon: "2",
      title: "Risiko Human Error & Fraud",
      desc: "Pencatatan manual di kertas rawan hilang, rusak, atau dimanipulasi. Laporan keuangan sulit dipertanggungjawabkan."
    },
    {
      id: 2,
      icon: "3",
      title: "Blind Spot Wali Santri",
      desc: "Wali santri tidak memiliki akses pantauan hafalan atau aktivitas anak secara real-time, menciptakan celah komunikasi."
    },
  ];

  function replayAnim(node) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
        } else {
          node.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.15 }); 
    observer.observe(node);
    return { destroy() { observer.disconnect(); } };
  }
</script>

<section class="problem-section-pro" id="problem" use:replayAnim>
  
  <div class="bg-grid-decor"></div>

  <div class="container relative z-10">
    
    <div class="content-wrapper">
      
      <div class="text-column stagger-item">
        <div class="header-group">
          <h2>
            Kendala utama yang sering ada di 
            <span class="text-highlight">
              management pendidikan Islam
              <svg class="markway-svg" viewBox="0 0 500 25" preserveAspectRatio="none">
                <path d="M5,18 C150,5 350,30 495,15" />
              </svg>
            </span>
          </h2>
          <p>Pengelolaan manual bukan sekadar "cara lama", melainkan risiko strategis yang dapat menurunkan kredibilitas pesantren.</p>
        </div>

        <div class="feature-list">
          {#each problems as item, i}
            <div 
              class="list-item {activeIndex === i ? 'active' : ''}" 
              on:click={() => activeIndex = i}
              on:keydown={() => activeIndex = i}
              role="button"
              tabindex="0"
            >
              <div class="icon-circle">
                <span class="emoji">{item.icon}</span>
              </div>
              <div class="text-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              {#if activeIndex === i}
                <div class="active-arrow" in:fly={{ x: -10, duration: 300 }}>→</div>
              {/if}
            </div>
          {/each}
        </div>
      </div>

      <div class="visual-column stagger-item">
        <div class="display-area-clean">
          
          {#key activeIndex}
            <div class="visual-content-wrapper" in:fade={{ duration: 600 }}>
              
              {#if activeIndex === 2}
                <div class="image-display-clean">
                  <img src="/IBU.png" alt="Ibu Khawatir" class="feature-image-pro" />
                </div>

              {:else if activeIndex === 1}
                <div class="image-display-clean">
                   <img src="/UST.png" alt="Admin Pusing" class="feature-image-pro spec-image-right" />
                </div>

              {:else}
                <div class="image-display-clean">
                   <img src="/TAHFIDZ.png" alt="Data Berantakan" class="feature-image-pro" />
                </div>
              {/if}

            </div>
          {/key}

        </div>
      </div>

    </div>
  </div>
</section>

<style>
  /* --- LAYOUT UTAMA --- */
  .problem-section-pro {
    padding: 120px 0;
    background-color: #FFFFFF;
    position: relative;
    overflow: hidden;
    color: #1E293B;
  }

  /* Animasi Fade In Section */
  :global(.problem-section-pro .stagger-item) { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
  :global(.problem-section-pro.is-visible .stagger-item) { opacity: 1; transform: translateY(0); }
  :global(.problem-section-pro.is-visible .stagger-item:nth-child(2)) { transition-delay: 0.15s; }

  .bg-grid-decor { position: absolute; inset: 0; background-image: radial-gradient(#CBD5E1 1.2px, transparent 1.2px); background-size: 30px 30px; opacity: 0.4; z-index: 0; mask-image: radial-gradient(circle, black 0%, transparent 70%); }

  .container { 
    max-width: 1280px; 
    margin: 0 auto; 
    padding-left: 60px; 
    padding-right: 20px;
  }
  
  .content-wrapper { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 80px; 
    align-items: center; 
  }

  /* --- HEADER & TYPOGRAPHY --- */
  .header-group { margin-bottom: 50px; }
  
  h2 { font-size: 2.2rem; font-weight: 800; line-height: 1.15; color: #0F172A; margin: 0 0 20px; letter-spacing: -1.5px; }
  
  /* --- NEW MARKWAY STYLE --- */
  .text-highlight { 
    color: #F97316; 
    position: relative; 
    display: inline-block;
  }

  .markway-svg {
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 20px;
    z-index: -1;
    pointer-events: none;
  }

  .markway-svg path {
    fill: none;
    stroke: #FDBA74; /* Warna highlight lembut */
    stroke-width: 6;
    stroke-linecap: round;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    transition: stroke-dashoffset 1.5s cubic-bezier(0.65, 0, 0.35, 1);
  }

  /* Trigger Animasi saat section visible */
  :global(.problem-section-pro.is-visible) .markway-svg path {
    stroke-dashoffset: 0;
  }

  .header-group p { font-size: 1.1rem; color: #64748B; line-height: 1.6; }

  /* --- LIST ITEMS --- */
  .feature-list { display: flex; flex-direction: column; gap: 20px; }

  .list-item {
    display: flex; gap: 20px; align-items: flex-start;
    padding: 20px; border-radius: 16px;
    cursor: pointer; transition: all 0.3s ease;
    border: 1px solid transparent;
  }

  .list-item:hover { background: #F8FAFC; }

  .list-item.active {
    background: #FFF7ED;
    border-color: #FED7AA;
    box-shadow: 0 8px 20px -5px rgba(249, 115, 22, 0.08);
  }

  .icon-circle {
    width: 50px; height: 50px; border-radius: 50%;
    background: #F1F5F9; display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; flex-shrink: 0; transition: 0.3s;
  }

  .list-item.active .icon-circle { background: #F97316; color: white; transform: scale(1.1); }

  .text-content h3 { font-size: 1.25rem; font-weight: 700; color: #1E293B; margin: 0 0 5px 0; }
  .text-content p { font-size: 0.95rem; color: #64748B; line-height: 1.6; margin: 0; }
  
  .active-arrow { font-size: 1.5rem; color: #F97316; font-weight: 800; margin-left: auto; align-self: center; }

  /* --- VISUAL COLUMN --- */
  .display-area-clean {
    position: relative; 
    width: 100%; 
    height: 600px;
    display: flex; 
    justify-content: center; 
    align-items: flex-end;
  }

  .visual-content-wrapper { width: 100%; height: 100%; position: relative; }

  /* --- FOTO DISPLAY --- */
  .image-display-clean { 
    position: relative; 
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: flex-end; 
  }
  
  .feature-image-pro {
    height: 115%;
    width: auto;
    object-fit: contain;
    position: relative;
    bottom: -8%;
    mask-image: linear-gradient(to top, transparent 0%, rgba(0,0,0,0.1) 10%, black 50%);
    -webkit-mask-image: linear-gradient(to top, transparent 0%, rgba(0,0,0,0.1) 10%, black 50%);
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
  }

  .spec-image-right {
    transform: translateX(40px); 
  }

  /* --- RESPONSIVE --- */
  @media (max-width: 968px) {
    .container { padding: 0 24px; text-align: left; }
    .content-wrapper { grid-template-columns: 1fr; gap: 40px; }
    .display-area-clean { height: 400px; order: -1; }
    .feature-image-pro { height: 115%; bottom: -10%; }
    .spec-image-right { transform: translateX(0); }
    .header-group { text-align: center; }
  }
</style>
<script>
  // Import dari $lib agar path benar
  import { viewport } from "$lib/utils.js";
  
  const whyUsData = [
    { icon: "🧩", title: "True Integration", subtitle: "Not Just Collection", desc: "Satu aplikasi ekosistem efisiensi maksimal, dari akademik hingga finance." },
    { icon: "🕌", title: "Built for Pondok", subtitle: "Not Generic School", desc: "Dirancang dari nol dengan deep understanding kebutuhan unik pesantren." },
    { icon: "🛡️", title: "Amanah & Partnership", subtitle: "Long-term Commitment", desc: "Komitmen menjaga keamanan data dan pendampingan jangka panjang." }
  ];
</script>

<section class="why-section-light" id="why" use:viewport>
    <div class="container relative z-10">
      <div class="why-header-light stagger-item">
        <span class="section-badge-outline">Value Proposition</span>
        <h2>Mengapa Al-Khwarizmi Berbeda?</h2>
        <p>Pendekatan kami melampaui sekadar solusi teknis, kami membangun fondasi masa depan.</p>
      </div>
      <div class="modern-light-grid">
        {#each whyUsData as item}
            <div class="light-feature-card stagger-item">
                <div class="light-icon-box">{item.icon}</div>
                <div class="light-card-content">
                    <h3>{item.title}<span class="card-subtitle d-block">{item.subtitle}</span></h3>
                    <p>{item.desc}</p>
                </div>
            </div>
        {/each}
      </div>
    </div>
</section>

<style>
  .why-section-light { padding: 120px 20px; background: #FFFFFF; position: relative; } .why-header-light { text-align: center; max-width: 700px; margin: 0 auto 60px; display: flex; flex-direction: column; align-items: center; } .why-header-light h2 { font-size: 2.5rem; font-weight: 800; color: var(--dark); margin-bottom: 15px; line-height: 1.2; } .why-header-light p { font-size: 1.1rem; color: #64748B; } .modern-light-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-top: 60px; } .light-feature-card { background: #F8FAFC; padding: 40px 30px; border-radius: 24px; border: 1px solid #E2E8F0; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); display: flex; flex-direction: column; gap: 25px; position: relative; overflow: hidden; } .light-feature-card:hover { background: #FFFFFF; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08); transform: translateY(-5px); border-color: var(--primary); } .light-icon-box { width: 70px; height: 70px; background: #FFF7ED; color: var(--primary); border-radius: 20px; font-size: 2rem; display: grid; place-items: center; transition: 0.3s; } .light-feature-card:hover .light-icon-box { transform: scale(1.1) rotate(5deg); } .light-card-content h3 { font-size: 1.4rem; font-weight: 800; color: var(--dark); margin: 0 0 15px; line-height: 1.3; } .card-subtitle { font-size: 0.9rem; color: #94A3B8; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px; } .light-card-content p { font-size: 1rem; color: #64748B; line-height: 1.6; margin: 0; }
  .section-badge-outline { border: 1px solid var(--primary); color: var(--primary); padding: 6px 18px; border-radius: 50px; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; display: inline-block; margin-bottom: 20px; background: rgba(249, 115, 22, 0.05); } .d-block { display: block; margin-top: 5px; }
  @media (max-width: 968px) { .modern-light-grid { grid-template-columns: 1fr; } .d-block { display: inline; } }
</style>
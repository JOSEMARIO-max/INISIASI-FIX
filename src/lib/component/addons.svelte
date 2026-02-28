<script>
  // Pastikan import ini benar mengarah ke $lib/utils.js
  import { viewport } from "$lib/utils.js";

  const addonsData = [
    { icon: "🏥", title: "E-Klinik", desc: "Rekam medis digital." },
    { icon: "🧺", title: "E-Laundry", desc: "Tracking cucian barcode." },
    { icon: "🍛", title: "Kantin Cashless", desc: "Jajan pakai kartu/QR." },
    { icon: "📚", title: "Perpustakaan", desc: "Sirkulasi buku otomatis." },
    { icon: "📢", title: "WA Blast", desc: "Tagihan SPP 1x klik." },
    { icon: "🚌", title: "Inventaris", desc: "Tracking aset pondok." }
  ];
</script>

<section class="addons-section" use:viewport>
    <div class="addons-pattern"></div>
    
    <div class="container relative z-10">
      
      <div class="addons-header stagger-item">
        <span class="badge-gradient">✨ Ekosistem Lengkap</span>
        <h2>Lengkapi Fitur <span class="text-highlight" style="color: #F97316;">Sesuai Kebutuhan</span></h2>
        <p>Aktifkan modul tambahan secara terpisah. Sistem langsung menyesuaikan diri.</p>
      </div>
      
      <div class="apps-carousel">
        {#each addonsData as addon}
            <div class="app-card stagger-item">
                <div class="card-top-action"><div class="toggle-track"><div class="toggle-circle"></div></div></div>
                <div class="app-icon-wrapper">{addon.icon}</div>
                <h4>{addon.title}</h4>
                <p>{addon.desc}</p>
                <div class="app-card-footer">
                    <span class="status-pill">Ready to Active</span><span class="action-arrow">→</span>
                </div>
            </div>
        {/each}
      </div>

    </div>
</section>

<style>
  .addons-section { padding: 120px 0; background: #FFFFFF; position: relative; } 
  .addons-pattern { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: radial-gradient(circle, #E2E8F0 1px, transparent 1px); background-size: 40px 40px; opacity: 0.5; } 
  .addons-header { text-align: center; margin-bottom: 60px; position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; } 
  .badge-gradient { background: linear-gradient(135deg, #F97316, #DC2626); color: white; padding: 8px 20px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; display: inline-block; margin-bottom: 20px; box-shadow: 0 10px 20px -5px rgba(249, 115, 22, 0.4); } 
  .addons-header h2 { font-size: 3rem; color: #0F172A; font-weight: 900; margin-bottom: 15px; width: 100%; text-align: center; } 
  .addons-header p { color: #64748B; font-size: 1.1rem; max-width: 600px; text-align: center; } 
  .apps-carousel { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; position: relative; z-index: 10; } 
  .app-card { background: white; border-radius: 20px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border: 1px solid #E2E8F0; transition: all 0.4s; position: relative; overflow: hidden; display: flex; flex-direction: column; } 
  .app-card:hover { transform: translateY(-8px); border-color: var(--primary); box-shadow: 0 15px 30px -5px rgba(249, 115, 22, 0.15); } 
  .card-top-action { position: absolute; top: 20px; right: 20px; } 
  .toggle-track { width: 36px; height: 20px; background: #E2E8F0; border-radius: 20px; position: relative; transition: 0.3s; } 
  .toggle-circle { width: 16px; height: 16px; background: white; border-radius: 50%; position: absolute; top: 2px; left: 2px; transition: 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.1); } 
  .app-card:hover .toggle-track { background: #F97316; } 
  .app-card:hover .toggle-circle { left: 18px; } 
  .app-icon-wrapper { width: 60px; height: 60px; background: linear-gradient(135deg, #FFF7ED, #FEE2E2); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin-bottom: 20px; transition: 0.4s; } 
  .app-card:hover .app-icon-wrapper { transform: rotate(-5deg) scale(1.1); } 
  .app-card h4 { font-size: 1.25rem; font-weight: 800; color: #0F172A; margin: 0 0 10px; } 
  .app-card p { color: #64748B; line-height: 1.5; margin-bottom: 25px; font-size: 0.95rem; flex-grow: 1; } 
  .app-card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #F1F5F9; padding-top: 20px; margin-top: auto; } 
  .status-pill { font-size: 0.75rem; font-weight: 700; color: #10B981; background: #ECFDF5; padding: 4px 10px; border-radius: 6px; } 
  .action-arrow { font-size: 1.2rem; color: #CBD5E1; transition: 0.3s; } 
  .app-card:hover .action-arrow { color: var(--primary); transform: translateX(5px); }
  @media (max-width: 968px) { .apps-carousel { grid-template-columns: 1fr; } .addons-header h2 { font-size: 2rem; } }
</style>
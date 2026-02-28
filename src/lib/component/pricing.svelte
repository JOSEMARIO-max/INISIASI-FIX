<script>
  // PENTING: Import dari $lib agar path benar
  import { viewport } from "$lib/utils.js";
</script>

<section class="pricing-section-light" id="pricing" use:viewport>
  <div class="bg-grid-slate"></div>

  <div class="container relative z-10">
    <div class="pricing-header-light stagger-item">
      <span class="badge-pill-orange">Biaya Investasi</span>
      <h2>Pilihan Paket Fleksibel</h2>
      <p>Transparan, tanpa biaya tersembunyi. Sesuaikan dengan kondisi kas pesantren.</p>
    </div>
    
    <div class="pricing-grid-equal stagger-item">
      
      <div class="pricing-card-clean">
        <div class="card-body">
          <div class="plan-top">
            <div class="icon-circle gray">⚡</div>
            <div class="plan-name">
              <h3>Monthly</h3>
              <span class="plan-tag">Pay as you go</span>
            </div>
          </div>
          
          <div class="price-area">
            <span class="curr">Rp</span>
            <span class="val">50</span>
            <div class="period">
              <span class="u">Juta</span>
              <span class="p">/ Bulan</span>
            </div>
          </div>

          <p class="plan-desc-clean">Cocok untuk tahap awal transisi digital tanpa komitmen jangka panjang.</p>
          
          <div class="divider-dashed"></div>

          <ul class="check-list-clean">
            <li><span class="chk">✓</span> Akses Full 9 Modul Utama</li>
            <li><span class="chk">✓</span> Unlimited Data Santri</li>
            <li><span class="chk">✓</span> Private Cloud Server</li>
            <li><span class="chk">✓</span> White-Label Apps</li>
            <li class="muted"><span class="cross">✕</span> Jalur Implementasi VIP</li>
          </ul>
        </div>
        
        <div class="card-footer">
        </div>
      </div>

      <div class="pricing-card-clean premium-border">
        <div class="best-value-ribbon">🏆 REKOMENDASI</div>
        
        <div class="card-body">
          <div class="plan-top">
            <div class="icon-circle orange">💎</div>
            <div class="plan-name">
              <h3>Annual VIP</h3>
              <span class="plan-tag orange-bg">Hemat & Prioritas</span>
            </div>
          </div>

          <div class="price-area">
            <span class="curr">Rp</span>
            <span class="val">600</span>
            <div class="period">
              <span class="u">Juta</span>
              <span class="p">/ Tahun</span>
            </div>
          </div>

          <p class="plan-desc-clean">Solusi bebas ribet. Sekali bayar untuk ketenangan pikiran satu tahun penuh.</p>

          <div class="benefit-box">
            <span>🔥 Free Layanan Prioritas 24/7</span>
          </div>

          <div class="divider-dashed"></div>

          <ul class="check-list-clean">
            <li><span class="chk-orange">✦</span> <strong>SEMUA Fitur Paket Bulanan</strong></li>
            <li><span class="chk-orange">✦</span> Jalur Implementasi VIP (Fast)</li>
            <li><span class="chk-orange">✦</span> Dedicated Account Manager</li>
            <li><span class="chk-orange">✦</span> Gratis Kunjungan Tim Teknis</li>
            <li><span class="chk-orange">✦</span> Kontrak SLA (Jaminan Uptime)</li>
          </ul>
        </div>

        <div class="card-footer">
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  .pricing-section-light { padding: 80px 20px 280px 20px; background: #F8FAFC; position: relative; color: #1E293B; } 
  .bg-grid-slate { position: absolute; inset: 0; background-image: radial-gradient(#CBD5E1 1px, transparent 1px); background-size: 30px 30px; opacity: 0.5; } 
  .pricing-header-light { text-align: center; margin-bottom: 60px; display: flex; flex-direction: column; align-items: center; position: relative; z-index: 5; } 
  .badge-pill-orange { background: #FFF7ED; color: #EA580C; border: 1px solid #FED7AA; padding: 6px 16px; border-radius: 30px; font-size: 0.75rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px; } 
  .pricing-header-light h2 { font-size: 2.5rem; margin: 0 0 15px; font-weight: 800; color: #0F172A; } 
  .pricing-header-light p { font-size: 1.1rem; color: #64748B; max-width: 500px; } 
  
  .pricing-grid-equal { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; max-width: 900px; margin: 0 auto; align-items: stretch; } 
  
  .pricing-card-clean { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 20px; padding: 0; position: relative; transition: all 0.3s ease; display: flex; flex-direction: column; height: 100%; } 
  .pricing-card-clean:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15); border-color: #94A3B8; } 
  
  .icon-circle { width: 48px; height: 48px; border-radius: 12px; display: grid; place-items: center; font-size: 1.4rem; transition: 0.3s; } 
  .pricing-card-clean:hover .icon-circle.gray { background: #E2E8F0; color: #0F172A; } 
  
  .premium-border { border: 2px solid #F97316; box-shadow: 0 10px 30px -5px rgba(249, 115, 22, 0.15); } 
  .premium-border:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(249, 115, 22, 0.25); } 
  
  .best-value-ribbon { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #EA580C; color: white; font-size: 0.75rem; font-weight: 800; padding: 4px 16px; border-radius: 20px; letter-spacing: 0.5px; box-shadow: 0 4px 10px rgba(234, 88, 12, 0.3); z-index: 10; } 
  
  .card-body { padding: 40px 40px 0 40px; flex-grow: 1; } 
  .card-footer { padding: 30px 40px 40px 40px; margin-top: auto; } 
  
  .plan-top { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; } 
  .icon-circle.gray { background: #F1F5F9; } 
  .icon-circle.orange { background: #FFF7ED; } 
  
  .plan-name h3 { margin: 0; font-size: 1.4rem; font-weight: 800; color: #0F172A; } 
  .plan-tag { font-size: 0.8rem; font-weight: 600; color: #94A3B8; } 
  .plan-tag.orange-bg { color: #EA580C; background: #FFF7ED; padding: 2px 8px; border-radius: 4px; } 
  
  .price-area { display: flex; align-items: flex-start; gap: 4px; margin-bottom: 20px; } 
  .curr { font-size: 1.2rem; font-weight: 600; margin-top: 8px; color: #64748B; } 
  .val { font-size: 3.5rem; font-weight: 800; line-height: 1; color: #0F172A; letter-spacing: -1px; } 
  .period { display: flex; flex-direction: column; justify-content: center; margin-left: 5px; } 
  .u { font-size: 1.1rem; font-weight: 700; line-height: 1; color: #334155; } 
  .p { font-size: 0.85rem; color: #94A3B8; } 
  
  .plan-desc-clean { color: #64748B; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px; min-height: 46px; } 
  
  .benefit-box { background: #FFF7ED; border: 1px dashed #FDBA74; color: #C2410C; font-size: 0.85rem; font-weight: 700; text-align: center; padding: 8px; border-radius: 8px; margin-bottom: 20px; } 
  
  .divider-dashed { width: 100%; height: 1px; border-top: 1px dashed #E2E8F0; margin-bottom: 25px; } 
  
  .check-list-clean { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; } 
  .check-list-clean li { display: flex; align-items: flex-start; gap: 12px; font-size: 0.95rem; color: #334155; line-height: 1.4; } 
  .chk { color: #10B981; font-weight: 800; min-width: 18px; } 
  .chk-orange { color: #F97316; font-weight: 800; min-width: 18px; } 
  .cross { color: #CBD5E1; font-weight: 800; min-width: 18px; } 
  .muted { color: #94A3B8; text-decoration: line-through; }
  
  @media (max-width: 968px) { .pricing-grid-equal { grid-template-columns: 1fr; } .plan-desc-clean { min-height: auto; } }
</style>
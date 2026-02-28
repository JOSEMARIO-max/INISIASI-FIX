<script>
  import { viewport } from "$lib/utils.js";
</script>

<footer id="contact" class="footer-ultra" use:viewport>
  <div class="container relative z-10">
    <div class="cta-floating stagger-item">
      <div class="cta-text">
        <h2>Siap Digitalisasi?</h2>
        <p>Bergabung dengan 500+ pesantren modern lainnya hari ini.</p>
      </div>
      <div class="cta-btn-wrapper">
        <a href="https://wa.me/6281282251136" class="btn-whatsapp-pulse"><span class="wa-icon">💬</span> Chat WhatsApp</a>
      </div>
    </div>
  </div>
  <div class="footer-content container relative z-10">
    <div class="footer-top">
      <div class="f-col brand-col stagger-item">
        <img src="/logo-khwarizmi.jpg" alt="Logo" class="f-logo-img" />
        <p>Mitra teknologi terpercaya untuk lembaga pendidikan Islam. Membantu pesantren naik kelas di era digital.</p>
      </div>
      <div class="f-col links-col stagger-item"><h4>Produk</h4><a href="#">Akademik</a><a href="#">Keuangan</a><a href="#">Kesantrian</a><a href="#">Apps Wali</a></div>
      <div class="f-col links-col stagger-item"><h4>Perusahaan</h4><a href="#">Tentang Kami</a><a href="#">Karir</a><a href="#">Blog</a><a href="#">Kebijakan Privasi</a></div>
      <div class="f-col contact-col stagger-item"><h4>Hubungi Kami</h4><p>📍 Bogor, Jawa Barat</p><p>📞 0812 8225 1136</p><p>📧 hello@alkhwarizmi.id</p></div>
    </div>
    <div class="footer-divider"></div>
    <div class="footer-bottom"><p>&copy; 2025 PT. khwarizmi Kreatif. All Rights Reserved.</p><div class="socials"><a href="https://www.instagram.com/alkhwarizmi.id/?hl=id">Instagram</a><a href="https://khwarizmi.co.id/cgi-sys/suspendedpage.cgi">Website</a><a href="https://www.youtube.com/@sekolahimpianku">Youtube</a></div></div>
    <div class="big-bg-text">AL-KHWARIZMI</div>
  </div>
</footer>

<style>
  .footer-ultra { background: #0F172A; color: white; padding-top: 150px; padding-bottom: 0; position: relative; overflow: hidden; margin-top: -100px; } .cta-floating { background: linear-gradient(110deg, #1E293B, #334155); border: 1px solid rgba(255,255,255,0.1); padding: 50px; border-radius: 30px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 30px 60px -10px rgba(0,0,0,0.5); margin-bottom: 80px; position: relative; z-index: 20; } .cta-text h2 { font-size: 2.2rem; margin: 0 0 10px 0; color: white; } .cta-text p { color: #94A3B8; font-size: 1.1rem; margin: 0; } .btn-whatsapp-pulse { background: #22C55E; color: white; padding: 16px 32px; border-radius: 50px; font-weight: 700; text-decoration: none; display: flex; align-items: center; gap: 10px; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); animation: pulseGreen 2s infinite; transition: 0.3s; } .btn-whatsapp-pulse:hover { transform: translateY(-3px); background: #16A34A; } @keyframes pulseGreen { 0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); } 70% { box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); } 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); } } .footer-top { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.2fr; gap: 40px; padding-bottom: 60px; } .f-logo-img { width: 48px; border-radius: 8px; margin-bottom: 20px; } .brand-col p { color: #94A3B8; line-height: 1.6; } .links-col h4, .contact-col h4 { color: white; margin-bottom: 25px; font-size: 1.1rem; } .links-col a { display: block; color: #94A3B8; text-decoration: none; margin-bottom: 12px; transition: 0.3s; position: relative; width: fit-content; } .links-col a::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0%; height: 1px; background: var(--primary); transition: 0.3s; } .links-col a:hover { color: white; } .links-col a:hover::after { width: 100%; } .contact-col p { color: #94A3B8; margin-bottom: 12px; } .footer-divider { width: 100%; height: 1px; background: rgba(255,255,255,0.1); } .footer-bottom { padding: 30px 0; display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 5; } .footer-bottom p { color: #64748B; font-size: 0.9rem; margin: 0; } .socials { display: flex; gap: 20px; } .socials a { color: #94A3B8; text-decoration: none; transition: 0.3s; } .socials a:hover { color: var(--primary); } .big-bg-text { position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); font-size: 12vw; font-weight: 900; color: rgba(255,255,255,0.02); white-space: nowrap; pointer-events: none; user-select: none; z-index: 0; letter-spacing: -5px; line-height: 1; }
  @media (max-width: 968px) { .cta-floating { flex-direction: column; text-align: center; gap: 20px; padding: 30px; } .footer-top { grid-template-columns: 1fr; text-align: center; gap: 40px; } .links-col a { margin: 0 auto 12px; } .footer-bottom { flex-direction: column; gap: 20px; padding-bottom: 80px; } .f-logo-img { margin: 0 auto 20px; } }
</style>
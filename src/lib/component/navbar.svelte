<script>
  // PISAHKAN IMPORT JADI DUA BARIS:
  import { fly, slide } from "svelte/transition"; 
  import { backOut } from "svelte/easing"; // backOut harus dari sini

  let scrollY = 0;
  let isMenuOpen = false;
  function toggleMenu() { isMenuOpen = !isMenuOpen; }
</script>

<svelte:window bind:scrollY={scrollY} />

<nav class:scrolled={scrollY > 20} in:fly={{ y: -100, duration: 1000, delay: 400, easing: backOut }}>
  <div class="container nav-content">
    <div class="logo"><img src="/logo-khwarizmi.jpg" alt="Logo" class="nav-logo-img" /><div class="logo-text"></div></div>
    <div class="desktop-links">
      <a href="#features">Fitur</a>
      <a href="#why">Keunggulan</a>
      <a href="#pricing">Harga</a>
      <a href="#contact">Kontak</a>
    </div>
    <div class="nav-actions">
      <button class="btn-primary small"><a href="https://wa.me/6281234567890" style="text-decoration: none; color: white">Jadwalkan Demo</a></button>
      <button class="hamburger" on:click={toggleMenu}>
        <span class="bar" class:open={isMenuOpen}></span><span class="bar" class:open={isMenuOpen}></span><span class="bar" class:open={isMenuOpen}></span>
      </button>
    </div>
  </div>
  {#if isMenuOpen}
    <div class="mobile-menu" transition:slide>
      <a href="#features" on:click={toggleMenu}>Fitur</a><a href="#why" on:click={toggleMenu}>Keunggulan</a><a href="#pricing" on:click={toggleMenu}>Harga</a><a href="#contact" on:click={toggleMenu}>Kontak</a>
    </div>
  {/if}
</nav>

<style>
  nav { position: fixed; width: 100%; top: 0; z-index: 1000; padding: 20px 0; transition: 0.3s; } nav.scrolled { background: rgba(255,255,255,0.9); backdrop-filter: blur(12px); box-shadow: 0 4px 30px rgba(0,0,0,0.05); padding: 15px 0; } .nav-content { display: flex; justify-content: space-between; align-items: center; } .logo { display: flex; align-items: center; gap: 10px; font-weight: 800; } .nav-logo-img { width: 32px; border-radius: 6px; } .desktop-links { display: flex; gap: 30px; } .desktop-links a { text-decoration: none; color: var(--dark); font-weight: 500; font-size: 0.95rem; transition: 0.3s; } .desktop-links a:hover { color: var(--primary); } .nav-actions { display: flex; gap: 15px; align-items: center; } .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; } .bar { width: 24px; height: 2px; background: var(--dark); transition: 0.3s; } .bar.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); } .bar.open:nth-child(2) { opacity: 0; } .bar.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); } .mobile-menu { position: absolute; top: 100%; width: 100%; background: white; padding: 20px; display: flex; flex-direction: column; gap: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
  .btn-primary { background: var(--primary); color: white; border: none; padding: 14px 30px; border-radius: 50px; font-weight: 700; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.4); text-decoration: none; display: inline-flex; align-items: center; justify-content: center; } .btn-primary.small { padding: 10px 20px; font-size: 0.9rem;}
  @media (max-width: 968px) { .desktop-links { display: none; } .hamburger { display: flex; } }
</style>
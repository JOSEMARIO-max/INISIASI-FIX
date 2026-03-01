<script>
  import { fly, slide } from "svelte/transition"; 
  import { backOut } from "svelte/easing";

  let scrollY = 0;
  let isMenuOpen = false;
  
  function toggleMenu() { 
    isMenuOpen = !isMenuOpen; 
  }
</script>

<svelte:window bind:scrollY={scrollY} />

<nav class:scrolled={scrollY > 20} in:fly={{ y: -100, duration: 1000, delay: 400, easing: backOut }}>
  <div class="container nav-content">
    
    <div class="logo-area">
      <img src="/logo-khwarizmi.jpg" alt="Logo" class="nav-logo-img" />
    </div>

    <div class="desktop-links">
      <a href="#features">Fitur</a>
      <a href="#why">Keunggulan</a>
      <a href="#pricing">Harga</a>
      <a href="#contact">Kontak</a>
    </div>

    <div class="nav-actions">
      <a href="https://wa.me/6281234567890" class="btn-primary small">
        Jadwalkan Demo
      </a>

      <button class="hamburger" on:click={toggleMenu} aria-label="Menu">
        <span class="bar" class:open={isMenuOpen}></span>
        <span class="bar" class:open={isMenuOpen}></span>
        <span class="bar" class:open={isMenuOpen}></span>
      </button>
    </div>

  </div>

  {#if isMenuOpen}
    <div class="mobile-menu" transition:slide>
      <a href="#features" on:click={toggleMenu}>Fitur</a>
      <a href="#why" on:click={toggleMenu}>Keunggulan</a>
      <a href="#pricing" on:click={toggleMenu}>Harga</a>
      <a href="#contact" on:click={toggleMenu}>Kontak</a>
    </div>
  {/if}
</nav>

<style>
  /* --- NAVBAR UTAMA --- */
  nav { 
    position: fixed; 
    width: 100%; 
    top: 0; 
    z-index: 1000; 
    padding: 20px 0; 
    transition: all 0.3s ease; 
    background: transparent;
  } 
  
  /* Efek saat discroll */
  nav.scrolled { 
    background: rgba(255,255,255,0.95); 
    backdrop-filter: blur(12px); 
    box-shadow: 0 4px 30px rgba(0,0,0,0.05); 
    padding: 12px 0; 
  } 
  
  .nav-content { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    max-width: 1200px; /* Batasi lebar agar rapi */
    margin: 0 auto;
    padding: 0 24px;
  } 

  /* --- LOGO --- */
  .logo-area { 
    display: flex; 
    align-items: center; 
    gap: 12px; 
    cursor: pointer;
  } 
  
  .nav-logo-img { 
    width: 30px; 
    height: auto; 
    border-radius: 0; 
    object-fit: cover;
  } 
  
 
  /* --- DESKTOP LINKS --- */
  .desktop-links { 
    display: flex; 
    gap: 40px; 
  } 
  
  .desktop-links a { 
    text-decoration: none; 
    color: #475569; 
    font-weight: 600; 
    font-size: 0.95rem; 
    transition: 0.3s; 
    position: relative;
  } 
  
  .desktop-links a:hover { 
    color: #F97316; 
  }

  /* --- ACTIONS --- */
  .nav-actions { 
    display: flex; 
    gap: 15px; 
    align-items: center; 
  } 

  .btn-primary.small { 
    background: #F97316; /* Warna Orange Fixed */
    color: white; 
    text-decoration: none;
    padding: 10px 24px; 
    border-radius: 50px; 
    font-weight: 700; 
    font-size: 0.9rem;
    transition: 0.3s; 
    box-shadow: 0 5px 15px -5px rgba(249, 115, 22, 0.4); 
    display: inline-flex; 
    align-items: center; 
    justify-content: center; 
  }
  
  .btn-primary.small:hover {
    transform: translateY(-2px);
    background: #ea580c;
  }

  /* --- HAMBURGER MENU --- */
  .hamburger { 
    display: none; 
    flex-direction: column; 
    gap: 6px; 
    background: none; 
    border: none; 
    cursor: pointer; 
    padding: 5px;
  } 
  
  .bar { 
    width: 26px; 
    height: 2.5px; 
    background: #1E293B; 
    transition: 0.3s; 
    border-radius: 2px;
  } 
  
  /* Animasi X Hamburger */
  .bar.open:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); } 
  .bar.open:nth-child(2) { opacity: 0; } 
  .bar.open:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); } 

  /* --- MOBILE MENU --- */
  .mobile-menu { 
    position: absolute; 
    top: 100%; 
    left: 0;
    width: 100%; 
    background: white; 
    padding: 24px; 
    display: flex; 
    flex-direction: column; 
    gap: 20px; 
    box-shadow: 0 10px 30px rgba(0,0,0,0.1); 
    border-top: 1px solid #F1F5F9;
  }
  
  .mobile-menu a {
    text-decoration: none;
    color: #1E293B;
    font-weight: 600;
    font-size: 1.1rem;
    text-align: center;
  }

  /* --- RESPONSIVE --- */
  @media (max-width: 968px) { 
    .desktop-links { display: none; } 
    .hamburger { display: flex; } 
    .btn-primary.small { display: none; /* Sembunyikan tombol di HP jika sempit, atau biarkan */ }
  }
</style>
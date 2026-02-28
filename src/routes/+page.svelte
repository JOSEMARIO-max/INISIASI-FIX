<script>
  import { onMount } from "svelte";
  
  // --- PERBAIKAN PENTING DI SINI ---
  // Pisahkan import animasi (transition) dan gaya gerak (easing)
  import { fade } from "svelte/transition"; 
  import { quadInOut } from "svelte/easing"; // quadInOut HARUS dari svelte/easing
  
  // --- IMPORT KOMPONEN ---
  import Navbar from "$lib/component/navbar.svelte"; 
  import Hero from "$lib/component/hero.svelte";
  import Problem from "$lib/component/problem.svelte";
  import Features from "$lib/component/features.svelte";
  import WhyUs from "$lib/component/whyus.svelte"; 
  import Addons from "$lib/component/addons.svelte";
  import Pricing from "$lib/component/pricing.svelte";
  import Footer from "$lib/component/footer.svelte";

  let loading = true;

  onMount(() => {
    setTimeout(() => { loading = false; }, 2200);
  });
</script>

{#if loading}
  <div class="preloader" out:fade={{ duration: 1000, easing: quadInOut }}>
    <div class="loader-content">
      <div class="logo-box"><img src="/logo-khwarizmi.jpg" alt="Logo" class="loader-logo" /></div>
      <div class="text-content"><h1 class="brand-name">AL-KHWARIZMI</h1><p class="brand-tag">DIGITAL ECOSYSTEM</p></div>
      <div class="loading-line-wrapper"><div class="loading-line-track"><div class="loading-line-bar"></div></div></div>
    </div>
  </div>
{:else}
  <main in:fade={{ duration: 1000, delay: 200 }}>
    
    <Navbar />
    <Hero />
    <Problem />
    <Features />
    <WhyUs />
    <Addons />
    <Pricing />
    <Footer />

  </main>
{/if}

<style>
  /* --- GLOBAL CSS --- */
  :global(:root) { 
    --primary: #F97316; 
    --primary-dark: #C2410C; 
    --accent: #2DD4BF; 
    --dark: #1E293B; 
    --text: #475569; 
    --bg-gradient-top: linear-gradient(180deg, #FFFFFF 0%, #FFF7ED 100%); 
  }
  
  :global(body) { 
    font-family: 'Inter', sans-serif; 
    margin: 0; 
    overflow-x: hidden; 
    background: #ffffff; 
    color: var(--text); 
  }
  
  :global(html) { 
    scroll-behavior: smooth; 
    overflow-x: hidden; 
  }

  :global(.relative) { position: relative; } 
  :global(.z-10) { z-index: 10; } 
  :global(.container) { max-width: 1150px; margin: 0 auto; padding: 0 24px; } 
  
  /* Shared Animation */
  :global(.stagger-item) { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
  :global(.stagger-item.is-visible) { opacity: 1; transform: translateY(0); }

  /* Preloader Styles */
  .preloader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #ffffff; z-index: 9999; display: flex; justify-content: center; align-items: center; }
  .loader-content { text-align: center; display: flex; flex-direction: column; align-items: center; } 
  .logo-box { margin-bottom: 25px; } 
  .loader-logo { width: 60px; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); animation: breathing 3s ease-in-out infinite; } 
  @keyframes breathing { 0%, 100% { transform: scale(1); filter: brightness(100%); } 50% { transform: scale(1.05); filter: brightness(105%); } } 
  .text-content { margin-bottom: 40px; } 
  .brand-name { font-size: 1.5rem; font-weight: 800; letter-spacing: 0.3em; color: var(--dark); margin: 0; background: linear-gradient(90deg, #1E293B, #475569); -webkit-background-clip: text; -webkit-text-fill-color: transparent; } 
  .brand-tag { font-size: 0.7rem; color: #94A3B8; letter-spacing: 0.5em; margin-top: 8px; text-transform: uppercase; } 
  .loading-line-wrapper { width: 150px; display: flex; justify-content: center; } 
  .loading-line-track { width: 100%; height: 2px; background: #F1F5F9; border-radius: 2px; overflow: hidden; position: relative; } 
  .loading-line-bar { position: absolute; left: 0; top: 0; height: 100%; width: 30%; background: var(--primary); border-radius: 2px; animation: elegantMove 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; } 
  @keyframes elegantMove { 0% { left: -30%; width: 30%; } 50% { width: 60%; } 100% { left: 100%; width: 30%; } }
</style>
<script lang="ts">
  import { onMount } from 'svelte';
  let scrolled = false;
  let isOpen = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 10;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<nav class={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow' : 'bg-transparent'}`}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
    <!-- Logo -->
     <a href="#hero" class="cursor-pointer">
       <img src="/images/logo.png" alt="Kabima Logo" class="h-8 md:h-6 bg-white rounded-lg p-1" />
       <!-- drop-shadow-[0_3px_4px_rgba(255,255,255,0.5)] -->
     </a>

    <!-- Desktop Nav -->
    <div class="hidden md:flex space-x-6">
      <a href="#about" class="{`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-kabimaYellow font-medium`}">Tentang</a>
      <a href="#services" class="{`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-kabimaYellow font-medium`}">Layanan</a>
      <a href="#portfolio" class="{`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-kabimaYellow font-medium`}">Portofolio</a>
      <a href="#contact" class="{`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-kabimaYellow font-medium`}">Kontak</a>
    </div>

    <!-- Mobile Hamburger -->
    <button
      class="md:hidden focus:outline-none"
      on:click={toggleMenu}
      aria-label="Toggle Menu"
    >
      <svg class="h-6 w-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {#if isOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class={`md:hidden px-4 pb-4 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
    <a href="#about" class="block py-2 {`${scrolled ? 'text-gray-800' : 'text-white'}`} hover:text-kabimaYellow font-medium">Tentang</a>
    <a href="#services" class="block py-2 {`${scrolled ? 'text-gray-800' : 'text-white'}`} hover:text-kabimaYellow font-medium">Layanan Kami</a>
    <a href="#portfolio" class="block py-2 {`${scrolled ? 'text-gray-800' : 'text-white'}`} hover:text-kabimaYellow font-medium">Portofolio</a>
    <a href="#contact" class="block py-2 {`${scrolled ? 'text-gray-800' : 'text-white'}`} hover:text-kabimaYellow font-medium">Kontak</a>
  </div>
</nav>

<style>
  nav {
    backdrop-filter: blur(10px);
  }
</style>

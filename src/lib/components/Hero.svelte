<script lang="ts">
  import { inView } from '$lib/actions/inView';

  import { onMount } from 'svelte';
  let scrolled = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section id="hero" class="w-full bg-[#0b1222] text-white min-h-screen flex items-center px-6 md:px-12">
  <!-- // Alternate color : #0b1222 | #081b45 -->
  <div class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
    
    <!-- LEFT SIDE: Illustration -->
     <!-- drop-shadow-[0_3px_4px_rgba(255,255,255,0.5)] -->
    <div class="w-full md:w-1/2 flex justify-center drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]">
      <img
        src="/images/hero.png"
        alt="Tech Illustration"
        class="w-[90%] max-w-md md:max-w-full object-contain"
      />
    </div>

    <!-- RIGHT SIDE: Text + Logo -->
    <div class="w-full md:w-1/2 text-center md:text-left space-y-4">
      <img src="/images/logo.png" alt="Kabima Logo" class="w-36 mb-6 animate-bounce drop-shadow-[0_8px_8px_rgba(255,255,255,0.5)]" />
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold">
        Kabima Technology Indonesia
      </h1>
      <p class="text-lg sm:text-xl text-gray-300">
        We grow with <strong class="text-yellow-300">You</strong>
      </p>
    </div>

  </div>
</section>

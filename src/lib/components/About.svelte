<script lang="ts">
  import { inView } from '$lib/actions/inView';
</script>

<section use:inView id="about" class="opacity-0 transition duration-800 py-20 px-6 bg-white text-center">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    <!-- Gambar -->
    <div class="w-full">
      <img
        src="/images/about.png"
        alt="We Grow With You"
        class="w-3/4 h-auto object-contain"
      />
    </div>

    <!-- Konten -->
    <div class="text-gray-800">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Tentang Perusahaan Kami</h2>
      <p class="text-lg leading-relaxed mb-4">
        PT. Kabima Technology Indonesia adalah perusahaan yang bergerak di bidang IT Consultant dan Software Development. Didirikan pada tahun 2024 dan berbasis di Kota Malang. Kami berdedikasi memberikan solusi teknologi yang inovatif, efektif, dan terintegrasi.
      </p>
      <p class="text-lg leading-relaxed">
        Dengan semangat kolaboratif dan teknologi terbaru, kami membantu bisnis Anda bertumbuh dan berkembang di era digital seperti slogan kami <strong class="text-yellow-500">We grow with you.</strong>
      </p>
    </div>

  </div>
</section>

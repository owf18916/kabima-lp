<script lang="ts">
  import { inView } from '$lib/actions/inView';
</script>

<section use:inView id="services" class="opacity-0 transition duration-800 py-20 px-6 bg-gray-100 text-center">
  <h2 class="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Layanan Kami</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    
    <!-- Card: IT Consulting -->
    <div class="bg-white shadow-lg rounded-lg overflow-hidden text-left">
      <img src="/images/services/it-consulting.png" alt="IT Consulting" class="w-full h-64 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2 text-gray-800">IT Consulting</h3>
        <p class="text-gray-600 text-sm">
          Pendampingan strategis untuk memilih dan menerapkan teknologi tepat guna demi efisiensi dan pertumbuhan bisnis.
        </p>
      </div>
    </div>

    <!-- Card: Software Development -->
    <div class="bg-white shadow-lg rounded-lg overflow-hidden text-left">
      <img src="/images/services/software-development.png" alt="Software Development" class="w-full h-64 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2 text-gray-800">Software Development</h3>
        <p class="text-gray-600 text-sm">
          Pengembangan aplikasi web dan mobile dengan teknologi modern, sesuai kebutuhan spesifik perusahaan Anda.
        </p>
      </div>
    </div>

    <!-- Card: System Integration -->
    <div class="bg-white shadow-lg rounded-lg overflow-hidden text-left">
      <img src="/images/services/system-integration.png" alt="System Integration" class="w-full h-64 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2 text-gray-800">System Integration</h3>
        <p class="text-gray-600 text-sm">
          Integrasi berbagai sistem dan tools yang Anda gunakan agar berjalan efisien dan saling terhubung secara otomatis.
        </p>
      </div>
    </div>

  </div>
</section>


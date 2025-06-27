<script lang="ts">
  import { inView } from '$lib/actions/inView';

  interface PortfolioItem {
    src: string;
    alt: string;
    description: string;
  }

  // const projects = [
  //   { title: 'Inventory Management', image: '/images/portfolio/inventory.png' },
  //   { title: 'Point of Sale', image: '/images/portfolio/pos.png' },
  //   { title: 'Dashboard', image: '/images/portfolio/dashboard.png' },
  //   { title: 'Accounting System', image: '/images/portfolio/accounting.png' }
  // ];

  const portfolioItems: PortfolioItem[] = [
    {
      src: "/images/portfolio/inventory.png",
      alt: "Inventory Management",
      description: "Sistem manajemen inventaris real-time yang mendukung pelacakan stok, kategori barang, dan pengingat restock secara otomatis.",
    },
    {
      src: "/images/portfolio/pos.png",
      alt: "Point of Sale",
      description: "Aplikasi Point of Sale modern dengan integrasi barcode scanner, laporan penjualan, dan antarmuka kasir yang intuitif.",
    },
    {
      src: "/images/portfolio/dashboard.png",
      alt: "Dashboard",
      description: "Dashboard interaktif dengan metrik kinerja utama (KPI), visualisasi data, dan akses manajerial berbasis role.",
    },
    {
      src: "/images/portfolio/accounting.png",
      alt: "Accounting",
      description: "Sistem akuntansi terintegrasi untuk pelacakan transaksi, pengelolaan laporan keuangan, dan audit otomatis.",
    },
  ];

  let selectedItem: PortfolioItem | null = null;
</script>

<section id="portfolio" class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-center">Portofolio</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each portfolioItems as item}
        <button
          type="button"
          class="text-left cursor-pointer focus:outline-none"
          on:click={() => selectedItem = item}
        >
          <img
            src={item.src}
            alt={item.alt}
            class="w-full h-auto rounded-lg shadow hover:scale-105 transition-transform duration-300"
          />
          <p class="mt-2 text-center font-semibold">{item.alt}</p>
        </button>
      {/each}
    </div>
  </div>

  <!-- Modal -->
  {#if selectedItem}
    <div class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
      <div class="relative bg-white rounded-lg shadow-lg max-w-5xl w-full flex flex-col md:flex-row overflow-hidden">
        
        <!-- Tombol close -->
        <button
          type="button"
          class="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-black cursor-pointer"
          on:click={() => selectedItem = null}
          aria-label="Close image"
        >
          ✕
        </button>

        <!-- Gambar -->
        <div class="w-full md:w-1/2 p-4">
          <img
            src={selectedItem.src}
            alt={selectedItem.alt}
            class="rounded-lg w-full h-auto object-contain"
          />
        </div>

        <!-- Deskripsi -->
        <div class="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h3 class="text-2xl font-bold mb-3">{selectedItem.alt}</h3>
          <p class="text-gray-700 leading-relaxed">{selectedItem.description}</p>
        </div>
      </div>
    </div>
  {/if}
</section>

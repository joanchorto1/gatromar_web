<script setup>

import Logo from "@/views/Icons/Logo.vue";
</script>

<template>
  <header class="  p-5 bg-gray-900">
    <nav class="text-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0">
              <Logo class="fill-gray-100"/>
            </div>
          </div>
          <div class="flex items-center">
            <!-- Enlaces de navegación -->
            <div class="hidden md:block">
              <a href="/" class="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-500">Inicio</a>
              <a href="/carta" class="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-500">Carta</a>
              <a href="/catering" class="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-500">Catering</a>
              <a href="/nosotros" class="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-500">Nosotros</a>
              <a href="/contact" class="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-500">Contacto</a>

            </div>
          </div>
        </div>
      </div>
    </nav>

  </header>
  <main class="min-h-screen">
    <router-view/>
  </main>
  <footer class="bg-gray-900 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
      <p>&copy; 2024 Gastromar. Tots els drets reservats.</p>
    </div>
  </footer>
</template>

<style scoped>

</style>
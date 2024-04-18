<script setup>

import Logo from "@/views/Icons/Logo.vue";
</script>

<template>
  <header class="  p-5 bg-gray-900">
    <nav class="text-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:flex  md:flex  items-center justify-between w-full ">
          <div class="flex">
            <div class="flex-shrink-0">
              <Logo class="h-10 md:h-20 lg:h-20 fill-gray-100"/>
            </div>
          </div>
          <div class="  lg:flex md:flex items-center">
            <!-- Enlaces de navegación -->
            <div class="w-full flex  ">
              <ul class="md:flex lg:flex justify-end items-end">
                <li>
                  <a href="/" class="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-500">Inicio</a>
                </li>
                <li>
                  <a href="/carta" class="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-500">Carta</a>

                </li>
                <li>
                  <a href="/catering" class="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-500">Catering</a>

                </li>
                <li>
                  <a href="/nosotros" class="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-500">Nosotros</a>

                </li>
                <li>
                  <a href="/contact" class="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-500">Contacto</a>

                </li>
              </ul>
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
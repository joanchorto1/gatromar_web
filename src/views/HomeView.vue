<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <header class=" py-10">
    <div class="h-1/2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="h-full space-y-6 text-center">
        <h1 class="text-4xl font-extrabold leading-tight">Benvingut a Gastromar!</h1>
        <p class="mt-4 text-xl">El millor restaurant de Tortosa per gaudir de deliciosos mariscs frescos.</p>
        <div class="w-full space-y-3 md:flex lg:flex h-full items-center justify-center content-center md:space-x-8 lg:space-x-8">
          <div class="md:w-1/2 lg:w-1/2 h-96 flex flex-col flex-grow space-y-6 text-start justify-center bg-slate-800 items-center rounded-xl   p-10">
            <h3 class="text-3xl text-gray-50 font-bold">Horari</h3>
            <p class="text-xl text-gray-50">Dimecres - Divendres</p>
            <p class="text-lg text-gray-400">9:00 a 14:00</p>
            <p class="text-xl text-gray-50">Dissabte</p>
            <p class="text-lg text-gray-400">9:30 a 15:00</p>
          </div>
          <div class="md:w-1/2 lg:w-1/2  rounded-md   ">
            <img class="w-full rounded-xl h-96 object-cover" src="/src/storage/mercat.jpg" alt="">

          </div>
        </div>
        <div>

        </div>
        <div class="mt-6">
          <a href="/carta" class="inline-block hover:underline  bg-white rounded-full px-5 py-3 text-lg font-semibold">Veure la Carta</a>
        </div>
      </div>
    </div>
  </header>

  <!-- Secció d'informació -->
  <div class="bg-gray-900 py-16">
    <div class="max-w-7xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-white">La nostra Especialitat</h2>
        <p class="mt-4 text-xl text-gray-300">A Gastromar ens enorgulleix oferir-te els millors mariscs frescos de la regió. La nostra carta està cuidadosament seleccionada per oferir-te una experiència gastronòmica única.</p>
      </div>
      <div class="w-full md:flex lg:flex h-full items-center justify-center content-center lg:space-x-8 md:space-x-8">
        <div class="lg:w-1/3 md:w-1/3 items-center text-center justify-center space-y-6 p-5">
          <img class="w-full rounded-xl" src="/src/storage/angila2.jpg" alt="">
          <p class="text-slate-300">Anguila amb suc</p>
        </div>
        <div class="lg:w-1/3 md:w-1/3 items-center text-center justify-center space-y-6 p-5">
          <img class="w-full rounded-xl" src="/src/storage/img.png" alt="">
          <p class="text-slate-300">Ostro del delta</p>
        </div>
        <div class="lg:w-1/3 md:w-1/3 items-center text-center justify-center space-y-6 p-5">
          <img class="w-full rounded-xl" src="/src/storage/mjusclo1.jpg" alt="">
          <p class="text-slate-300">Musclo del terreno </p>
        </div>
      </div>
    </div>
  </div>
  <!--Catering-->
  <section class="bg-slate-800  py-16">
    <div class="max-w-7xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-10">
        <h2 class="text-3xl font-extrabold text-white">Serveis de Catering</h2>
        <p class="mt-4 text-xl text-gray-300">Gastromar ofereix serveis de catering per a tot tipus d'esdeveniments, ja siguin festes privades, reunions d'empresa o casaments. Et portem la nostra exquisida selecció de marisc directament a tu.</p>

        <div class="w-full flex items-center  space-x-8 justify-center">
          <div class="w-1/2">
            <img src="/src/storage/catering1.jpg" class="w-full h-64 object-cover rounded-xl" alt="">
          </div>
          <div class="w-1/2">
            <img src="/src/storage/catering2.jpg" class="w-full h-64 object-cover rounded-xl" alt="">
          </div>
        </div>

        <div class="mt-6">
          <a href="/catering" class="hover:bg-gray-300 inline-block bg-white rounded-full px-5 py-3 text-lg font-semibold">Més Informació</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Secció de galeria -->
  <div class="bg-slate-700 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-white">Galeria</h2>
        <!-- Galeria d'imatges -->
        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg overflow-hidden">
            <img src="/src/storage/marisc2.jpg" alt="Imatge 1" class="w-full h-64 object-cover">
          </div>
          <div class="bg-white rounded-lg overflow-hidden">
            <img src="/src/storage/marisc1.jpg" alt="Imatge 1" class="w-full h-64 object-cover">
          </div>
          <div class="bg-white rounded-lg overflow-hidden">
            <img src="/src/storage/Marisc2.png" alt="Imatge 1" class="w-full h-64 object-cover">
          </div>
        </div>
      </div>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg overflow-hidden">
            <img src="/src/storage/mercat.jpg" alt="Imatge 1" class="w-full h-64 object-cover">
          </div>
          <div class="bg-white rounded-lg overflow-hidden">
            <img src="/src/storage/pop1.jpg" alt="Imatge 1" class="w-full h-64 object-cover">
          </div>
          <div class="bg-white rounded-lg overflow-hidden">
            <img src="/src/storage/tapa2.jpg" alt="Imatge 1" class="w-full h-64 object-cover">
          </div>
        </div>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg overflow-hidden">
            <img src="/src/storage/Tapa1.jpg" alt="Imatge 1" class="w-full h-64 object-cover">
          </div>
          <div class="bg-white rounded-lg overflow-hidden">
            <img src="/src/storage/mjusclo1.jpg" alt="Imatge 1" class="w-full h-64 object-cover">
          </div>
          <div class="bg-white rounded-lg overflow-hidden">
            <img src="/src/storage/Entrepa1.jpg" alt="Imatge 1" class="w-full h-64 object-cover">
          </div>
        </div>


    </div>
  </div>

</template>

<script setup>

</script>

<template>
  <div class="min-h-screen ">
    <div class="h-72 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold">Contáctanos</h2>
          <p class="mt-4 text-xl text-gray-600">¿Tienes alguna pregunta o comentario? ¡No dudes en ponerte en contacto con nosotros! Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.</p>
        </div>
      </div>
    </div>
    <div class="bg-gray-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Datos de contacto -->
          <div class="bg-gray-900 rounded-lg p-8">
            <h3 class="text-2xl font-extrabold text-white">Datos de Contacto</h3>
            <div class="mt-4 space-y-4">
              <p class="text-lg text-gray-300">Teléfono: <span class="text-white
              ">+34 633 391 411</span></p>
              <p class="text-lg text-gray-300">Correo electrónico:  <span class="text-white">gastromartortosa@gmail.com</span></p>
              <p class="text-lg text-gray-300">Dirección: <span class="text-white
              ">Mercat Central c73, 43500 Tortosa</span></p>
            </div>
          </div>
          <!-- Ubicación -->
          <div class="bg-gray-900 rounded-lg p-8">
            <h3 class="text-2xl font-extrabold text-white">Ubicación</h3>
            <div class="mt-4">
              <iframe class="rounded-xl " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.768614368214!2d0.5171565767395164!3d40.81107817137889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a0e4a473118255%3A0xbb03538b78533c2c!2sMercat%20Municipal%20de%20Tortosa!5e0!3m2!1sca!2ses!4v1713450429380!5m2!1sca!2ses"   width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Formulario de contacto -->

  </div>


</template>
<script>
export default {
  name: 'Contacto',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes agregar la lógica para enviar el formulario, como una solicitud HTTP
      console.log('Formulario enviado:', this.formData);
      // Por simplicidad, aquí solo imprimimos los datos en la consola
    }
  }
}
</script>
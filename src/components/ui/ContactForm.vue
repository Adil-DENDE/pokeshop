<template>
  <dialog id="contact_modal" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg mb-4">Envoyer un message</h3>
      <form @submit.prevent="submit">
        <label for="name" class="p-1">Nom</label>
        <input id="name" v-model="name" type="text" required class="input input-bordered w-full mb-4" />
        <label for="email" class="p-1">E-mail</label>
        <input id="email" v-model="email" type="email" required class="input input-bordered w-full mb-4" />
        <label for="message" class="p-1">Message</label>
        <textarea id="message" v-model="message" required class="textarea textarea-bordered w-full mb-4"></textarea>
        <button class="btn btn-warning w-full">Envoyer</button>
        <p v-if="submitted" class="text-success text-center pt-2">Message envoyé !</p>
      </form>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

const submit = () => {
  const mailto = `mailto:someone@example.com?subject=${encodeURIComponent('Contact from ' + name.value)}&body=${encodeURIComponent(message.value + '\n\nFrom: ' + email.value)}`
  window.location.href = mailto
  submitted.value = true
}
</script>

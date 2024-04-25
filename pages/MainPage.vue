<template>
  <main>

  <div>
    this is main page
  </div>

  <div>
    <AppAlert></AppAlert>
  </div>
</main>

</template>

<script lang="ts" setup>
import AppAlert from '@/components/core/AppAlert.vue';
definePageMeta({
    name: 'Test',
    path: '/',
})
</script>

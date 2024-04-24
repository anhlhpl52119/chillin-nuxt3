<template>
  <main style="background-color: #2c2a2a; color: white; height: 90vh; padding: 30px">

  <div>
    this is
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

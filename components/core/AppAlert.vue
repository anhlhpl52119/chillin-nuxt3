<template>
  <div>
    This is app AppAle
    <p v-if="foo">this is foo</p>
  </div>
</template>

<script lang="ts" setup>
interface newItem {
  foo: string;
  item: string
}
defineProps({
  foo: {
    type: [Boolean, String],
    default: true
  }
})
</script>
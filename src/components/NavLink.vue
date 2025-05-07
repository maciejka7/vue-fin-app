<script setup lang="ts">
import type { MenuLinkData } from './types'

const { icon, label, title, to } = defineProps<MenuLinkData>()
</script>

<template>
  <RouterLink active-class="text-brand-grey-900 bg-brand-beige-100 " w-full flex gap-2 rounded-r-4 px-6 py-4 text-brand-grey-300 font-bold icon-btn :to :title>
    <div :class="icon" />
    {{ label }}
  </RouterLink>
</template>

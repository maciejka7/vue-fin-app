<script setup lang="ts">
import type { MenuLinkData } from '~/components/types'

const links: MenuLinkData[]
  = [
    {
      icon: 'i-carbon-home',
      label: 'Overwiew',
      title: 'Overview',
      to: '/',
    },
    {
      icon: 'i-carbon-arrows-vertical',
      label: 'Transactions',
      title: 'transactions',
      to: '/transactions',
    },
    {
      icon: 'i-carbon-diagram',
      label: 'Budgets',
      title: 'budgets',
      to: '/budgets',
    },

    {
      icon: 'i-carbon-money',
      label: 'Pots',
      title: 'pots',
      to: '/pots',
    },
    {
      icon: 'i-carbon-container-image',
      label: 'Recurring bills',
      title: 'recurring bills',
      to: '/recurring-bills',
    },
  ]
</script>

<template>
  <main
    h-screen
    text="center gray-700 dark:gray-200"
    bg-brand-beige-100
  >
    <div grid cols-2 h-screen flex gap-4>
      <div w="300px" flex flex-col justify-between bg-brand-grey-900 pr-6 text-white>
        finance
        <nav mb-auto justify-items-start>
          <NavLink v-for="{ icon, label, to, title } in links" :key="`${title}-${label}`" :to :title :icon :label />
        </nav>
        <div>
          <button flex items-center self-start gap-2 icon-btn title="toggle dark mode" @click="toggleDark()">
            <div i="carbon-arrow-left " />
            Minimaze menu
          </button>
          <button flex items-center self-start gap-2 icon-btn title="toggle dark mode" @click="toggleDark()">
            <div i="carbon-sun dark:carbon-moon" />
            dark mode
          </button>
        </div>
      </div>
      <RouterView />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { WalletMultiButton } from 'solana-wallets-vue'
import { useWallet } from 'solana-wallets-vue'

const { publicKey } = useWallet()
</script>

<template>
  <div class="min-h-screen bg-gray-200 flex flex-col items-center">
      
      <h1 class="font-bold text-[#4f46e5] text-3xl mb-6 mt-24">Solana Wallet + Nuxt 3 + Tailwind CSS</h1>
      <div class="flex p-10 justify-between w-1/2 mx-auto bg-white shadow-lg rounded-lg items-center">
          <ClientOnly>
              <WalletMultiButton></WalletMultiButton>
          </ClientOnly>
          <div>
              <p v-if="publicKey">Hello {{ publicKey }}</p>
              <p v-else>Please Connect</p>
          </div>
      </div>

  </div>
</template>
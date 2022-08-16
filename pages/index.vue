<script lang="ts" setup>
import { WalletMultiButton, useWallet } from 'solana-wallets-vue'

const { publicKey } = useWallet()
const { wallet, program } = useAnchor()

watch(wallet, () => {
    console.log('anchor wallet available')
})

/* Anchor Examples */
const create = async () => {
    const tx = await program.value.methods.create().rpc();
}
const increment = async () => {
    const tx = await program.value.methods.increment().rpc();
}
</script>

<template>
  <div class="min-h-screen bg-gray-200 flex flex-col items-center">
      
      <h1 class="font-bold text-[#4f46e5] text-2xl mt-24">Solana Wallet + Nuxt 3 + Tailwind CSS</h1>
      <h2 class="font-bold text-[#4f46e5]">with Anchor</h2>

      <div class="flex p-10 justify-between mt-8 w-1/2 mx-auto bg-white shadow-lg rounded-lg items-center">
          <ClientOnly>
                <WalletMultiButton />
                <template #placeholder>
                    Loading
                </template>
          </ClientOnly>
          <div>
              <p v-if="publicKey">{{ publicKey }}</p>
              <p v-else>Please connect your wallet</p>
          </div>
      </div>

  </div>
</template>
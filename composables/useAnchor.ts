import { computed } from 'vue'
import { useAnchorWallet } from 'solana-wallets-vue'
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js'
import { AnchorProvider, Program } from '@project-serum/anchor'
import idl from '@/idl/idl.json'

const preflightCommitment = 'processed'
const commitment = 'confirmed'
const programID = new PublicKey(idl.metadata.address)

export const useAnchor = () => {

  const wallet = useAnchorWallet()
  const connection = new Connection(clusterApiUrl('devnet'), commitment)
  const provider = computed(() => new AnchorProvider(connection, wallet.value, { preflightCommitment, commitment }))
  const program = computed(() => new Program(idl as any, programID, provider.value))

  return {
    wallet,
    connection,
    provider,
    program,
  } 
}
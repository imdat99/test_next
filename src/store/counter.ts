import { create } from 'zustand'

interface CounterStore {
  count: number
  increase: () => void
  reset: () => void
}

export const useCounterStore = create<CounterStore>()((set) => ({
  count: 0,
  increase: () => set((state: CounterStore) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}))
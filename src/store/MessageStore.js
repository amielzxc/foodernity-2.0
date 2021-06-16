import create from 'zustand'

export const useMessageStore = create((set) => ({
   openMessage: false,
   setOpenMessage: (bool) => {
      set((state) => ({ openMessage: (state.openMessage = bool) }))
   },
}))

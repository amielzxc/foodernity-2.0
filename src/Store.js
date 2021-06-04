import create from 'zustand'

export const useStore = create((set) => ({
   email: 'fhillipbagsic@gmail.com',
   isAuthenticated: true,
   setEmail: (email) => set((state) => (state.email = email)),
}))

// update

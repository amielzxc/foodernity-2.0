import create from 'zustand'

export const useRequestStore = create((set) => ({
   filterButton: 'Suggested',
   setFilterButton: (filter) => {
      set((state) => ({ filterButton: (state.filterButton = filter) }))
   },
   userLocation: 'Metro Manila, Philippines',
   setUserLocation: (location) => {
      set((state) => ({ userLocation: (state.userLocation = location) }))
   },
   distance: 3,
   setDistance: (distance) => {
      set((state) => ({ distance: (state.distance = distance) }))
   },
   foodCategory: [true, true, true, true, true],
   setFoodCategory: (object) => {
      set((state) => ({ foodCategory: (state.foodCategory = object) }))
   },
   donationsData: null,
   setDonationsData: (items) => {
      set((state) => ({ listingItem: (state.listingData = items) }))
   },
}))

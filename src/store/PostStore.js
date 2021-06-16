import create from 'zustand'

export const usePostStore = create((set) => ({
   current: 0,
   setNext: () => {
      set((state) => ({ current: state.current + 1 }))
   },
   setBack: () => {
      set((state) => ({ current: state.current - 1 }))
   },
   checkedGuidelines: [false, false, false],
   setCheckedGuidelines: (object) => {
      set((state) => ({
         checkedGuidelines: (state.checkedGuidelines = object),
      }))
   },
   donationImage: null,
   setDonationImage: (image) => {
      set((state) => ({ donationImage: (state.donationImage = image) }))
   },
   donationName: '',
   setDonationName: (name) => {
      set((state) => ({ donationName: (state.donationName = name) }))
   },
   donationQuantity: '',
   setDonationQuantity: (quantity) => {
      set((state) => ({
         donationQuantity: (state.donationQuantity = quantity),
      }))
   },
   donationCategory: '',
   setDonationCategory: (category) => {
      set((state) => ({
         donationCategory: (state.donationCategory = category),
      }))
   },
   donationExpiry: new Date(new Date().setDate(new Date().getDate() + 7)),
   setDonationExpiry: (date) => {
      set((state) => ({
         donationExpiry: (state.donationExpiry = date),
      }))
   },
   donationNotes: '',
   setDonationNotes: (note) => {
      set((state) => ({ donationNotes: (state.donationNotes = note) }))
   },
   pickupLocation: null,
   setPickupLocation: (location) => {
      set((state) => ({
         pickupLocation: (state.pickupLocation = location),
      }))
   },
   pickupLocationCoordinate: {},
   setPickupLocationCoordinate: (coordinate) => {
      set((state) => ({
         pickupLocationCoordinate: (state.pickupLocationCoordinate =
            coordinate),
      }))
   },
   pickupDate: new Date(new Date().setDate(new Date().getDate())),
   setPickupDate: (date) => {
      set((state) => ({
         pickupDate: (state.pickupDate = date),
      }))
   },
   // pickupTime: new Date(new Date().setDate(new Date().getDate())),
   // setPickupTime: (time) => {
   //    set((state) => ({
   //       pickupTime: (state.pickupTime = time),
   //    }))
   // },
}))

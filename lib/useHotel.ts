import create from "zustand"

interface MenuCard {
  dishName: string;
  price: number
}

interface Hotel {
  id: number;
  name: string;
  time: string;
  description: string;
  seats: number;
  location: string;
  menucard: MenuCard
}

interface useHotelType {
  hotels: Hotel[];
  addHotel: (hotel: Omit<Hotel, "id">) => void
}

export const useHotel = create<useHotelType>(set=>({
  hotels: [],
  addHotel: (hotel)=>{
    set(prev=>{
      let newHotelId: number;
      if(prev.hotels.length){
        newHotelId = prev.hotels[prev.hotels.length - 1]["id"] + 1
      }else{
        newHotelId = 1
      }
      return {
        ...prev,
        hotels: [
          ...prev.hotels,
          {
            id: newHotelId,
            hotel
          }
        ]
      }
    })
  }
}))

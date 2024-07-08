import {
  ADDTOFavorites,
  REMOVEFROMFavorites,
  ADDTOBooking,
  REMOVEFROMBooking,
  REMOVEALLFROMBooking,
  SELECTEDBRAND,
} from "./Action";
import CarsData from "../assets/DataBase/Cars";

const initialState = {
  CarsData: CarsData,
  SelectedBrand: [],
  Favorites: [],
  Booking: [],
};

const ReducerFavorites = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOFavorites:
      if (
        !state.Favorites.some((favorite) => favorite.id === action.payload.id)
      ) {
        return { ...state, Favorites: [...state.Favorites, action.payload] };
      }
      return state;
    case REMOVEFROMFavorites:
      const idF = action.payload;
      return {
        ...state,
        Favorites: state.Favorites.filter((item) => item.id !== idF),
      };
    case ADDTOBooking:
      if (!state.Booking.some((booking) => booking.id === action.payload.id)) {
        return { ...state, Booking: [...state.Booking, action.payload] };
      }
      return state;
    case REMOVEFROMBooking:
      const idB = action.payload;
      return {
        ...state,
        Booking: state.Booking.filter((item) => item.id !== idB),
      };
    case REMOVEALLFROMBooking:
      return {
        ...state,
        Booking: [],
      };
    case SELECTEDBRAND:
      const b = action.payload;
      const filtered = state.CarsData.filter(
        (car) =>
          car.brand.toLowerCase().includes(b.toLowerCase()) ||
          car.model.toLowerCase().includes(b.toLowerCase())
      );
      console.log("filtered = = = = = = =  =>", filtered);
      return {
        ...state,
        SelectedBrand: filtered,
      };
    default:
      return state;
  }
};

export default ReducerFavorites;

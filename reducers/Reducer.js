import {
  ADDTOFavorites,
  REMOVEFROMFavorites,
  ADDTOBooking,
  REMOVEFROMBooking,
} from "./Action";

const initialState = {
  Favorites: [],
  Booking: [],
};

const ReducerFavorites = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOFavorites:
      return { ...state, Favorites: [...state.Favorites, action.payload] };
    case REMOVEFROMFavorites:
      const { idF } = action.payload;
      return {
        ...state,
        Favorites: state.Favorites.filter((item) => item.id !== idF),
      };
    case ADDTOBooking:
      return { ...state, Booking: [...state.Booking, action.payload] };
    case REMOVEFROMBooking:
      const { idB } = action.payload;
      return {
        ...state,
        Booking: state.Booking.filter((item) => item.id !== idB),
      };
    default:
      return state;
  }
};

export default ReducerFavorites;

const ADDTOFavorites = "ADDFavorites";
const REMOVEFROMFavorites = "REMOVEFavorites";
const ADDTOBooking = "ADDBooking";
const REMOVEFROMBooking = "REMOVEBooking";
const REMOVEALLFROMBooking = "REMOVEALLFROMBooking";
const AddToFavorites = (newF) => ({
  type: ADDTOFavorites,
  payload: newF,
});

const RemoveFromFavorites = (Rm) => ({
  type: REMOVEFROMFavorites,
  payload: Rm,
});
const AddToBooking = (newF) => ({
  type: ADDTOBooking,
  payload: newF,
});

const RemoveFromBooking = (Rm) => ({
  type: REMOVEFROMBooking,
  payload: Rm,
});

const RemoveAllFromBooking = () => ({
  type: REMOVEALLFROMBooking,
});

export {
  ADDTOFavorites,
  REMOVEFROMFavorites,
  AddToFavorites,
  RemoveFromFavorites,
  ADDTOBooking,
  REMOVEFROMBooking,
  AddToBooking,
  RemoveFromBooking,
  REMOVEALLFROMBooking,
  RemoveAllFromBooking,
};

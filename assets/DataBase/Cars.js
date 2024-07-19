import Audi from "../cars/audi.png";
import Audi02 from "../cars/audi02.png";
import Audi03 from "../cars/audi03.png";
import BmwBlue from "../cars/bmw-blue.png";
import BmwSport from "../cars/BMW-sport.png";
import BmwX6 from "../cars/bmw-x6.png";
import Ferrari from "../cars/Ferrari.png";
import Ford from "../cars/ford.png";
import GClass from "../cars/G-Class.png";
import GClass2 from "../cars/G-Class-2.png";
import GClass3 from "../cars/G-Class-3.png";
import Jaguar02Img from "../cars/jaguar-02.png";
import JaguarBlueImg from "../cars/jaguar-blue.png";
import JaguarWhiteImg from "../cars/jaguar-white.png";
import JaguarImg from "../cars/jaguar.png";
import LamborghiniImg from "../cars/lamborghini.png";
import Mercedes06Img from "../cars/mercedes_06.png";
import Mercedes07Img from "../cars/mercedes_07.png";
import Mercedes08Img from "../cars/mercedes_08.png";
import MercedesGImg from "../cars/mercedes_G.png";
import MercedesAmgGtYellowImg from "../cars/mercedes-benz-amg-gt-yellow.png";
import MercedesAmgYellowImg from "../cars/mercedes-benz-amg-yellow.png";
import MercedesBenzClassImg from "../cars/mercedes-benz-class.png";
import MercedesBenzGleS63Img from "../cars/Mercedes-Benz-GLE-S-63.png";
import MercedesBenzGleImg from "../cars/Mercedes-Benz-GLE.png";
import MercedesBenzImg from "../cars/mercedes-benz.png";
import MercedesBenz02Img from "../cars/mercedes-benz02.png";
import MercedesLuxuryImg from "../cars/mercedes-luxury.png";
import MercedesSClassImg from "../cars/mercedes-s-class.png";
import Mercedes01Img from "../cars/mercedes01.png";
import Mercedes02Img from "../cars/mercedes02.png";
import Mercedes03Img from "../cars/mercedes03.png";
import Mercedes04Img from "../cars/mercedes04.png";
import MiniCooperImg from "../cars/mini_cooper.png";
import NissannImg from "../cars/nissann.png";
import OpelImg from "../cars/Opel.png";
import RangeRoverBlueImg from "../cars/range-rover-blue.png";
import RangeRoverEvoqueSilverImg from "../cars/range-rover-evoque-silver.png";
import RangeRoverEvoqueImg from "../cars/range-rover-evoque.png";
import RangeRoverEvoqueSportsImg from "../cars/Range-Rover-Sport.png";
import RangeRoverImg from "../cars/range-rover.png";
import RangeroverBlackImg from "../cars/rangeroverBlack.png";
import SkodaImg from "../cars/skoda.png";
import ToyotaImg from "../cars/Toyota.png";
import VolkswagenGolf702Img from "../cars/volkswagen_Golf-7-02.png";
import VolkswagenGolf703Img from "../cars/volkswagen_golf-7-03.png";
import VolkswagenTig01Img from "../cars/volkswagen_Tig-01.png";
import VolkswagenTig02Img from "../cars/volkswagen_Tig-02.png";
import VolkswagenGolfBlueImg from "../cars/volkswagen-golf-blue.png";
import Volvo01Img from "../cars/volvo_01.png";
import VolvoImg from "../cars/volvo01.png";
import WhiteRangeRoverImg from "../cars/White-Range-Rover.png";

const CarsData = [
  {
    id: 1,
    brand: "Audi",
    model: "A4",
    year: 2019,
    price: 150,
    image: Audi,
    description: "A luxury sedan with advanced technology and performance.",
    seats: 5,
    doors: 4,
    rating: 4.5,
    images: [Audi, Audi02, Audi03],
    transmission: "Automatic",
    fuelType: "Diesel",
  },
  {
    id: 2,
    brand: "BMW",
    model: "X6",
    year: 2020,
    price: 200,
    image: BmwX6,
    description: "A sporty SUV with luxurious interiors.",
    seats: 5,
    doors: 4,
    rating: 4.7,
    images: [BmwX6, BmwSport, BmwBlue],
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 3,
    brand: "Ferrari",
    model: "488",
    year: 2021,
    price: 300,
    image: Ferrari,
    description: "A high-performance sports car with stunning design.",
    seats: 2,
    doors: 2,
    rating: 4.9,
    images: [Ferrari],
    transmission: "Manual",
    fuelType: "Petrol",
  },
  {
    id: 4,
    brand: "Ford",
    model: "Mustang",
    year: 2018,
    price: 120,
    image: Ford,
    description: "An iconic muscle car with powerful performance.",
    seats: 4,
    doors: 2,
    rating: 4.3,
    images: [Ford],
    transmission: "Manual",
    fuelType: "Petrol",
  },
  {
    id: 5,
    brand: "Mercedes-Benz",
    model: "G-Class",
    year: 2021,
    price: 250,
    image: GClass,
    description: "A rugged SUV with luxury features.",
    seats: 5,
    doors: 4,
    rating: 4.8,
    images: [GClass, GClass2, GClass3],
    transmission: "Automatic",
    fuelType: "Diesel",
  },
  {
    id: 6,
    brand: "Jaguar",
    model: "F-Type",
    year: 2019,
    price: 180,
    image: JaguarImg,
    description: "A sleek sports car with dynamic performance.",
    seats: 2,
    doors: 2,
    rating: 4.6,
    images: [JaguarImg, Jaguar02Img, JaguarBlueImg, JaguarWhiteImg],
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 7,
    brand: "Lamborghini",
    model: "Huracan",
    year: 2020,
    price: 350,
    image: LamborghiniImg,
    description: "An exotic sports car with incredible speed and design.",
    seats: 2,
    doors: 2,
    rating: 5.0,
    images: [LamborghiniImg],
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 8,
    brand: "Mercedes-Benz",
    model: "S-Class",
    year: 2019,
    price: 220,
    image: MercedesSClassImg,
    description: "A luxury sedan with top-notch comfort and technology.",
    seats: 5,
    doors: 4,
    rating: 4.9,
    images: [
      MercedesSClassImg,
      Mercedes01Img,
      Mercedes02Img,
      Mercedes03Img,
      Mercedes04Img,
    ],
    transmission: "Automatic",
    fuelType: "Diesel",
  },
  {
    id: 9,
    brand: "Mini Cooper",
    model: "mini cooper",
    year: 2018,
    price: 100,
    image: MiniCooperImg,
    description: "A compact car with a unique and stylish design.",
    seats: 4,
    doors: 2,
    rating: 4.2,
    images: [MiniCooperImg],
    transmission: "Manual",
    fuelType: "Petrol",
  },
  {
    id: 10,
    brand: "Nissan",
    model: "GT-R",
    year: 2020,
    price: 230,
    image: NissannImg,
    description: "A high-performance sports car with advanced technology.",
    seats: 4,
    doors: 2,
    rating: 4.8,
    images: [NissannImg],
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 11,
    brand: "Opel",
    model: "Insignia",
    year: 2018,
    price: 110,
    image: OpelImg,
    description:
      "A mid-size car with a comfortable interior and advanced features.",
    seats: 5,
    doors: 4,
    rating: 4.3,
    images: [OpelImg],
    transmission: "Automatic",
    fuelType: "Diesel",
  },
  {
    id: 12,
    brand: "Range Rover",
    model: "Evoque",
    year: 2019,
    price: 190,
    image: RangeRoverEvoqueImg,
    description: "A stylish SUV with luxurious interiors.",
    seats: 5,
    doors: 4,
    rating: 4.6,
    images: [
      RangeRoverEvoqueImg,
      RangeRoverEvoqueSilverImg,
      RangeRoverEvoqueSportsImg,
    ],
    transmission: "Automatic",
    fuelType: "Diesel",
  },
  {
    id: 13,
    brand: "Skoda",
    model: "Octavia",
    year: 2018,
    price: 95,
    image: SkodaImg,
    description:
      "A compact car with efficient performance and advanced features.",
    seats: 5,
    doors: 4,
    rating: 4.1,
    images: [SkodaImg],
    transmission: "Manual",
    fuelType: "Diesel",
  },
  {
    id: 14,
    brand: "Toyota",
    model: "Camry",
    year: 2019,
    price: 140,
    image: ToyotaImg,
    description:
      "A reliable sedan with a comfortable interior and efficient performance.",
    seats: 5,
    doors: 4,
    rating: 4.4,
    images: [ToyotaImg],
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 15,
    brand: "Volkswagen",
    model: "Golf",
    year: 2020,
    price: 120,
    image: VolkswagenGolf702Img,
    description:
      "A compact car with advanced technology and efficient performance.",
    seats: 5,
    doors: 4,
    rating: 4.3,
    images: [VolkswagenGolf702Img, VolkswagenGolf703Img, VolkswagenGolfBlueImg],
    transmission: "Automatic",
    fuelType: "Diesel",
  },
  {
    id: 16,
    brand: "Volkswagen",
    model: "Tiguan",
    year: 2021,
    price: 160,
    image: VolkswagenTig01Img,
    description: "A stylish SUV with spacious interiors and advanced features.",
    seats: 5,
    doors: 4,
    rating: 4.5,
    images: [VolkswagenTig01Img, VolkswagenTig02Img],
    transmission: "Automatic",
    fuelType: "Diesel",
  },
  {
    id: 17,
    brand: "Volvo",
    model: "XC90",
    year: 2020,
    price: 210,
    image: Volvo01Img,
    description:
      "A luxury SUV with a spacious interior and advanced safety features.",
    seats: 7,
    doors: 4,
    rating: 4.8,
    images: [Volvo01Img, VolvoImg],
    transmission: "Automatic",
    fuelType: "Diesel",
  },
  {
    id: 18,
    brand: "Range Rover",
    model: "Range Rover",
    year: 2021,
    price: 260,
    image: RangeRoverImg,
    description: "A luxurious SUV with top-notch features and performance.",
    seats: 5,
    doors: 4,
    rating: 4.9,
    images: [
      RangeRoverImg,
      RangeRoverBlueImg,
      RangeroverBlackImg,
      WhiteRangeRoverImg,
    ],
    transmission: "Automatic",
    fuelType: "Diesel",
  },
];

export default CarsData;

import { type BurgerStructure } from "../types";

export const classicBurgerMock: BurgerStructure = {
  _id: "6567d60e9fbd027bb1696969",
  name: "Classic Burger",
  price: 5,
  isOrdered: false,
  ingredients: ["Brioche buns", "Ham"],
  imageUrl:
    "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
  badges: [],
};

export const cheeseBurgerMock: BurgerStructure = {
  _id: "6567d60e9fbd027bb1d9d722",
  name: "Cheese Burger",
  price: 6,
  isOrdered: false,
  ingredients: ["Brioche buns", "Ham", "Cheese"],
  imageUrl:
    "https://i.ibb.co/nMhsNVJ/rice-burger-with-salmon-cutlet-avocado-and-soy-sa-2021-12-09-07-32-56-utc.jpg",
  badges: [],
};

export const veganBurgerMock: BurgerStructure = {
  _id: "6567d60e9fbd027bb1d9d110",
  name: "Vegan Burger",
  price: 11,
  isOrdered: false,
  ingredients: ["Brioche buns", "Vegan Ham", "Cheese"],
  imageUrl:
    "https://i.ibb.co/nMhsNVJ/rice-burger-with-salmon-cutlet-avocado-and-soy-sa-2021-12-09-07-32-56-utc.jpg",
  badges: ["Vegan"],
};

export const burgersMock = [classicBurgerMock, cheeseBurgerMock];

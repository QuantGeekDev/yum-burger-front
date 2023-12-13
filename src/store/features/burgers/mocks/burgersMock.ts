import { MongooseBurgerStructure } from "../types";

export const classicBurgerMock: MongooseBurgerStructure = {
  _id: "6567d60e9fbd027bb1696969",
  name: "Classic Burger",
  isVegan: false,
  calories: 900,
  hasGluten: true,
  price: 5,
  isOrdered: false,
  ingredients: "Brioche buns,  Beef burger",
  imageUrl:
    "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
};

export const cheeseBurgerMock: MongooseBurgerStructure = {
  _id: "6567d60e9fbd027bb1d9d722",
  name: "Cheese Burger",
  price: 6,
  isVegan: true,
  calories: 700,
  hasGluten: true,
  isOrdered: false,
  ingredients: "Brioche buns,  Ham, Cheese",
  imageUrl:
    "https://i.ibb.co/nMhsNVJ/rice-burger-with-salmon-cutlet-avocado-and-soy-sa-2021-12-09-07-32-56-utc.jpg",
};

export const veganBurgerMock: MongooseBurgerStructure = {
  _id: "6567d60e9fbd027bb1d9d110",
  name: "Vegan Burger",
  price: 11,
  isVegan: true,
  calories: 500,
  hasGluten: false,
  isOrdered: false,
  ingredients: "Brioche buns, Vegan Ham, Cheese",
  imageUrl:
    "https://i.ibb.co/nMhsNVJ/rice-burger-with-salmon-cutlet-avocado-and-soy-sa-2021-12-09-07-32-56-utc.jpg",
};

export const classBurgerMock: MongooseBurgerStructure = {
  _id: "6567d60e9fbd027bb1696969",
  name: "ClassBurger",
  isVegan: false,
  calories: 900,
  hasGluten: true,
  price: 5,
  isOrdered: false,
  ingredients: "Brioche buns,  Beef burger",
  imageUrl:
    "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
};

export const burgersMock = [classicBurgerMock, cheeseBurgerMock];

export const burgersMockWithoutClassicBurger = [cheeseBurgerMock];

export const modifiedBurgersMock = [classBurgerMock];

export const editedCheeseBurgerMock: MongooseBurgerStructure = {
  _id: "6567d60e9fbd027bb1d9d722",
  name: "Cheese Burger",
  price: 10,
  isVegan: true,
  calories: 700,
  hasGluten: true,
  isOrdered: false,
  ingredients: "Brioche buns,  Ham, Cheese",
  imageUrl:
    "https://i.ibb.co/nMhsNVJ/rice-burger-with-salmon-cutlet-avocado-and-soy-sa-2021-12-09-07-32-56-utc.jpg",
};

export interface BurgerStructure {
  name: string;
  price: number;
  imageUrl: string;
  ingredients: string[];
  isOrdered?: boolean;
  hasGluten: boolean;
  isVegan: boolean;
  calories: number;
}
export interface MongooseBurgerStructure extends BurgerStructure {
  _id: string;
}

export interface BurgersStateStructure {
  burgers: MongooseBurgerStructure[];
}

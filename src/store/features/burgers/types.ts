export interface BurgerStructure {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: string[];
  isOrdered: boolean;
  badges: string[];
}

export interface BurgersStateStructure {
  burgers: BurgerStructure[];
}

import { http, HttpResponse } from "msw";
import { modifiedBurgersMock } from "../store/features/burgers/mocks/burgersMock";
const apiUrl = import.meta.env.VITE_API_URL;

export const modifyBurgerHandler = [
  http.get(`${apiUrl}/burgers`, () =>
    HttpResponse.json({ burgers: modifiedBurgersMock }),
  ),
];

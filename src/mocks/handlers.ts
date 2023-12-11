import { http, HttpResponse } from "msw";
import {
  burgersMock,
  classicBurgerMock,
  veganBurgerMock,
} from "../store/features/burgers/mocks/burgersMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const defaultHandlers = [
  http.get(`${apiUrl}/burgers`, () =>
    HttpResponse.json({ burgers: burgersMock }),
  ),

  http.delete(`${apiUrl}/burgers/6567d60e9fbd027bb1696969`, () =>
    HttpResponse.json({ burger: classicBurgerMock }),
  ),

  http.get(`${apiUrl}/burgers/6567d60e9fbd027bb1696969`, () =>
    HttpResponse.json({ burger: classicBurgerMock }),
  ),

  http.post(`${apiUrl}/burgers`, () => {
    return HttpResponse.json({ burger: veganBurgerMock });
  }),
];

import { http, HttpResponse } from "msw";
import {
  burgersMock,
  editedCheeseBurgerMock,
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

  http.get(`${apiUrl}/burgers/6567d60e9fbd027bb1d9d722`, () =>
    HttpResponse.json({ burger: editedCheeseBurgerMock }),
  ),

  http.post(`${apiUrl}/burgers`, () =>
    HttpResponse.json({ burger: veganBurgerMock }),
  ),

  http.put(`${apiUrl}/burgers/6567d60e9fbd027bb1d9d722`, () =>
    HttpResponse.json({ burger: editedCheeseBurgerMock }),
  ),
];

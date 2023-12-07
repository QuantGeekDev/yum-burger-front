import { http, HttpResponse } from "msw";
import {
  burgersMock,
  classicBurgerMock,
} from "../store/features/burgers/mocks/burgersMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}/burgers`, () =>
    HttpResponse.json({ burgers: burgersMock }),
  ),
  http.delete(`${apiUrl}/burgers/6567d60e9fbd027bb1696969`, () =>
    HttpResponse.json({ burger: classicBurgerMock }),
  ),
];

import { http, HttpResponse } from "msw";
import { burgersMock } from "../store/features/burgers/mocks/burgersMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}/burgers`, () =>
    HttpResponse.json({ burgers: burgersMock }),
  ),
];

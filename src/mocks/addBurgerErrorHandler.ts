import { http, HttpResponse } from "msw";

const apiUrl = import.meta.env.VITE_API_URL;

export const addBurgerErrorHandler = [
  http.get(`${apiUrl}/burgers`, () => HttpResponse.error()),

  http.post(`${apiUrl}/burgers`, () => {
    return HttpResponse.json();
  }),
];

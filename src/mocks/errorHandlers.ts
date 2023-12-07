import { http, HttpResponse } from "msw";
import { server } from "./node";

const apiUrl = import.meta.env.VITE_API_URL;

export const errorHandlers = [
  http.get(`${apiUrl}/burgers`, () => HttpResponse.error()),

  http.delete(`${apiUrl}/burgers/6567d60e9fbd027bb1696969`, () =>
    HttpResponse.error(),
  ),
];

server.use(...errorHandlers);

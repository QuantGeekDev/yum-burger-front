import { http, HttpResponse } from "msw";
import { server } from "./node";

const apiUrl = import.meta.env.VITE_API_URL;

export const errorHandlers = [
  http.get(`${apiUrl}/burgers`, () => HttpResponse.error()),
];

server.use(...errorHandlers);

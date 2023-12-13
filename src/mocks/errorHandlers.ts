import { http, HttpResponse } from "msw";

const apiUrl = import.meta.env.VITE_API_URL;

export const errorHandlers = [
  http.get(`${apiUrl}/burgers`, () => HttpResponse.error()),

  http.delete(`${apiUrl}/burgers/6567d60e9fbd027bb1696969`, () =>
    HttpResponse.error(),
  ),
  http.get(`${apiUrl}/burgers/6567d60e9fbd027bb1696969`, () =>
    HttpResponse.error(),
  ),
  http.get(`${apiUrl}/burgers/6567d60e9fbd027bb1d9d722`, () =>
    HttpResponse.error(),
  ),
  http.put(`${apiUrl}/burgers/6567d60e9fbd027bb1d9d722`, () =>
    HttpResponse.error(),
  ),

  http.post(`${apiUrl}/burgers`, () => {
    return HttpResponse.error();
  }),
];

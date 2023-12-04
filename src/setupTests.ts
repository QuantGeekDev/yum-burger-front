import "@testing-library/jest-dom";
import { server } from "./mocks/node";

beforeEach(() => {
  vitest.clearAllMocks();
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

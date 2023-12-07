import { renderHook } from "@testing-library/react";
import useBurgersApi from "../useApi";
import { classicBurgerMock } from "../../store/features/burgers/mocks/burgersMock";
import { errorHandlers } from "../../mocks/errorHandlers";
import { server } from "../../mocks/node";

beforeEach(() => {
  server.resetHandlers();
});

describe("Given a useApi's deleteBurgers method", () => {
  const {
    result: {
      current: { deleteBurgers },
    },
  } = renderHook(useBurgersApi);

  const classicBurgerId = "6567d60e9fbd027bb1696969";

  describe("When it receives a request to delete a Classic Burger from the API", () => {
    test("Then it should return a Classic Burger", async () => {
      const { name, _id } = await deleteBurgers(classicBurgerId);

      expect(name).toEqual(classicBurgerMock.name);
      expect(_id).toEqual(classicBurgerMock._id);
    });

    describe("When it encounters an error while executing a request", () => {
      test("Then it throws a new error 'Error deleting burger from database' ", async () => {
        const expectedErrorMessage = "Error deleting burger from database";

        server.use(...errorHandlers);

        await expect(() => deleteBurgers(classicBurgerId)).rejects.toThrow(
          expectedErrorMessage,
        );
      });
    });
  });
});

import { smartRenderWithMemoryRouterProviders } from "../../testUtils/renderWithProviders";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then the loading message 'Loading' should be visible", () => {
      const expectedLoadingMessage = "Loading ...";

      const { getByText } = smartRenderWithMemoryRouterProviders(<Loading />, [
        "/",
      ]);
      const actualLoading = getByText(expectedLoadingMessage);

      expect(actualLoading).toBeVisible();
    });
  });
});

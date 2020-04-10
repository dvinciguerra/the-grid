import { render } from "@testing-library/svelte";
import Home from "./Home.svelte";

describe("Home component", () => {
  describe("when render component", () => {
    it("shows title as expected", () => {
      const expectedTitle = "Hello World!";

      const { container, getByText } = render(Home, {
        props: {
          name: "World"
        }
      });

      expect(getByText(expectedTitle)).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";
import Home from "./index";
import "@testing-library/jest-dom";
import { apiData } from "../mock/ApiData.mock";

describe("General Page Test", () => {
  beforeAll(() => {
    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => {
          Promise.resolve(apiData);
        },
      })
    );
  });

  test("should render", () => {
    render(<Home />);
  });
});

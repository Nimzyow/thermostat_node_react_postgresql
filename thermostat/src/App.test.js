import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr, checkProps } from "../test/TestUtils";

import App from "./App";

describe("App.js", () => {
  const setup = () => {
    return shallow(<App />);
  };

  describe("renders without error", () => {
    test("app container", () => {
      const wrapper = setup();
      const component = findTestByAttr(wrapper, "outer-container");
      expect(component.length).toBe(1);
    });
  });
});

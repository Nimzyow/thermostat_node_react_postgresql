import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr, checkProps } from "../../../test/TestUtils";

import OutsideTemp from "./outsideTemp";

describe("OutsideTemp.js", () => {
  const defaultProps = {
    city: "London"
  };

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<OutsideTemp {...setupProps} />);
  };

  describe("renders without error", () => {
    test("container", () => {
      const wrapper = setup();
      const component = findTestByAttr(wrapper, "container");
      expect(component.length).toBe(1);
    });
  });

  describe("text inside body", () => {
    test("displays correct city", () => {
      const wrapper = setup({ city: "Paris" });
      const component = findTestByAttr(wrapper, "container");
      expect(component.text()).toContain("Paris");
    });
  });

  test("does not throw warning on expected propTypes", () => {
    const expectedProps = { city: "London" };
    checkProps(OutsideTemp, expectedProps);
  });
});

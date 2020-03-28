import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr, checkProps } from "../../../test/TestUtils";

import Reset from "./reset";

describe("reset.js", () => {
  const mockResetFunction = jest.fn();

  const defaultProps = {
    resetSwitch: mockResetFunction
  };

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Reset {...setupProps} />);
  };

  describe("renders without error", () => {
    test("reset container", () => {
      const wrapper = setup();
      const component = findTestByAttr(wrapper, "container");
      expect(component.length).toBe(1);
    });
    test("renders reset", () => {
      const wrapper = setup();
      const component = findTestByAttr(wrapper, "container");
      expect(component.text()).toBe("reset");
    });
  });

  describe("delegation test", () => {
    test("delegates to resetSwitch", () => {
      const wrapper = setup();
      const component = findTestByAttr(wrapper, "container");
      component.simulate("click");
      expect(mockResetFunction).toHaveBeenCalledTimes(1);
    });
  });

  describe("check props", () => {
    test("prop types does not throw error", () => {
      const expectedProps = { resetSwitch: mockResetFunction };
      checkProps(Reset, expectedProps);
    });
  });
});

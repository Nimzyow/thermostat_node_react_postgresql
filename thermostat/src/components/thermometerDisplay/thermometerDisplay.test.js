import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr } from "../../../test/TestUtils";

import ThermometerDisplay from "./thermometerDisplay";

describe("thermometerDisplay.js", () => {
  const defaultProps = {
    temperature: 20
  };

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<ThermometerDisplay {...setupProps} />);
  };

  describe("renders without error", () => {
    test("the container", () => {
      const wrapper = setup();
      const component = findTestByAttr(wrapper, "container");
      expect(component.length).toBe(1);
    });

    test("thermometer text", () => {
      const wrapper = setup();
      const component = findTestByAttr(wrapper, "text");
      expect(component.length).toBe(1);
    });
  });

  test("displays 20 by default", () => {
    const wrapper = setup();
    const text = findTestByAttr(wrapper, "text");
    expect(text.text()).toContain(20);
  });
  test("displays 22 when 22 is passed down with props", () => {
    const wrapper = setup({ temperature: 22 });
    const text = findTestByAttr(wrapper, "text");
    expect(text.text()).toContain(22);
  });
});

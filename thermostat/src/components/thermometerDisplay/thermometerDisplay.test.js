import React from "react";
import { shallow, mount } from "enzyme";
import { findTestByAttr, checkProps } from "../../../test/TestUtils";

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
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    test("the container", () => {
      const component = findTestByAttr(wrapper, "container");
      expect(component.length).toBe(1);
    });

    test("thermometer text", () => {
      const component = findTestByAttr(wrapper, "text");
      expect(component.length).toBe(1);
    });
  });

  describe("displays", () => {
    test("20 by default", () => {
      const wrapper = setup();
      const text = findTestByAttr(wrapper, "text");
      expect(text.text()).toContain(20);
    });

    test("22 when 22 is passed down with props", () => {
      const wrapper = setup({ temperature: 22 });
      const text = findTestByAttr(wrapper, "text");
      expect(text.text()).toContain(22);
    });

    test("green text if between 18 and 25", () => {
      const wrapper = setup();
      const component = findTestByAttr(wrapper, "container");
      const componentHasGreenClass = component.hasClass("thermometer green");
      expect(componentHasGreenClass).toBe(true);
    });
    test("red text when temperature is 25", () => {
      //we must use mount here because currently shallow does not support the use of useEffect. Since we are depending on useEffect for the class to change, we need to test with mount.
      const wrapperMount = () => {
        return mount(<ThermometerDisplay temperature={25} />);
      };
      const component = findTestByAttr(wrapperMount(), "container");
      const componentHasRedClass = component.hasClass("thermometer red");
      expect(componentHasRedClass).toBe(true);
    });
  });

  test("does not throw warning with expected props", () => {
    const expectedProps = { temperature: 20 };
    checkProps(ThermometerDisplay, expectedProps);
  });
});

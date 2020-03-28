import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr, checkProps } from "../../../test/TestUtils";

import OutsideTemp from "./outsideTemp";

describe("OutsideTemp.js", () => {
  const mockChangeCity = jest.fn();

  const defaultProps = {
    city: "London",
    outsideTemperature: 10,
    changeCity: mockChangeCity
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
      const wrapper = setup({ city: "Paris", outsideTemperature: 10 });
      const component = findTestByAttr(wrapper, "container");
      expect(component.text()).toContain("Paris");
    });
    test("displays correct temperature", () => {
      const wrapper = setup({ city: "Paris", outsideTemperature: 10 });
      const component = findTestByAttr(wrapper, "container");
      expect(component.text()).toContain("10");
    });
  });

  test("does not throw warning on expected propTypes", () => {
    const expectedProps = {
      changeCity: mockChangeCity,
      city: "London",
      outsideTemperature: 10
    };
    checkProps(OutsideTemp, expectedProps);
  });
});

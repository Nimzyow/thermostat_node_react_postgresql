import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr, checkProps } from "../../../test/TestUtils";

import Save from "./save";

describe("Save.js", () => {
  const mockSave = jest.fn();

  const setup = () => {
    return shallow(<Save saveSwitch={mockSave} />);
  };

  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  describe("renders without error", () => {
    test("container", () => {
      const component = findTestByAttr(wrapper, "container");
      expect(component.length).toBe(1);
    });
  });
  describe("displays correct text", () => {
    test("save", () => {
      const component = findTestByAttr(wrapper, "container");
      expect(component.text()).toBe("save");
    });
  });
  describe("delegation", () => {
    test("clicking on save delegates to save function", () => {
      const component = findTestByAttr(wrapper, "container");
      component.simulate("click");
      expect(mockSave).toHaveBeenCalledTimes(1);
    });
  });
  test("expected prop types does not throw warning", () => {
    const expectedProps = { saveSwitch: mockSave };
    checkProps(Save, expectedProps);
  });
});

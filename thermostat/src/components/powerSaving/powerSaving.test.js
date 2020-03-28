import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr, checkProps } from "../../../test/TestUtils";

import PowerSaving from "./powerSaving";

describe("powerSaving.js", () => {
  const mockPowerSaveSwitch = jest.fn();

  const defaultProps = {
    powerSave: true
  };

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(
      <PowerSaving
        powerSaveSwitch={() => mockPowerSaveSwitch()}
        {...setupProps}
      />
    );
  };

  describe("renders without error", () => {
    test("container", () => {
      const wrapper = setup();
      const component = findTestByAttr(wrapper, "container");
      expect(component.length).toBe(1);
    });
  });

  describe("displays text correctly", () => {
    test("power saving on", () => {
      const wrapper = setup();
      const component = findTestByAttr(wrapper, "container");
      expect(component.text()).toBe("power saving on");
    });
    test("power saving off", () => {
      const wrapper = setup({ powerSave: false });
      const component = findTestByAttr(wrapper, "container");
      expect(component.text()).toBe("power saving off");
    });
  });

  test("delegates to function", () => {
    const wrapper = setup();
    const component = findTestByAttr(wrapper, "container");
    component.simulate("click");
    expect(mockPowerSaveSwitch).toHaveBeenCalledTimes(1);
  });

  test("does not throw warning with expected props", () => {
    const expectedProps = {
      powerSaveSwitch: mockPowerSaveSwitch,
      powerSave: true
    };
    checkProps(PowerSaving, expectedProps);
  });
});

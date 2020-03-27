import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr } from "../../../test/TestUtils";

import PowerSaving from "./powerSaving";

describe("powerSaving.js", () => {
  const mockPowerSaveSwitch = jest.fn();

  const defaultProps = {
    power: "on"
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
});

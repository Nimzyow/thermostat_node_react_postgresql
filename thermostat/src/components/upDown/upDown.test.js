import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr } from "../../../test/TestUtils";

import UpDown from "./upDown";

describe("upDown.js", () => {
  let queryIncreaseTemp = jest.fn();
  let queryDecreaseTemp = jest.fn();

  const setup = () => {
    return shallow(
      <UpDown
        increaseTemp={queryIncreaseTemp}
        decreaseTem={queryDecreaseTemp}
      />
    );
  };
  describe("render test", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    test("renders component without error", () => {
      const component = findTestByAttr(wrapper, "upDownContainer");
      expect(component.length).toBe(1);
    });

    test("renders + without error", () => {
      const plus = findTestByAttr(wrapper, "up");
      expect(plus.length).toBe(1);
    });

    test("renders - without error", () => {
      const minus = findTestByAttr(wrapper, "down");
      expect(minus.length).toBe(1);
    });
  });

  describe("delegate to", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    test("increase temperature function", () => {
      const plus = findTestByAttr(wrapper, "up");
      plus.simulate("click");
      expect(queryIncreaseTemp).toHaveBeenCalledTimes(1);
    });

    test("decrease temperature function", () => {
      const minus = findTestByAttr(wrapper, "down");
      minus.simulate("click");
      expect(queryDecreaseTemp).toHaveBeenCalledTimes(1);
    });
  });
});

import React from "react";
import ReactDOM from "react-dom";
import TestDiv from "./TestDiv";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Enzyme test", () => {
  it("TestDev render with proper text", () => {
    const wrapper = shallow(<TestDiv />);
    console.log(wrapper.debug());
    expect(wrapper.find("div").text()).toBe("TEST");
  });
});

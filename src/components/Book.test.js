import React from "react";
import Book from "./Book";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Enzyme test", () => {
  it('Book render with Button text "Wybierz"', () => {
    const wrapper = shallow(
      <Book
        title="Tytuł"
        author="autor"
        publicationDate="1888"
        audience="Dzieci"
        genre="Horror"
        addToCart={() => {}}
      />
    );
    // console.log(wrapper.debug());
    expect(wrapper.find("Button").text()).toBe("Wybierz");
  });
});

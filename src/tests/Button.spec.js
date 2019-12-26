import React from "react";
import { Text } from "react-native";
import { mount, shallow } from "enzyme";
import { Button } from "../components/Button";
import sinon from "sinon";
import toJson from "enzyme-to-json";

describe("<Button />", () => {
  it("should match to snapshot", () => {
    const component = shallow(<Button value="5" />);
    expect(component).toMatchSnapshot();
  });

  it("trigger function as expected when pressing", () => {
    const component = shallow(<Button value="C" />);

    const render = component.dive();
    render.find("TouchableOpacity").forEach(child => {
      child.simulate("onPress");
    });
  });
});

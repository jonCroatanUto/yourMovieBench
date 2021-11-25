import Button from "./Button";
import { fireEvent, render } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";

import { Provider } from "react-redux";
import store from "../../redux/store";

Enzyme.configure({ adapter: new Adapter() });

test("the button is make a call", () => {
  const mockHandler = jest.fn();
  const wrapper = Enzyme.mount(
    <Provider store={store}>
      <Button onClick={mockHandler} />
    </Provider>
  );

  const component = render(wrapper);
  const button = component.getByText("next");
  fireEvent.click(button);
  expect(mockHandler.mock.calls);
});

import App from "./App";
import { render } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new Adapter() });

test("the text is rendered", () => {
  const wrapper = Enzyme.mount(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  act(() => {
    const component = render(wrapper);
    component.getByText("...Loading");
  });
});

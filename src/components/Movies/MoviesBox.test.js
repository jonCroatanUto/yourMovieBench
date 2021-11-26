import MoviesBox from "./MoviesBox";
import { render } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../../redux/store";

Enzyme.configure({ adapter: new Adapter() });

test("the text is rendered", () => {
  const wrapper = Enzyme.mount(
    <Provider store={store}>
      <Router>
        <MoviesBox />
      </Router>
    </Provider>
  );
  const component = render(wrapper);
  //   console.log(component);
  component.getByText("Popular movies");
});

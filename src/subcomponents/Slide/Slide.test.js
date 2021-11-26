import Slide from "./Slide";
import { fireEvent, render } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

Enzyme.configure({ adapter: new Adapter() });

test("Slide recive the correct props key", () => {
  const data = {
    id: "number",
    vote_average: "number",
    title: "string",
    name: "string",
    poster_path: "string",
  };

  const wrapper = Enzyme.mount(
    <Provider store={store}>
      <Router>
        <Slide data={data} />
      </Router>
    </Provider>
  );

  const component = render(wrapper);
});

import Slide from "./Slide";
import { fireEvent, render } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";

import { Provider } from "react-redux";
import store from "../../redux/store";

Enzyme.configure({ adapter: new Adapter() });

test("the text is rendered", () => {
  const data = {
    id: "number",
    vote_average: "number",
    title: "string",
    name: "string",
    poster_path: "string",
  };

  const wrapper = Enzyme.mount(
    <Provider store={store}>
      <Slide data={data} />
    </Provider>
  );

  const component = render(wrapper);
});

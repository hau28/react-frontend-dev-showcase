import axios from "axios";
import { uselessFunction } from "./AxiosPage";
import { shallow } from "enzyme";
import AxiosPage from "./AxiosPage";

jest.mock("axios");
jest.mock("../utils/getUser");
const getUserModule = jest.requireActual("../utils/getUser");

const setup = () => shallow(<AxiosPage />);
const findByDataTest = (wrapper, attr) => wrapper.find(`[data-test='${attr}']`);

describe("render", () => {
  test("without errors", () => {
    const wrapper = setup();
    const pageDiv = findByDataTest(wrapper, "page-div");
    expect(pageDiv.length).toBe(1);
  });
  test("request button", () => {
    const wrapper = setup();
    const requestBtn = findByDataTest(wrapper, "request-button");
    expect(requestBtn.length).toBe(1);
  });
  test("new id starts at 1", () => {
    const wrapper = setup();
    const newId = findByDataTest(wrapper, "new-id").text();
    expect(newId).toBe("1");
  });
});

describe("axios mock", () => {
  test("omit id when get user", () => {
    const mockResp = {
      data: {
        data: {
          id: 1,
          email: "george.bluth@reqres.in",
          first_name: "George",
          last_name: "Bluth",
          avatar: "https://reqres.in/img/faces/1-image.jpg",
        },
      },
    };
    const answer = {
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    };
    // axios.get.mockResolvedValue(mockResp);
    axios.get.mockImplementation(() => Promise.resolve(mockResp));

    return getUserModule.getUser(3).then((res) => {
      expect(res).toEqual(answer);
    });
  });
});

describe("get user mock", () => {
  test("userless object maker", async () => {
    const expected = {
      mock: true,
      useless: true,
    };
    const uselessObject = await uselessFunction();
    expect(uselessObject).toEqual(expected);
  });
});

describe("actions", () => {
  test("clicking on button increase new id", () => {
    const wrapper = setup();
    const requestBtn = findByDataTest(wrapper, "request-button");
    requestBtn.simulate("click");
  });
});

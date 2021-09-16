import axios from "axios";

function loop(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

describe("loop", () => {
  test("should loop", () => {
    const mockCallback = jest.fn((x) => x + 1);
    mockCallback.mockReturnValueOnce(69);
    loop([3, 5], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[1][0]).toBe(5);
    expect(mockCallback.mock.results[0].value).toBe(69);
    expect(mockCallback.mock.results[1].value).toBe(6);
  });
});

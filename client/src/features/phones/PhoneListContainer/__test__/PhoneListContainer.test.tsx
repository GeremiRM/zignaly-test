import { render, screen } from "../../../../test-utils";
import { PhoneListContainer } from "../index";

describe("PhoneListContainer", () => {
  it("should fetch and display the data", async () => {
    render(<PhoneListContainer />);
    expect(await screen.findByTestId("phones")).toBeInTheDocument();
  });
});

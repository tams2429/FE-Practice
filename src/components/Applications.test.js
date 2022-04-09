import {
  render,
  screen,
  fireEvent,
  waitFor,
  findByText,
} from "@testing-library/react";
import Applications from "./Applications";
import axios from "axios";

jest.mock("axios");
const fakeUsers = [
  {
    guid: "8a8f6cbc-77a1-4086-8968-a57816f4ff60",
    loan_amount: 37597,
    first_name: "Miles",
    last_name: "Espinoza",
    company: "Qnekt",
    email: "milesespinoza@qnekt.com",
    date_created: "2021-08-10",
    expiry_date: "2021-12-02",
  },
  {
    guid: "8a8f6cbc-77a1-4086-8968-a57816f4ff60",
    loan_amount: 37597,
    first_name: "Miles",
    last_name: "Espinoza",
    company: "Qnekt",
    email: "milesespinoza@qnekt.com",
    date_created: "2021-08-10",
    expiry_date: "2021-12-02",
  },
  {
    guid: "8a8f6cbc-77a1-4086-8968-a57816f4ff60",
    loan_amount: 37597,
    first_name: "Miles",
    last_name: "Espinoza",
    company: "Qnekt",
    email: "milesespinoza@qnekt.com",
    date_created: "2021-08-10",
    expiry_date: "2021-12-02",
  },
  {
    guid: "8a8f6cbc-77a1-4086-8968-a57816f4ff60",
    loan_amount: 37597,
    first_name: "Miles",
    last_name: "Espinoza",
    company: "Qnekt",
    email: "milesespinoza@qnekt.com",
    date_created: "2021-08-10",
    expiry_date: "2021-12-02",
  },
  {
    guid: "8a8f6cbc-77a1-4086-8968-a57816f4ff60",
    loan_amount: 37597,
    first_name: "Miles",
    last_name: "Espinoza",
    company: "Qnekt",
    email: "milesespinoza@qnekt.com",
    date_created: "2021-08-10",
    expiry_date: "2021-12-02",
  },
  {
    guid: "8a8f6cbc-77a1-4086-8968-a57816f4ff60",
    loan_amount: 123,
    first_name: "John",
    last_name: "Smith",
    company: "Qnekt",
    email: "johnsmith@qnekt.com",
    date_created: "2021-08-10",
    expiry_date: "2021-12-02",
  },
];

describe("Application Component", () => {
  let applicationComponent;

  it("should match snapshot", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    applicationComponent = render(<Applications />);
    await waitFor(() => {
      expect(screen.getAllByText("Company")).not.toBeNull();
    });
    expect(applicationComponent.container).toMatchSnapshot();
  });
  it("should call the api endpoint on first render", () => {
    //To be written with more time
  });
  it("should call api endpoint to fetch more data when the 'Load more' button is clicked", () => {
    //To be written with more time
  });

  it("should disable button when the end of the data is reached", () => {
    //To be written with more time
  });
});

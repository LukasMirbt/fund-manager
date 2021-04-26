import { createMocks } from "node-mocks-http";
import handler from "../../../pages/api/signIn";
import jwt from "jsonwebtoken";
import { mockFundShareCost } from "../../../models/FundData";
import {
  initialBalance,
  initialPortfolio,
} from "../../../utils/initialUserData";
jest.mock("../../../models/User");
jest.mock("../../../models/FundData");
jest.mock("../../../utils/dbConnect");

describe("createAccount", () => {
  it("Errors if user does not exist", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        username: "freeUsername",
        password: "testPassword",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(401);
  });

  it("Can sign in successfully and the response contains the correct data", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        username: "takenUsername",
        password: "testPassword",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);

    const {
      userData: { token, username, portfolio, balance },
      portfolioChartData,
    } = JSON.parse(res._getData());

    expect(username).toBe("takenUsername");

    const decodedToken = jwt.verify(token, process.env.SECRET);

    expect(decodedToken.username).toBe("takenUsername");

    expect(portfolioChartData).toEqual(
      Object.keys(initialPortfolio).map(() => ({ yData: [mockFundShareCost] }))
    );

    expect(portfolio).toEqual(initialPortfolio);
    expect(balance).toBe(initialBalance);
  });
});

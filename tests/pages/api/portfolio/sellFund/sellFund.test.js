import { createMocks } from "node-mocks-http";
import handler from "../../../../../pages/api/portfolio/sellFund/index";
import {
  mockFundData,
  mockFundShareCost,
} from "../../../../../models/FundData";
import { mockToken } from "../../../../../models/User";
import {
  initialBalance,
  initialPortfolio,
} from "../../../../../utils/initialUserData";
jest.mock("../../../../../models/User");
jest.mock("../../../../../models/FundData");
jest.mock("../../../../../models/ExchangeRates");
jest.mock("../../../../../utils/dbConnect");

const fundName = Object.keys(mockFundData)[0];

describe("createAccount", () => {
  it("Errors if token is invalid", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        numberOfShares: 1,
        fundName,
      },
      headers: {
        Authorization: `Bearer abcd`,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(401);
  });

  it("Errors if user does not own any shares of the fund", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        numberOfShares: 1,
        fundName: "BGF European A2",
      },
      headers: {
        Authorization: `Bearer ${mockToken}`,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(403);
  });

  it("Errors if user does not own enough shares of the fund", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        numberOfShares: 1000000,
        fundName,
      },
      headers: {
        Authorization: `Bearer ${mockToken}`,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(403);
  });

  it("Can sell fund successfully and the response contains the correct data", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        fundName,
        numberOfShares: 50,
      },
      headers: {
        Authorization: `Bearer ${mockToken}`,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);

    const { updatedPortfolio, updatedBalance } = JSON.parse(res._getData());

    expect(updatedBalance).toBe(initialBalance + 50 * mockFundShareCost);

    const { shares, sellHistory } = updatedPortfolio[fundName];

    const { numberOfSoldShares, sellDate, sellValue } = sellHistory[
      sellHistory.length - 1
    ];

    const { shares: initialShares } = initialPortfolio[fundName];

    expect(shares).toBe(initialShares - 50);
    expect(numberOfSoldShares).toBe(50);
    expect(sellDate).toBe(new Date(process.env.END_DATE).getTime());
    expect(sellValue).toBe(mockFundShareCost * 50);
  });
});

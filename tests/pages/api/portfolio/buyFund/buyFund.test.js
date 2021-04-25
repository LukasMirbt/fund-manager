import { createMocks } from "node-mocks-http";
import handler from "../../../../../pages/api/portfolio/buyFund/index";
import dbConnect from "../../../../../utils/dbConnect";
import FundData, {
  mockFundData,
  mockFundShareCost,
} from "../../../../../models/FundData";
import User, { mockUserData, mockToken } from "../../../../../models/User";
import ExchangeRates from "../../../../../models/ExchangeRates";
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

  it("Errors if user can not afford the transaction", async () => {
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

  it("Can buy fund successfully and the response contains the correct data", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        fundName,
        numberOfShares: 100,
      },
      headers: {
        Authorization: `Bearer ${mockToken}`,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);

    const { updatedPortfolio, updatedBalance, fundData } = JSON.parse(
      res._getData()
    );

    expect(updatedBalance).toBe(initialBalance - 100 * mockFundShareCost);

    const { shares, buyHistory } = updatedPortfolio[fundName];

    const { numberOfBoughtShares, buyDate, acquisitionValue } = buyHistory[
      buyHistory.length - 1
    ];

    const {
      shares: initialShares,
      buyHistory: initialBuyHistory,
    } = initialPortfolio[fundName];

    expect(shares).toBe(initialShares + 100);

    expect(numberOfBoughtShares).toBe(100);

    expect(buyHistory.length).toBeGreaterThan(initialBuyHistory.length);
    expect(buyDate).toBe(new Date(process.env.END_DATE).getTime());

    expect(acquisitionValue).toBe(mockFundShareCost * 100);

    expect(fundData).toEqual({ yData: [mockFundShareCost] });
  });
});

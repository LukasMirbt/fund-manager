import { createMocks } from "node-mocks-http";
import handler from "../../../../pages/api/createAccount/index";
import bcrypt from "bcrypt";
import { mockUserData } from "../../../../models/User";
import {
  initialBalance,
  initialPortfolio,
} from "../../../../utils/initialUserData";
jest.mock("../../../../models/User");
jest.mock("../../../../utils/dbConnect");

describe("createAccount", () => {
  it("Errors if username is taken", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        username: "takenUsername",
        password: "testPassword",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(403);
  });

  it("Creates user correctly if username is not taken", async () => {
    expect(mockUserData.savedUser).toBeNull();

    const { req, res } = createMocks({
      method: "POST",
      body: {
        username: "freeUsername",
        password: "testPassword",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);

    const {
      username,
      passwordHash,
      portfolio,
      balance,
    } = mockUserData.savedUser;

    const doesPasswordMatchHash = await bcrypt.compare(
      "testPassword",
      passwordHash
    );

    expect(doesPasswordMatchHash).toBe(true);
    expect(username).toBe("freeUsername");
    expect(portfolio).toEqual(initialPortfolio);
    expect(balance).toBe(initialBalance);
  });
});

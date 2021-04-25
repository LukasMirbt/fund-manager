import { initialPortfolio, initialBalance } from "../../utils/initialUserData";

export const mockToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRha2VuVXNlcm5hbWUiLCJpZCI6IjYwNzU1NzcyZTZkNDAyMmU0MGFhNmUxMSIsImlhdCI6MTYxOTM3MDc0MX0.LB_C7Uvjgrwh9OUiYlEztaVd4bIriDqdcgJ4-HwHpS0";

export const mockUserData = {
  takenUsername: {
    _id: "60755772e6d4022e40aa6e11",
    username: "takenUsername",
    passwordHash:
      "$2b$12$ZN75/CtzG4FSSfU.qZEDuuy2Q9a6DrxAFPAq3TysT5WfiwEcONTkq",
    portfolio: initialPortfolio,
    balance: initialBalance,
  },
  savedUser: null,
};

class User {
  constructor(user) {
    Object.assign(this, user);
  }

  async save() {
    mockUserData.savedUser = { ...this };
    return Promise.resolve(this);
  }

  static async findOne({ username }) {
    if (mockUserData[username] === undefined) {
      return Promise.resolve(null);
    } else {
      return Promise.resolve(new User({ ...mockUserData.takenUsername }));
    }
  }

  static async findById(id) {
    if (mockUserData.takenUsername._id !== id) {
      return Promise.resolve(null);
    } else {
      return Promise.resolve(new User({ ...mockUserData.takenUsername }));
    }
  }
}

export default User;

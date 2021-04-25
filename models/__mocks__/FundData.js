export const mockFundShareCost = 1000;

export const mockFundData = {
  "SEB Strategi Balanserad C SEK - Lux": { yData: [mockFundShareCost] },
  "JOHCM Global Select B EUR": { yData: [mockFundShareCost] },
  "SEB Asienfond ex-Japan": { yData: [mockFundShareCost] },
  "MS INVF Global Opportunity A": { yData: [mockFundShareCost] },
  "BGF European A2": { yData: [mockFundShareCost] },
};

class FundData {
  static async findById(fundName) {
    return Promise.resolve(mockFundData[fundName]);
  }
}

export default FundData;

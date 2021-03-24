export default async function Handler(req, res) {
  if (req.method === "POST") {
    /*   await dbConnect(); */

    console.log(req.body);

    /*   const { fundName, numberOfShares } = req.body; */

    /* const replacedFundName = fundName.replace(/&/g, "&amp;").split("+").join(" "); */

    /*   const data = await FundData.findById(replacedFundName); */

    res.status(200).json("response");
  }
}

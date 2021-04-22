const router = require("express").Router();
const auth = require("./middleware/auth");
const mongoose = require("mongoose");
const { rmSync } = require("fs");
const { off } = require("process");

const Offer = mongoose.model("Offer");

router.post("/getOffers", async (req, res) => {
  let nft = req.body.contractAddress;
  let tokenID = req.body.tokenID;

  try {
    let offers = await Offer.find({ nft: nft, tokenId: tokenID });
    return res.json({
      status: "success",
      data: offers,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
});

module.exports = router;
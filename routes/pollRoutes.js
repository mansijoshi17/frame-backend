const express = require("express");
const router = express.Router();

const Poll = require("../models/pollsSchema");

router.post("/add", (req, res) => {
  const newPoll = new Poll({
    title: req.body.title,
    choices: req.body.choices,
    fid: req.body.fid,
  });

  newPoll
    .save()
    .then((item) => {
      return res.status(200).json({ success: true, data: item });
    })
    .catch((err) => console.log(err));
});

router.get("/", async (req, res) => {
  await Poll.find((err, polls) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!polls.length) {
      return res.status(200).json({ success: true, data: [] });
    }
    return res.status(200).json({ success: true, data: polls });
  }).catch((err) => console.log(err));
});

router.get("/:id", async (req, res) => {
  await Poll.findOne({ _id: req.params.id }, (err, poll) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!poll) {
      return res
        .status(404)
        .json({ success: false, error: `Poll not found` });
    }
    return res.status(200).json({ success: true, data: poll });
  }).catch((err) => console.log(err));
});
module.exports = router;

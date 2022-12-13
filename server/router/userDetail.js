const router = require("express").Router();
const UserDetail = require("../model/userSchema");

router.post("/post", (req, res) => {
  const { email, user, age, batch, date } = req.body;
  const newUserDetail = new UserDetail({
    email,
    user,
    age,
    batch,
    date,
  });
  newUserDetail
    .save()
    .then((detail) => {
      res.json(detail);
      console.log(detail);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

// router.get("/", (req, res) => {
//   UserDetail.find()
//     .then((detail) => {
//       res.json(detail);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

module.exports = router;

const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../utils/mongoose");

// Func constructor
const SiteController = {
  index: (req, res, next) => {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: (courses = multipleMongooseToObject(courses)),
        });
      })
      .catch(next);
  },
  search: (req, res) => {
    res.render("search");
  },
};

module.exports = SiteController;

// class constructor
// class SiteController {
//   index(req, res) {
//     Course.find({})
//       .then((doc) => {
//         res.json(doc);
//         console.log(doc);
//       })
//       .catch((err) => {
//         res.status(400).json({ error: "Bị lỗi" });
//         console.log(err);
//       });
//   }
//   search(req, res) {
//     res.render("search");
//   }
// }

// module.exports = new SiteController();

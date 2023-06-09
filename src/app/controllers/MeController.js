const Course = require("../models/Course");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../utils/mongoose");

// Func constructor
const MeController = {
  // [GET] /me/stored/courses
  storedCourses: (req, res, next) => {
    Course.find({})
      .then((courses) =>
        res.render("me/stored-courses", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  },
};

module.exports = MeController;

const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, require: true },
    content: { type: String },
    slug: { type: String, slug: "name"},
  },
  {
    timestamps: true,
  },
  
);

// Course.virtual('timestamps')
// .get(function() {
//   return this._id.generationTime.toDateString();
// });



module.exports = mongoose.model("Course", Course);

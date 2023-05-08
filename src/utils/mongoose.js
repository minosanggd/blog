module.exports = {
  multipleMongooseToObject: (mongooseArrs) => {
    return mongooseArrs.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject: (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};

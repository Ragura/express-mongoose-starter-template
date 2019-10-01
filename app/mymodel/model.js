const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myModelSchema = new Schema(
  {
    myField: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

myModelSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {
    delete ret._id;
  }
});

module.exports = mongoose.model("MyModel", myModelSchema);

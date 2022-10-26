const { Schema, model } = require("mongoose");

// Schema to create a course model
const courseSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
    ,
   },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;

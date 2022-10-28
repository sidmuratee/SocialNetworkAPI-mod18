const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction")

// Schema to create a thought model
const thoughtSchema = new Schema(
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
    reactions:[reactionSchema],
    
   },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
thoughtSchema.virtual('reactionCount').get(function() {
  return this.friends.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;

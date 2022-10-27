const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  getCourses(req, res) {
    Thought.find()
    .populate("users")
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought
  getSingleCourse(req, res) {
    Thought.findOne({ _id: req.params.courseId })
      .select('-__v')
      .populate("users")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createCourse(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a thought
  deleteCourse(req, res) {
    Thought.findOneAndDelete({ _id: req.params.courseId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : User.deleteMany({ _id: { $in: thought.users } })
      )
      .then(() => res.json({ message: 'Thought and users deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateCourse(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.courseId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};

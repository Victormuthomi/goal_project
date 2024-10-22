const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc Set goal
// @route POST /api/goals
// @access Private
const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new error("Please add a text field");
  }
  res.status(200).json({ message: "post a goal" });
});

// @desc Update  goal
// @route Put /api/goals/:id
// @access Private
const putGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update a goal for id ${req.params.id}` });
});

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete a goal for id ${req.params.id}` });
});

module.exports = {
  getGoals,
  postGoal,
  putGoal,
  deleteGoal,
};

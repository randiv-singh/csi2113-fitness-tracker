const test = require("node:test");

const assert =
    require("node:assert/strict");

const {
    calculateSummary
} = require("./workout.js");


test("calculates total workouts", () => {

    const workouts = [

        {
            exercise: "Push Ups",
            status: "Completed"
        },

        {
            exercise: "Squats",
            status: "Pending"
        }

    ];


    const result =
        calculateSummary(workouts);


    assert.equal(result.total, 2);

});


test("calculates completed workouts", () => {

    const workouts = [

        {
            exercise: "Push Ups",
            status: "Completed"
        },

        {
            exercise: "Squats",
            status: "Pending"
        }

    ];


    const result =
        calculateSummary(workouts);


    assert.equal(result.completed, 1);

});


test("calculates pending workouts", () => {

    const workouts = [

        {
            exercise: "Push Ups",
            status: "Completed"
        },

        {
            exercise: "Squats",
            status: "Pending"
        }

    ];


    const result =
        calculateSummary(workouts);


    assert.equal(result.pending, 1);

});
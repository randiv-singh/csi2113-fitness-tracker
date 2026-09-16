function calculateSummary(workouts) {

    const total = workouts.length;

    const completed = workouts.filter(
        workout => workout.status === "Completed"
    ).length;

    const pending = workouts.filter(
        workout => workout.status === "Pending"
    ).length;

    return {
        total,
        completed,
        pending
    };
}


if (typeof module !== "undefined" && module.exports) {

    module.exports = {
        calculateSummary
    };

}
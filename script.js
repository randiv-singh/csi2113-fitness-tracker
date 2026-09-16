let workouts =
    JSON.parse(localStorage.getItem("workouts")) || [];


const exerciseName =
    document.getElementById("exerciseName");

const sets =
    document.getElementById("sets");

const reps =
    document.getElementById("reps");

const addButton =
    document.getElementById("addButton");

const clearButton =
    document.getElementById("clearButton");

const tableBody =
    document.getElementById("workoutTableBody");


function saveWorkouts() {

    localStorage.setItem(
        "workouts",
        JSON.stringify(workouts)
    );

}


function addWorkout() {

    const name = exerciseName.value.trim();

    const workoutSets = Number(sets.value);

    const workoutReps = Number(reps.value);


    if (
        name === "" ||
        workoutSets <= 0 ||
        workoutReps <= 0
    ) {

        alert("Please enter valid workout details.");

        return;

    }


    workouts.push({

        id: Date.now(),

        exercise: name,

        sets: workoutSets,

        reps: workoutReps,

        status: "Pending"

    });


    exerciseName.value = "";
    sets.value = "";
    reps.value = "";


    saveWorkouts();

    displayWorkouts();

}


function updateStatus(id, status) {

    const workout =
        workouts.find(
            workout => workout.id === id
        );


    if (workout) {

        workout.status = status;

        saveWorkouts();

        displayWorkouts();

    }

}


function deleteWorkout(id) {

    workouts =
        workouts.filter(
            workout => workout.id !== id
        );


    saveWorkouts();

    displayWorkouts();

}


function clearWorkouts() {

    workouts = [];

    saveWorkouts();

    displayWorkouts();

}


function updateSummary() {

    const result =
        calculateSummary(workouts);


    document.getElementById("totalWorkouts")
        .textContent = result.total;


    document.getElementById("completedWorkouts")
        .textContent = result.completed;


    document.getElementById("pendingWorkouts")
        .textContent = result.pending;

}


function displayWorkouts() {

    tableBody.innerHTML = "";


    workouts.forEach(workout => {

        const row =
            document.createElement("tr");


        const statusClass =
            workout.status === "Completed"
                ? "completed"
                : "pending";


        row.innerHTML = `

            <td>${workout.exercise}</td>

            <td>${workout.sets}</td>

            <td>${workout.reps}</td>

            <td class="${statusClass}">
                ${workout.status}
            </td>

            <td>

                <button
                    class="complete-button"
                    onclick="updateStatus(${workout.id}, 'Completed')"
                >
                    Complete
                </button>

                <button
                    class="pending-button"
                    onclick="updateStatus(${workout.id}, 'Pending')"
                >
                    Pending
                </button>

                <button
                    class="delete-button"
                    onclick="deleteWorkout(${workout.id})"
                >
                    Delete
                </button>

            </td>

        `;


        tableBody.appendChild(row);

    });


    updateSummary();

}


addButton.addEventListener(
    "click",
    addWorkout
);


clearButton.addEventListener(
    "click",
    clearWorkouts
);


displayWorkouts();
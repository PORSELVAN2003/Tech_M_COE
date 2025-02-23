document.addEventListener("DOMContentLoaded", function() {
    const goalForm = document.getElementById("goalForm");
    const goalMessage = document.getElementById("goalMessage");
    const logForm = document.getElementById("logForm");
    const workoutList = document.getElementById("workoutList");
    const historyList = document.getElementById("historyList");

    goalForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const goal = document.getElementById("goal").value;
        localStorage.setItem("dailyGoal", goal);
        goalMessage.textContent = `Your goal is set to ${goal} steps!`;
    });

    logForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const workoutType = document.getElementById("workoutType").value;
        const duration = document.getElementById("duration").value;

        const entry = document.createElement("li");
        entry.innerHTML = `${workoutType} - ${duration} min <button onclick="removeWorkout(this)">❌</button>`;
        workoutList.appendChild(entry);

        saveWorkout(workoutType, duration);
        displayHistory();
    });

    displayHistory();
});

function saveWorkout(type, duration) {
    let history = JSON.parse(localStorage.getItem("workoutHistory")) || [];
    history.push({ type, duration });
    localStorage.setItem("workoutHistory", JSON.stringify(history));
}

function displayHistory() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";
    let history = JSON.parse(localStorage.getItem("workoutHistory")) || [];

    history.forEach((entry, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${entry.type} - ${entry.duration} min <button onclick="removeHistory(${index})">❌</button>`;
        historyList.appendChild(li);
    });
}

function removeWorkout(button) {
    button.parentElement.remove();
}

function removeHistory(index) {
    let history = JSON.parse(localStorage.getItem("workoutHistory")) || [];
    history.splice(index, 1);
    localStorage.setItem("workoutHistory", JSON.stringify(history));
    displayHistory();
}

document.addEventListener("DOMContentLoaded", function() {
    const goalForm = document.getElementById("goalForm");
    const goalMessage = document.getElementById("goalMessage");

    let savedGoal = localStorage.getItem("dailyGoal");
    if (savedGoal) {
        goalMessage.textContent = `Your goal is set to ${savedGoal} steps!`;
    }

    goalForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const goal = document.getElementById("goal").value;

        if (goal <= 0) {
            alert("Please enter a valid goal greater than 0.");
            return;
        }

        localStorage.setItem("dailyGoal", goal);
        goalMessage.textContent = `Your goal is set to ${goal} steps!`;
    });
});

function updateProgress() {
    const stepsWalked = document.getElementById("stepsWalked").value;
    const goal = localStorage.getItem("dailyGoal");

    if (!goal || goal <= 0) {
        alert("Please set a valid goal first!");
        return;
    }

    if (stepsWalked < 0 || stepsWalked === "") {
        alert("Please enter a valid number of steps.");
        return;
    }

    let percentage = Math.min((stepsWalked / goal) * 100, 100);
    document.getElementById("progressBar").style.width = percentage + "%";
    document.getElementById("progressPercentage").textContent = Math.round(percentage) + "%";

    if (percentage === 100) {
        document.getElementById("progressMessage").textContent = "🎉 Goal Achieved! Keep up the good work!";
    } else {
        document.getElementById("progressMessage").textContent = `You're ${Math.round(percentage)}% done!`;
    }
}
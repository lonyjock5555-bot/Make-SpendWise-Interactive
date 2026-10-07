// =========================================
// SpendWise Budget Data
// =========================================

let monthlyBudget = 50000;

// Array to store expense records
let expenses = [
    {
        name: "Lunch",
        amount: 350,
        category: "Food"
    },
    {
        name: "Bus Fare",
        amount: 100,
        category: "Transport"
    },
    {
        name: "Electricity",
        amount: 500,
        category: "Utilities"
    }
];


// =========================================
// Category Budgets
// =========================================

const categoryBudgets = {
    Food: 10000,
    Transport: 5000,
    Rent: 15000,
    Entertainment: 4000,
    Savings: 10000,
    Utilities: 3000
};


// =========================================
// Get HTML Elements
// =========================================

const expenseForm = document.getElementById("expense-form");

const expenseName = document.getElementById("expense-name");

const expenseAmount = document.getElementById("expense-amount");

const expenseCategory = document.getElementById("expense-category");

const totalBudgetElement = document.getElementById("total-budget");

const totalSpentElement = document.getElementById("total-spent");

const remainingBudgetElement = document.getElementById("remaining-budget");

const budgetMessage = document.getElementById("budget-message");

const activityList = document.getElementById("activity-list");


// =========================================
// Calculate Remaining Balance
// =========================================

function calculateRemainingBalance(budget, expensesTotal) {

    return budget - expensesTotal;

}


// =========================================
// Update Dashboard
// =========================================

function updateDashboard() {

    let totalExpenses = 0;


    // Category totals
    let categoryTotals = {
        Food: 0,
        Transport: 0,
        Rent: 0,
        Entertainment: 0,
        Savings: 0,
        Utilities: 0
    };


    // =========================================
    // LOOP THROUGH EXPENSE ARRAY
    // =========================================

    for (let i = 0; i < expenses.length; i++) {

        let expense = expenses[i];

        totalExpenses += expense.amount;

        categoryTotals[expense.category] += expense.amount;
    }


    // =========================================
    // CALCULATE REMAINING BALANCE
    // =========================================

    let remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );


    // =========================================
    // UPDATE SUMMARY ON WEBPAGE
    // =========================================

    totalBudgetElement.textContent =
        `KES ${monthlyBudget.toLocaleString()}`;

    totalSpentElement.textContent =
        `KES ${totalExpenses.toLocaleString()}`;

    remainingBudgetElement.textContent =
        `KES ${remainingBalance.toLocaleString()}`;


    // =========================================
    // CONDITIONAL BUDGET FEEDBACK
    // =========================================

    if (totalExpenses > monthlyBudget) {

        budgetMessage.textContent =
            `⚠️ You are over budget by KES ${(totalExpenses - monthlyBudget).toLocaleString()}`;

    } else if (totalExpenses >= monthlyBudget * 0.8) {

        budgetMessage.textContent =
            "⚠️ Warning: You have used 80% or more of your budget.";

    } else {

        budgetMessage.textContent =
            "✅ Good job! You are within your budget.";
    }


    // =========================================
    // UPDATE CATEGORY CARDS
    // =========================================

    updateCategory(
        "Food",
        categoryTotals.Food,
        categoryBudgets.Food,
        "food-total",
        "food-percent"
    );

    updateCategory(
        "Transport",
        categoryTotals.Transport,
        categoryBudgets.Transport,
        "transport-total",
        "transport-percent"
    );

    updateCategory(
        "Rent",
        categoryTotals.Rent,
        categoryBudgets.Rent,
        "rent-total",
        "rent-percent"
    );

    updateCategory(
        "Entertainment",
        categoryTotals.Entertainment,
        categoryBudgets.Entertainment,
        "entertainment-total",
        "entertainment-percent"
    );

    updateCategory(
        "Savings",
        categoryTotals.Savings,
        categoryBudgets.Savings,
        "savings-total",
        "savings-percent"
    );

    updateCategory(
        "Utilities",
        categoryTotals.Utilities,
        categoryBudgets.Utilities,
        "utilities-total",
        "utilities-percent"
    );

}


// =========================================
// Update Category
// =========================================

function updateCategory(
    category,
    amount,
    budget,
    totalElementId,
    percentElementId
) {

    let totalElement =
        document.getElementById(totalElementId);

    let percentElement =
        document.getElementById(percentElementId);


    let percentage = 0;


    if (budget > 0) {

        percentage =
            Math.round((amount / budget) * 100);
    }


    totalElement.textContent =
        `KES ${amount.toLocaleString()}`;

    percentElement.textContent =
        `${percentage}%`;
}


// =========================================
// Handle New Expense
// =========================================

expenseForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();


    let name = expenseName.value.trim();

    let amount = Number(expenseAmount.value);

    let category = expenseCategory.value;


    // =========================================
    // CONDITIONAL VALIDATION
    // =========================================

    if (name === "") {

        budgetMessage.textContent =
            "Please enter an expense name.";

        return;
    }


    if (amount <= 0 || isNaN(amount)) {

        budgetMessage.textContent =
            "Please enter a valid amount.";

        return;
    }


    if (category === "") {

        budgetMessage.textContent =
            "Please select a category.";

        return;
    }


    // =========================================
    // ADD NEW RECORD TO ARRAY
    // =========================================

    expenses.push({
        name: name,
        amount: amount,
        category: category
    });


// Update the dashboard
updateDashboard();
updateActivity();


    // Clear the form
    expenseForm.reset();

});


// =========================================
// Load Dashboard
// =========================================

updateDashboard();
// =========================================
// Update Recent Activity
// =========================================

function updateActivity() {

    activityList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {

        let expense = expenses[i];

        let activityItem = document.createElement("div");

        activityItem.className = "activity-item";

        activityItem.innerHTML = `
            <span class="activity-icon">💰</span>

            <div>
                <strong>${expense.name}</strong>
                <small>${expense.category}</small>
            </div>

            <strong>- KES ${expense.amount.toLocaleString()}</strong>
        `;

        activityList.appendChild(activityItem);
    }
}
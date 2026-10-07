# SpendWise Dashboard

SpendWise is a personal finance dashboard that helps users track expenses, monitor their budget, and view their spending by category.

## Week 6 Improvements

For Week 6, I made the SpendWise dashboard interactive using JavaScript.

### Features Added

- Users can add new expenses through a form.
- Expenses are stored in an array.
- Loops are used to process expense records.
- Conditional statements provide budget feedback.
- The dashboard updates automatically using DOM manipulation.
- Recent Activity updates dynamically when new expenses are added.
- Form validation prevents invalid expense information.
- The remaining budget and total spending update automatically.

## JavaScript Concepts Used

### Conditional Statements

The application checks the user's spending and displays different messages depending on the budget situation.

For example:
- If spending is above the budget, a warning is displayed.
- If spending reaches 80% or more of the budget, a warning is displayed.
- Otherwise, the user receives a positive budget message.

### Arrays

An array is used to store multiple expense records.

Each expense contains:
- Expense name
- Amount
- Category

### Loops

A `for` loop is used to go through the expense records and calculate total spending and category totals.

### DOM Manipulation

JavaScript updates information directly on the webpage, including:

- Total Budget
- Total Spent
- Remaining Budget
- Category totals
- Category percentages
- Recent Activity
- Budget feedback messages

### Event Handling

An event listener is connected to the expense form. When the user submits a new expense, JavaScript processes the information, adds it to the expense array, and updates the dashboard.

## Challenges and Solutions

One challenge was connecting JavaScript to the existing dashboard without changing the original design. I solved this by adding IDs to important HTML elements and using JavaScript to update their content dynamically.

Another challenge was making Recent Activity update when a new expense was added. I created a JavaScript function that loops through the expense array and displays the records on the webpage.

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

```text
SpendWise/
├── index.html
├── style.css
├── script.js
└── README.md
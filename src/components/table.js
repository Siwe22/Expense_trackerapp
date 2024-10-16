import React, { useState } from 'react';

const ExpenseTableWithDropdown = () => {
    // Initial data for the table
    const [expenses] = useState([
        { id: 1, type: 'Food', budget: 'R1500', actual: 'R2000' },
        { id: 2, type: 'Clothing', budget: 'R1000', actual: 'R2500' },
        { id: 3, type: 'Entertainment', budget: 'R500', actual: 'R750' }
    ]);

    // State to keep track of the selected row
    const [selectedRow, setSelectedRow] = useState(null);

    // Function to handle dropdown change
    const handleDropdownChange = (event, rowId) => {
        setSelectedRow(rowId);  // Set the selected row ID when a dropdown option is selected
    };

    return (
        <>
            <h1>Expense Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Type of expense</th>
                        <th>Budget</th>
                        <th>Actual amount spent</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.type}</td>
                            <td>{expense.budget}</td>
                            <td>{expense.actual}</td>
                            <td>
                                {/* Dropdown in each row */}
                                <select onChange={(e) => handleDropdownChange(e, expense.id)} defaultValue="">
                                    <option value="" disabled>Select an action</option>
                                    <option value="view">View Details</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Display details of the selected row */}
            {selectedRow && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Selected Expense Details:</h2>
                    {expenses
                        .filter(expense => expense.id === selectedRow)
                        .map(expense => (
                            <div key={expense.id}>
                                <p><strong>Type of Expense:</strong> {expense.type}</p>
                                <p><strong>Budget:</strong> {expense.budget}</p>
                                <p><strong>Actual Amount Spent:</strong> {expense.actual}</p>
                            </div>
                        ))}
                </div>
            )}
        </>
    );
};

export default ExpenseTableWithDropdown;
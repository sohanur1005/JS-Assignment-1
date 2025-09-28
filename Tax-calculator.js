function calculateTax(income, expense) {
    // Input validation
    if (typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0 || expense > income) {
        return "Invalid Input";
    }

    // Tax calculation
    let profit = income - expense;   
    let tax = profit * 0.20;         

    return tax;   
}
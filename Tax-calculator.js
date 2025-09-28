function calculateTax(income, expense) {

    if (typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0 || expense > income) {
        return "Invalid Input";
    }

    
    let profit = income - expense;   
    let tax = profit * 0.20;         

    return tax;   
}
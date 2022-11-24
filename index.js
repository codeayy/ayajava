var state = {
    balance: 100,
    income: 400,
    Expense: 20,
    transactions: [
        
    ]
}

var balanceEl = document.querySelector(`#balance`);
var incomeEl = document.querySelector(`#income`);
var ExpenseEl = document.querySelector(`#Expense`);
var transactionsEl = document.querySelector(`#transactions`);


function init () {
    balanceEl.innerHTML = `$${state.balance}`;
    incomeEl.innerHTML = `$${state.income}`;
    ExpenseEl.innerHTML = `$${state.Expense}`;

    var transactionEl, containerEl, amountEl, item, btnEl;  

    for (var i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];
        transactionEl = document.createElement('li');
        transactionEl.append(item.name);

        transactionsEl.appendChild(transactionEl);

        containerEl  = document.createElement (`div`);
        amountEl = document.createElement (`span`);

        if (item.type === 'income') {
            amountEl.classList.add('income-amt');
        } else if (item.type === 'expense') {
            amountEl.classList.add('expense-amt');
        }
        amountEl.innerHTML = `$${item.amount}`

        containerEl.appendChild(amountEl);

        btnEl = document.createdElement(`button`);
        btnEl.innerHTML = 'X';

        containerEl.appendChild(btnEl);

        transactionEl.appendChild(containerEl);

    }

}

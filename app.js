const transactionUl = document.querySelector('#transactions')

const dumyTransaction = [
    { id: 1, name: 'Bolo de brigadeiro', amount: -20 },
    { id: 2, name: 'Salário', amount: 300 },
    { id: 3, name: 'Torta de frango', amount: -10 },
    { id: 4, name: 'Violão', amount: 150 },
]

const addTransactionIntDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')

    li.classList.add(CSSClass)
    li.innerHTML = `
        ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
    `
    transactionUl.prepend(li)
}

const updatebalanceValues = () => {
    const transactionAmounts = dumyTransaction.map(transaction => transaction.amount)
    const total = transactionAmounts.reduce((accumulator, transaction) => accumulater + transaction, 0)
    console.log(total)
}

const init = () => {
    dumyTransaction.forEach(addTransactionIntDOM)
}

init()
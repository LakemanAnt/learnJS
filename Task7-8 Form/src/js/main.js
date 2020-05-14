let buttonStart = document.getElementById("start"),
    budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthsavingsValue = document.querySelector(".monthsavings-value"),
    yearsavingsValue = document.querySelector(".yearsavings-value"),
    expensesExpenses = document.querySelectorAll(".expenses-item"),
    buttons = document.querySelectorAll("button"),
    firstButton = buttons[0],
    secondButton = buttons[1],
    thirdButton = buttons[2],
    inputsOptinalExpenses = document.querySelectorAll(".optionalexpenses-item"),
    checkIncome = document.querySelector("#income"),
    checkSavings = document.querySelector("#savings"),
    chechSum = document.querySelector("#sum"),
    chechPercent = document.querySelector("#percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");

for (let i = 0; i < 3; i++) {
    buttons[i].disabled = true
}

let money, time;

buttonStart.addEventListener("click", () => {
    do {
        money = +prompt("Ваш бюджет на месяц?", "");
    } while (isNaN(money) || money == "" || money == null);

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    time = new Date();
    year.value = time.getFullYear()
    month.value = time.getMonth() + 1
    day.value = time.getDate()


    for (let i = 0; i < 3; i++) {
        buttons[i].disabled = false
    }

})

firstButton.addEventListener('click', () => {
    let sum = 0

    for (let i = 0; i < expensesExpenses.length; i++) {
        let a = expensesExpenses[i].value,
            b = expensesExpenses[++i].value;
        if (a != "" && b != "") {
            appData.expenses[a] = b;
            sum += +b
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum
    appData.budget -= sum

})

secondButton.addEventListener('click', () => {
    console.log(inputsOptinalExpenses.length)

    for (let i = 0; i < inputsOptinalExpenses.length; i++) {
        let opt = inputsOptinalExpenses[i].value
        appData.optinalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optinalExpenses[i] + " "
    }

})

thirdButton.addEventListener('click', () => {
    if (appData.budget) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка"
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка"
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий"
        } else {
            levelValue.textContent = "Произошла ошибка"
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка"
    }
})

checkIncome.addEventListener("input", () => {
    let items = checkIncome.value
    appData.income = items.split(',')
    incomeValue.textContent = appData.income
})

checkSavings.addEventListener('click', () => {
    if (appData.saving) {
        appData.saving = false
    } else {
        appData.saving = true
    }
})

chechSum.addEventListener("input", () => {
    if (appData.saving) {
        let sum = +chechSum.value,
            percent = +chechPercent.value
        appData.monthIncome = sum / 100 / 12 * percent
        appData.yearIncome = sum / 100 * percent

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1)
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1)
    }

})

chechPercent.addEventListener("input", () => {
    if (appData.saving) {
        let sum = +chechSum.value,
            percent = +chechPercent.value
        appData.monthIncome = sum / 100 / 12 * percent
        appData.yearIncome = sum / 100 * percent

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1)
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1)
    }
})

let appData = {
    budget: money,
    expenses: {},
    optinalExpenses: {},
    income: [],
    timeData: time,
    saving: false,
};
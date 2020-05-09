let money, time;

function start() {
    do {
        money = +prompt("Ваш бюджет на месяц?", "");
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
    } while (isNaN(money) || money == "" || money == null);
}

start();

let appData = {
    budget: money,
    expenses: {},
    optinalExpenses: {},
    income: [],
    timeData: time,
    saving: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "");
            b = prompt("Во сколько обойдеться?", "");

            if (a != "" && b != "") {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(appData.moneyPerDay);
    },
    checkSavings: function () {
        if (appData.saving) {
            let save = +prompt("Какова сума накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = (save / 100 / 12) * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function () {
        let items;
        do {
            items = prompt(
                "Что принесет дополнительный доход? (Перечислите через запятую)",
                ""
            );
        } while (items == "" || items == null || typeof (items) != "string");
        appData.income = items.split(",");
        appData.income.push(prompt("Может что-то ещо?", ""));
        appData.income.sort();
    },
    getIncome: function () {
        appData.income.forEach((item, i) => console.log((+i + 1) + ": " + item))
    },
    getInfAppData: function () {
        console.log("Наша програма включает в себя:")
        for (key in appData)
            console.log(key)
    }
};

// appData.chooseExpenses();

// appData.detectDayBudget();

// appData.checkSavings();

// appData.chooseIncome();
// appData.getIncome()

appData.getInfAppData()
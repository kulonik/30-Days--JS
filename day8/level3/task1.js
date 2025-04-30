const personAccount = {
  firstName: "Anna",
  lastName: "Ivanova",
  incomes: {
    salary: 54000,
    dividends: 5000,
    incomesFromSite: 3000,
  },
  expenses: {
    rent: 5000,
    mobile: 1500,
    petrol: 4200,
    food: 13000,
  },
  totalIncome: function () {
    let income =
      Number(`${this.incomes["salary"]}`) +
      Number(`${this.incomes["dividends"]}`) +
      Number(`${this.incomes["incomesFromSite"]}`);
    return income;
  },
};

console.log(personAccount.totalIncome());

personAccount.totalExpense = function () {
  let expense =
    Number(`${this.expenses["rent"]}`) +
    Number(`${this.expenses["mobile"]}`) +
    Number(`${this.expenses["petrol"]}`) +
    Number(`${this.expenses["food"]}`);
  return expense;
};
console.log(personAccount.totalExpense());

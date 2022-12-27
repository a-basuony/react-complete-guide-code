import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log("add new expense ");
    console.log(expense);
  };



  return (
    // using jsx
    <div className="app">
      <NewExpense onAddExpense={addExpenseHandler} />
      <div>
        <Expenses items={expenses} />
      </div>
    </div>
  );

  //using React hood
  //  return React.createElement('div', {},
  //    React.createElement('h2', {}, "let's get started"),
  //    React.createElement(Expenses, {items: expenses})
  //  )
};

export default App;

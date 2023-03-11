import "./App.css";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";

const initialExpenses = [
  {
    id: 1,
    charge: "rent",
    amount: 1600
  },
  {
    id: 2,
    charge: "car payment",
    amount: 1600
  },
  {
    id: 3,
    charge: "credit card bill",
    amount: 1200
  },
]

console.log(initialExpenses);

function App() {
  return (
    <>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
    </>
  );
}

export default App;

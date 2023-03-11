import "./App.css";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const initialExpenses = [
  {
    id: uuidv4(),
    charge: "rent",
    amount: 1600,
  },
  {
    id: uuidv4(),
    charge: "car payment",
    amount: 1600,
  },
  {
    id: uuidv4(),
    charge: "credit card bill",
    amount: 1200,
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList />
      </main>
    </>
  );
}

export default App;

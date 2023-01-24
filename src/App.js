import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/nav/Menu";
import CounterPage from "./pages/CounterPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<TodoPage />}></Route>
        <Route path="/counter" element={<CounterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

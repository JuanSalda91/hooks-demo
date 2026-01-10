// imports //
import { Routes, Route, Link } from "react-router-dom";
import CounterPage from "./pages/CounterPage.jsx";
import TimerPage from "./pages/TimerPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import ThemePage from "./pages/ThemePage.jsx";
import ReducerPage from "./pages/ReducerPage.jsx";
import CustomHookPage from "./pages/CustomHookPage.jsx";

function App() {
  return (
    <div className="app">
      <header>
        <h1>React Hooks Playground</h1>
        <nav>
          <Link to="/">Counter</Link>
          <Link to="/timer">Timer</Link>
          <Link to="/todos">Todos</Link>
          <Link to="/theme">Theme</Link>
          <Link to="/reducer">Reducer</Link>
          <Link to="/custom">Custom Hook</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="/theme" element={<ThemePage />} />
          <Route path="/reducer" element={<ReducerPage />} />
          <Route path="/custom" element={<CustomHookPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
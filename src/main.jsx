import { ThemeProvider } from "./context/ThemeContext.jsx";
import ReactDOM from "reacr-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <ThemeProvider>
     <App/>
    </ThemeProvider>
  </BrowserRouter>
);
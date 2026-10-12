// ReactDom is a library
import ReactDOM from "react-dom/client";
// interancing component App
import App from "./App.jsx";
// importing css
import "./index.css";
//finding Root element
const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);

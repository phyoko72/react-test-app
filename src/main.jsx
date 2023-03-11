import React from "react"
import ReactDOM from "react-dom/client"
import About from "../components/about"
import Secondary from "../components/Secondary"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <About /> */}
        <Secondary />
    </React.StrictMode>
)

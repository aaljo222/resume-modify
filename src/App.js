/** src/App.jsx **/
import { BrowserRouter } from "react-router-dom";
import PrettyProfile from "./Components/PrettyProfile";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <PrettyProfile />
    </BrowserRouter>
  );
}

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { useSelector } from "react-redux";
function App() {
  const bg = useSelector((state) => state.bg);
  return (
    <div className={"App " + bg}>
      <Home />
    </div>
  );
}

export default App;

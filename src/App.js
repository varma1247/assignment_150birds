import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import NavbarRoutes from "./routes/NavbarRoutes";
function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <NavbarRoutes />
      </Switch>
    </Router>
  );
}

export default App;

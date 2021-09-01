import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/todo">
          <TodoPage />
        </Route>
        <Redirect to="/todo" />
      </Switch>
    </Router>
  );
}

export default App;

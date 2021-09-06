import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FlexboxPage from "./pages/FlexboxPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/todo">
          <TodoPage />
        </Route>
        <Route path="/flexbox">
          <FlexboxPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

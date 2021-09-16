import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FlexboxPage from "./pages/FlexboxPage";
import TodoPage from "./pages/TodoPage";
import GridPage from "./pages/GridPage";
import SassPage from "./pages/SassPage";
import AxiosPage from "./pages/AxiosPage";

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
        <Route path="/grid">
          <GridPage />
        </Route>
        <Route path="/sass">
          <SassPage />
        </Route>
        <Route path="/axios">
          <AxiosPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

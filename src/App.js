import {
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import ListView from "./views/ListView";
import FormView from "./views/FormView";
import TodoContextProvider from "./contexts/TodoContext";
import NavbarMenu from "./components/layouts/NavbarMenu";
function App() {
  return (
    <TodoContextProvider>
      <BrowserRouter>
        <NavbarMenu />
        <Switch>
          <Route
            path="/form"
            component={FormView}
          />
          <Route path="/" component={ListView} />
        </Switch>
      </BrowserRouter>
    </TodoContextProvider>
  );
}

export default App;

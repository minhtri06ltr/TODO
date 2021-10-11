import {
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import ListView from "./views/ListView";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ListView} />
        </Switch>
      </BrowserRouter>
    </TodoContextProvider>
  );
}

export default App;

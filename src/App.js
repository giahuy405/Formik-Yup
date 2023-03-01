import { createBrowserHistory } from "history";
import { HomeTemplate } from "./template/HomeTemplates/HomeTemplates";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Demo from './Demo/Demo.jsx'
export const history = createBrowserHistory()
function App() {
  return (
    // <Router history={history}>
    //   <Switch>
    //   <HomeTemplate exact path='/' Component={Home} />
    //   <HomeTemplate exact path='/home' Component={Home} />
    //   <HomeTemplate exact path='/news' Component={News} />
    //   <HomeTemplate exact path='/contact' Component={Contact} />

    //   <Route exact path='/contact' Component={Login} />
    //   <Route exact path='/contact' Component={Register} />


    //   </Switch>
    // </Router>
    <Demo />
  );
}

export default App;

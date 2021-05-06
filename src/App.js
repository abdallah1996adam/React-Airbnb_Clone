import './assets/App.css';
import Login from './pages/Forms/login'
import Signup from './pages/Forms/signup'
import Home from './pages/Home'
import {BrowserRouter , Route , Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;

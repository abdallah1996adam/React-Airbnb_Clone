import './assets/App.css';
import Login from './pages/Forms/login';
import Signup from './pages/Forms/signup';
import Home from './pages/Home';
import Header from './partials/Header';
import Hote from './pages/Hote';
import {BrowserRouter , Route , Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/hote" component={Hote} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

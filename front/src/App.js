import './App.css';
import {Route,Routes,Switch} from 'react-router-dom'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx';
import Login from './components/Login';
import RecipePage from './components/MainTask/RecipePage';
import Ingredients from './components/MainTask/Ingredients';
import Favourites from './components/MainTask/Favourites';
function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  exact path='/Register' component={Register}/>
      <Route exact path='/Login' component={Login}/>
      <Route exact path="/Recipe" component={RecipePage}/>
      <Route exact path="/*/Nutrition" component={Ingredients}/>
      <Route exact path="/*/Favourites" component={Favourites}/>
    </Switch>
    </>
  );
}

export default App;

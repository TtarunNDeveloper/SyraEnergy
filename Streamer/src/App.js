import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { RegisterPage, LoginPage } from './pages/RegisterPage';

function App() {
  return(
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact Component={HomePage}/>
          <Route path='/login' Component={LoginPage}/>
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

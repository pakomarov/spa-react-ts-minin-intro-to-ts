import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <TodosPage/>
          </Route>
          <Route path="/about">
            <AboutPage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

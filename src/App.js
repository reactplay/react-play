import './App.css';
import React from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import SelectTemp from './Templates/SelectTemp';
import Template1 from './Templates/Template1/Template1';

function App() {
  return (
    <>
      <div className='showHome'>
        
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/selecttemplate' component={SelectTemp}></Route>
            <Route exact path='/template1'>
              <Template1 />
            </Route>
          </Switch>
      </div>
    </>
  );
}

export default App;

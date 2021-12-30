import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MyProjects from './Components/Statics/MyProjects';

import Contact from './Components/Partials/Contact';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import Navigation from  './Components/Partials/Nav';



const App = () => {
    return(
      <Router>
        <Navigation />
        <div className="trialDiv">
          <section>
            <About />
          </section>
          
            <Route 
              path='/' 
              render={()=> <Projects myProjects={MyProjects}/>}
            />
          
          <section>
            <Contact />  
          </section>
        </div>
      </Router>
    )
}

export default App;

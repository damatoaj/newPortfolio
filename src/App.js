import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MyProjects from './Components/Statics/MyProjects';


import Footer from './Components/Partials/Footer';
import Contact from './Components/Partials/Contact';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';



const App = () => {
    return(
      <Router>
        <div className="trialDiv">
          <section>
            <About />
          </section>
          <section>
            <Route 
              path='/' 
              render={()=> <Projects myProjects={MyProjects}/>}
            />
          </section>
          <section>
            <Contact />  
            <Footer />
          </section>
        </div>
      </Router>
    )
}

export default App;

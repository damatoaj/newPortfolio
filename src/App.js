import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import BlogPosts from './Components/Statics/BlogPosts';
import MyProjects from './Components/Statics/MyProjects';
import SlideShow from './Components/Statics/SlideShow';
import musicFiles from './Components/Statics/Music';


import Header from './Components/Partials/Header';
import Footer from './Components/Partials/Footer';
import Article from './Components/Partials/Article';
import Project from './Components/Partials/Project';
import Homepage from './Components/Pages/Homepage';
import Blog from './Components/Pages/Blog';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import Music from './Components/Pages/Music';


const App = () => {
    return(
      <Router>
        <Header />
        <main>
          <Route 
            path='/' 
            render={()=> < About /> } 
          />
          <Route 
            path='/Projects' 
            render={() => <Homepage slides={SlideShow} />}
            render={()=> <Projects myProjects={MyProjects}/>}
          />
          <Route 
            path='/Blog' 
            render={()=> <Blog blogPosts={BlogPosts}/>}
          />
          <Route
          ///article/:id so that the blog info doesn't carry over
            path='/Article/:id'
            render={(props)=> {
              const id = props.match.params.id + 1;
              // console.log(id)
              const blogs={BlogPosts};
              //for clarity make it singular
              const article = BlogPosts.find(({ id }) => id.toString() === props.match.params.id)
              // console.log(articles)
              props = {...article, ...id, ...blogs}
              return <Article {...props}/>
            }}/>
          {/* <Route
            path='/Music'
            render={()=> <Music musicFiles={musicFiles}/>}
          /> */}
          {/* <Route 
            path='/Projects' 
            render={()=> <Projects myProjects={MyProjects}/>} 
          /> */}
          <Route 
            path='/Project/:id'
            render={(props)=> {
              const id = props.match.params.id + 1
              const projects = {MyProjects}
              const project = MyProjects.find(({ id }) => id.toString() === props.match.params.id)
              props = {...project, ...id, ...projects}
              return <Project {...props} />
            }
            }/>
        </main>
        <Footer />
      </Router>
    )
}

export default App;

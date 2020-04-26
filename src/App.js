import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Content from './components/Content'
import Navigation from './components/Navigation'
import Dialogs from './components/Dialogs/Dialogs'
import { Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Header />
        <Navigation />

        <Route path="/profile" component={Content} />
        <Route path="/dialogs" component={Dialogs} />
      </div>
    </BrowserRouter>
  )
}

export default App;

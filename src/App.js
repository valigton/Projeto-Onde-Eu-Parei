import React, { useState,useEffect } from 'react'
import Header from './Header'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'
import Series from './Series'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Home = () =>{
  return(
  <div className='container'>
    <h1>Home</h1>
    <div className="alert alert-warning" role="alert"> Pagina em Desenvolvimento</div>
  </div>
  )
}
const Mensagem = () => {
   
}

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/generos' exact component={Generos} />
          <Route path='/generos/novo' exact component={NovoGenero} />
          <Route path='/generos/:id' exact component={EditarGenero} />
          <Route path='/series' exact component={Series} />
        </Switch>
      </div>
    </Router>
  );
}
export default App

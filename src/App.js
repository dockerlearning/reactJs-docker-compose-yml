import React, { Component } from 'react';
  import { BrowserRouter as Router, Route  } from "react-router-dom"
import Menu from './components/Menu';
import Formulario from './components/Formulario'
import './App.css';
import './css/userlis.css'
import Navbar from './components/Navbar'
import Registro from './registros/RegistroNewUser';

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      user:null
    }
    this.asignarUsuarioState = this.asignarUsuarioState.bind(this)
  }

  asignarUsuarioState(user){

    const newUser = {
      email: user.email,
      lastname:  user.lastname,
      name:  user.name,
      password:  user.password,
      phone: user.phone,
      role:  user.role,
      signupDate:  user.signupDate,
      _id: user._id
    }

    this.setState({
      user:newUser
    })
  }
  

  render() {
    
    return (
      <Router>
      
        <div className="App">

        <Menu/>
      
      
          <header className="App-header">
          
          <Route  exact path="/" component={Navbar} />
          
          <Route exact path="/login" render={()=><Formulario onClickF={this.asignarUsuarioState}/>} />
          {Greeting(this.state.user)}
         
          
         <Route exact path="/Registro" render={()=><Registro onClickF={this.asignarUsuarioState}/>} />

      
          
          </header>
        </div>
      </Router>
      
    );
  }
}

function Greeting(user) {
  console.log("entra");
  if (user) {
    if(user.role=="user"){
      return <Home name={user.name}/>
    }
    console.log(user.email);
  }
  console.log("no hay");
}

const Home=(props)=><h1>Bienvenido{props.name}</h1>
export default App;

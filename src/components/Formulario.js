import React, { Component } from "react";

class Formulario extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: null,
            password:null,
            logued:null

        }

        this.onclickEmail = this.onclickEmail.bind(this)
        this.onClickForm = this.onClickForm.bind(this)
        this.onclickPassword = this.onclickPassword.bind(this)
    }

    onClickForm(e){
            
        e.preventDefault()
        //http://localhost:4030/login/tobito@gmail.com=admin
        fetch(`http://localhost:4030/login/${this.state.email}=${this.state.password}`)
        .then(data=>data.json())
        .then(user=>{       
            console.log(user)
            if(user.message){
                this.setState({
                    logued:user.message
                })
            }if(user.email){
                this.props.onClickF(user.email[0])
            }
            //this.props.onClickF(user.email[0])
        })

    }
    onclickEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onclickPassword(e){
        this.setState({
            password:e.target.value
        })

        
    }
   
    render(){
        return(
                
            <form onSubmit={this.onClickForm}>
            <h1>Inicia Sesion</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input 
                        name="email" 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        onChange={this.onclickEmail}
                    />
                    <small id="emailHelp" className="form-text text-muted">{this.state.logued?this.state.logued:""}</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input 
                        name="pass" 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password"
                         onChange={this.onclickPassword}   
                    />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form> 
            
        )
    }
}

export default Formulario
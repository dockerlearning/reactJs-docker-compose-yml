import React, { Component } from "react";

class Registro extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            lastname:'',
            email:'',
            phone:'',
            password:'',
            message:''
        }
    }


    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    send(e){
        this.setState({
            message:'Regsitro realizado'
        })

       const user ={
           name:this.state.name,
           lastname:this.state.lastname,
           phone:this.state.phone,
           email: this.state.email,
           password: this.state.password
       }

       console.log(user)
       const url='http://localhost:4030/registro',
            params={
                method:'POST',
                body:JSON.stringify(user),
                headers:{
                    'Content-type':'application/json'
                }
            }
        fetch(url,params).then(res=>res.json())
    }

    render(){
        return(

        <div>
            <h1>Registro de usuarios nuevos</h1>
            <div>
                <label htmlFor="name">Nombre</label>
                <input value={ this.state.name } onChange={ this.onChange.bind(this) } type="text" name="name" id="name"/>
            </div>
            <div>
                <label htmlFor="lastname">Apellido</label>
                <input value={ this.state.lastname } onChange={ this.onChange.bind(this) } type="text" name="lastname" id="lastname"/>
            </div>
            <div>
                <label htmlFor="phone">Telefono</label>
                <input value={ this.state.phone } onChange={ this.onChange.bind(this) } type="number" name="phone" id="phone"/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input value={ this.state.email } onChange={ this.onChange.bind(this) } type="email" name="email" id="email"/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input value={ this.state.password } onChange={ this.onChange.bind(this) } type="password" name="password" id="password" />
            </div>
            <div>
                <button onClick={ this.send.bind(this)} className="btn btn-primary"> Enviar</button>
                <span>{ this.state.message }</span>
            </div>

            <p>{ JSON.stringify(this.state) }</p>
        </div>
        )
    }

} 

export default Registro
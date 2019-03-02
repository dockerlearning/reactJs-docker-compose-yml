import React, { Component } from "react";

import User from "./User"
import user from './img/user.png'
import EditartRole from "./EdiartRole"

 class Navbar extends Component{
    constructor (props){
        super(props)
        this.state= {
            user:[]
        }
    }

    componentDidMount(){
        return(

            fetch("http://10.10.214.32:4030/user")
            .then(data=>data.json())
            .then(user=>{
                this.setState({
                    user:user
                })
            })
        )
      
    }

    render(){
        console.log(this.state)
        return (
           <div className= "tablaConteedor">

               <h1>Usuarios</h1>
               <table className="table">
                    <thead className="p-3 mb-2 bg-primary text-white">
                        <tr>
                        
                        <th scope="col"></th>
                        
                        <th scope="col">Nombre </th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Rol</th>
                        <th scope="col" width="150" >Editar rol</th>
                        </tr>
                    </thead>
                
                <tbody id="list"className="listasDeUsuarios">
                    {
                        
                        this.state.user.map((u,index)=>{
                            return (
                                <tr>
                                    <div className="contimg">
                                    <ht scope="col" ><img src={user} className="login-box"></img></ht>
                                    </div>
                            
                                    <td>{u.name}</td>
                                    <td>{u.lastname}</td>
                                    <td>{u.email}</td>
                                    <td>{u.role}</td>
                                    
                                    <td> <EditartRole u={u} /></td>
                                </tr>
                            )
                        })
                        
                    }
                    
               </tbody>
               
               </table>
               <button onClick={this.componentDidMount.bind(this)} className="btn btn-success btn-lg btn-block">Actualizar Lista</button>
        </div>
        
        )
    }
 };
 
export default Navbar;
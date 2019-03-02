import React, { Component } from "react";
import { BrowserRouter as Router, Route  } from "react-router-dom"
import Navbar from "./Navbar";  


 class EditartRole extends Component{
    constructor (props){
        super(props)
        this.state={
            user:this.props.u
        }

        this.clickOnChange = this.clickOnChange.bind(this)
    }

    clickOnChange(e){

        if(this.state.user.role=="user"){
            this.state.user.role="admin"
        }else{
            this.state.user.role="user"
        }
        // http://localhost:4030/editrole/tobito@gmail.com=admin=admin
        fetch(`http://localhost:4030/editrole/${this.state.user.email}=${this.state.user.password}=${this.state.user.role}`)
        .then(data=>data.json())
        .then(r=>console.log(r))
        
        //console.log(e.target.value)
        //onsole.log(this.state.user)
        
    }
    

    render(){
        {console.log('este es log:::')}
        return(

            
            <div className="input-group mb-0.5">
                <select class="custom-select" id="inputGroupSelect01" value={this.state.user} onChange={this.clickOnChange}>
                    <option value="">editar</option>
                    <option value={this.props.u.role=="user" ? 'admin' : 'user'}> {this.props.u.role=="user" ? 'admin' : 'user' }</option>
                    {/* <option value={this.props.u.role=="admin" ? 'user' : 'admin'}> {this.props.u.role=="admin" ? 'user' : 'admin' }</option> */}
                
                </select>
            </div>
        )
    }
 }

 export default EditartRole;
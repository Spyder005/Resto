import React, { Component } from 'react'
import { Form ,Button } from 'react-bootstrap'

export default class Login extends Component {

    constructor(){
        super();
        this.state = {
            name:'',
            password:'',
        }
    }

    login(){
        // console.warn(this.state)
        fetch('http://localhost:3000/login?q='+this.state.name).then((result)=>{
        result.json().then((resp)=>{
          console.warn("resp",resp)
          if(resp.length > 0){
              console.warn(this.props.history.push('list'))
          }
          else{
            alert("Please check your Username or Password")
          }
        })
    })
    }

  render() {
    return (
      <div> 
        <h1 style={{margin:'revert'}}>Login Page</h1>
        <Form>
            <input type='text' name='name'placeholder='Enter UserName' onChange={(event)=>this.setState({name:event.target.value})}  /> <br></br> <br></br>
            <input type='password' name='password'placeholder='Enter Password' onChange={(event)=>this.setState({password:event.target.value})}/> <br></br> <br></br>
            <Button onClick={()=>this.login()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

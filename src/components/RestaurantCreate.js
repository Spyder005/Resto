import React, { Component } from 'react'
import { Form,Container } from 'react-bootstrap'
export default class RestaurantCreate extends Component {

   constructor(){
    super();
    this.state = {
      name:null,
      email:null,
      rating:null,
      address:null
    }
   }


   create() {
           fetch('http://localhost:3000/restaurant',{
             method: 'POST',
             headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
          }).then((result)=>{
            result.json().then((resp) => {
              alert("RESTAURANT HAS BEEN ADDED!");
          })

           })
   }


  render() {
    return (
      <Container>
        <h1>Restaurant Add</h1>
        <Form>
  <div className="mb-3">
    {/* <label for="exampleInputEmail1" className="form-label ">Email address</label> */}
    <input type="text" className="form-control my-3 " style={{backgroundColor:'grey',color:'white'}} placeholder='Restaurant Name' onChange={(e)=>this.setState({name:e.target.value})}/>
    <input type="email" className="form-control my-3" style={{backgroundColor:'grey',color:'white'}} placeholder='Restaurant Email'onChange={(e)=>this.setState({email:e.target.value})}/>
    <input  className="form-control my-3" style={{backgroundColor:'grey',color:'white'}} placeholder='Restaurant Rating'onChange={(e)=>this.setState({rating:e.target.value})}/>
    <input  className="form-control my-3"  style={{backgroundColor:'grey',color:'white'}}  placeholder='Restaurant Address'onChange={(e)=>this.setState({address:e.target.value})}/>
    
  </div>
  
  
  <button type="submit" className="btn btn-primary" onClick={()=>{this.create()}}>Add </button>
</Form>
      </Container>
    )
  }
}
